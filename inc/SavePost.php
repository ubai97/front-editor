<?php

namespace BFE;

class SavePost
{

    public static function init()
    {

        add_action('wp_ajax_bfe_update_post', [__CLASS__, 'update_or_add_post']);
        add_action('wp_ajax_bfe_uploading_image', [__CLASS__, 'bfe_uploading_image']);
    }


    /**
     * uploading image by url and by file
     *
     * @return void
     */
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
            $ext = 'image/' . pathinfo($url, PATHINFO_EXTENSION); // to get extension

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

        wp_send_json_success(["url" => $upload['url']]);
    }

    /**
     * Save post from front
     */
    public static function update_or_add_post()
    {
        $editor_data = $_POST['editor_data'];
        $number = 0;
        $post_title = '';
        $cur_user_id = get_current_user_id();
        $content_html = '';
        $post_id = $_POST['post_id'];

        foreach ($editor_data['blocks'] as $data) {

            $single_html = Editor::data_to_html($data['type'], $data['data']??'');
            if ($data['type'] == 'header' && $number == 0) {
                $post_title = $single_html;
            } else {
                $content_html .= $single_html;
            }

            $number++;
        }

        if ($post_id !== 'new') {
            $post_id = intval($post_id);
            // Checking is user has access to edit post 
            if(!Editor::can_edit_post($cur_user_id,$post_id)){
                wp_send_json_error($post_id);
                wp_die();
            }

            self::update_post($post_id, $post_title, $content_html, $cur_user_id);
        } else {
            $post_id = self::insert_post($post_title, $content_html, $cur_user_id);
        }

        // Adding post meta to know the editor page
        update_post_meta($post_id, 'bfe_editor_js_data', wp_json_encode($editor_data['blocks']));

        wp_send_json_success([
            'url' => get_the_permalink($post_id),
            'post_id' => $post_id
            ]
        );

        wp_die();
    }

    /**
     * update post
     *
     * @param [type] $post_title
     * @param [type] $content_html
     * @param [type] $cur_user_id
     * @return void
     */
    public static function update_post($post_id, $post_title, $content_html, $cur_user_id)
    {

        $post_data = array(
            'ID' => $post_id,
            'post_title'    => wp_strip_all_tags($post_title),
            'post_content'  => $content_html,
        );

        $post_id = wp_update_post($post_data);

        if (is_wp_error($post_id)) {
            wp_send_json_error($post_id->get_error_message());
        }
    }

    /**
     * creat post
     *
     * @param [type] $post_title
     * @param [type] $content_html
     * @param [type] $cur_user_id
     * @return void
     */
    public static function insert_post($post_title, $content_html, $cur_user_id)
    {

        $post_data = array(
            'post_title'    => wp_strip_all_tags($post_title),
            'post_content'  => $content_html,
            'post_status'   => 'publish',
            'post_author'   => $cur_user_id,
        );

        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            wp_send_json_error($post_id->get_error_message());
        }
        return $post_id;
    }
}

SavePost::init();
