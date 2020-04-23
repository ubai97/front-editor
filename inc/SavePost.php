<?php

namespace BFE;

class SavePost
{

    public static function init()
    {

        add_action('wp_ajax_save_post_from_front', [__CLASS__, 'save_post_from_front']);
        //add_action('wp_ajax_save_post_wp_admin_block', [__CLASS__, 'save_post_wp_admin_block']);
        add_action('wp_ajax_bfe_uploading_image', [__CLASS__, 'bfe_uploading_image']);
    }


    public static function bfe_uploading_image()
    {
        $post_id = $_POST['post_id'];

        if (isset($_FILES['image'])) {
            $file = $_FILES['image'];

            $cont = file_get_contents($file['tmp_name']);
            $new_file_name = $file['name'];
            $ext = $file['type'];
        }

        if (isset($_POST['image_url'])) {
            $url = $_POST['image_url'];
            $get = wp_remote_get($url);

            $new_file_name = basename($url); // to get file name
            $ext = 'image/'.pathinfo($url, PATHINFO_EXTENSION); // to get extension
            //$new_file_name = pathinfo($url, PATHINFO_FILENAME); //file name without extension

            if (empty($get['response']['code'])) {
                return false;
            }

            $cont = wp_remote_retrieve_body($get);
        }


        $upload = wp_upload_bits($new_file_name, null, $cont);

        $attachment = array(
            'post_title' => $new_file_name,
            'post_mime_type' => $ext
        );

        $attach_id = wp_insert_attachment($attachment, $upload['file'], $post_id);

        require_once(ABSPATH . 'wp-admin/includes/image.php');

        $attach_data = wp_generate_attachment_metadata($attach_id, $upload['file']);

        wp_update_attachment_metadata($attach_id, $attach_data);

        // xxx creat media post
        wp_send_json_success(["url" => $upload['url']]);
    }
    /**
     * Save post from front
     */
    public static function save_post_from_front()
    {
        $all_data = $_POST['data'];
        $number = 0;
        $post_title = '';
        $cur_user_id = get_current_user_id();
        $content_html = '';

        foreach ($all_data['blocks'] as $data) {

            $single_html = self::data_to_html($data['type'], $data['data']);
            if ($data['type'] == 'header' && $number == 0) {
                $post_title = $single_html;
            } else {
                $content_html .= $single_html;
            }

            $number++;
        }

        // Creating post
        $post_data = array(
            'post_title'    => wp_strip_all_tags($post_title),
            'post_content'  => $content_html,
            'post_status'   => 'publish',
            'post_author'   => $cur_user_id,
        );

        // Insert post to db
        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            wp_send_json_error($post_id->get_error_message());
        }

        // Adding post meta to know the editor page
        update_post_meta($post_id, 'editor_js_data', $all_data['blocks']);

        wp_send_json_success($post_id);

        wp_die();
    }

    /**
     * Generating html from post data
     *
     * @param [type] $type
     * @param [type] $data
     * @return void
     */
    public static function data_to_html($type, $data)
    {
        if ($type == 'header') {
            $html = sprintf('<h%s>%s</h%s>', $data['level'], $data['text'], $data['level']);
        }

        if ($type == 'paragraph') {
            $html = sprintf('<p>%s</p>', $data['text']);
        }

        if ($type == 'list') {
            $html = '<ul>';
            foreach ($data['items'] as $item) {
                $html .= sprintf('<li>%s</li>', $item);
            }
            $html .= '</ul>';
        }


        return $html;
    }
}

SavePost::init();
