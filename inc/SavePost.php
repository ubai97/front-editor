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
        $image = null;
        $image_url = null;

        if (isset($_FILES['image'])) {
            $image = $_FILES['image'];
        }

        if (isset($_POST['image_url'])) {
            $image_url = $_POST['image_url'];
        }

        $upload_data = self::upload_image($image, $image_url);

        wp_send_json_success(["url" => $upload_data['upload']['url']]);
    }

    /**
     * Save post from front
     */
    public static function update_or_add_post()
    {
        if (!wp_verify_nonce($_POST['nonce'], 'bfe_nonce'))
            wp_send_json_error(__('Security error, please update page' . 'BFE'));

        $editor_data = json_decode(stripslashes($_POST['editor_data']), true);
        $post_title = esc_html($_POST['post_title']);
        $cur_user_id = get_current_user_id();
        $content_html = '';
        $post_id = 'new';
        if (!empty($_POST['post_id'])) {
            $post_id = $_POST['post_id'];
        }


        foreach ($editor_data['blocks'] as $data) {

            $single_html = Editor::data_to_html($data['type'], $data['data'] ?? '');

            $content_html .= $single_html;
        }

        $post_data = array(
            'post_title'    => $post_title,
            'post_content'  => $content_html,
        );

        $post_data['post_status'] = 'publish';

        if (!empty($_POST['category'])) {
            $post_data['post_category'] = [$_POST['category']];
        }

        if ($post_id !== 'new') {
            $post_id = intval($post_id);
            // Checking is user has access to edit post 
            if (!Editor::can_edit_post($cur_user_id, $post_id)) {
                wp_send_json_error($post_id);
                wp_die();
            }
            $post_data['ID'] = $post_id;
            self::update_post($post_id, $post_data);
        } else {
            $post_data['post_author'] = $cur_user_id;
            $post_id = self::insert_post($post_data);
        }

        update_post_meta($post_id, 'bfe_editor_js_data', wp_json_encode($editor_data['blocks']));

        self::add_post_thumbnail($post_id,$_FILES['image']??'');

        wp_send_json_success(
            [
                'url' => get_the_permalink($post_id),
                'post_id' => $post_id
            ]
        );

        wp_die();
    }

    /**
     * Adding post thumbnail or delete
     *
     * @param [type] $post_id
     * @param [type] $POST
     * @param [type] $FILES
     * @return void
     */
    public static function add_post_thumbnail($post_id,$images)
    {
        // downloading image and adding to post
        if (!empty($images)) {
            $post_thumbnail = $images;
            $upload_data = self::upload_image($post_thumbnail);
            set_post_thumbnail($post_id, (int) $upload_data['attach_id']);
            return;
        }

        delete_post_thumbnail($post_id);
    }

    /**
     * update post
     *
     * @param [type] $post_title
     * @param [type] $content_html
     * @param [type] $cur_user_id
     * @return void
     */
    public static function update_post($post_id, $post_data)
    {

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
    public static function insert_post($post_data)
    {

        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            wp_send_json_error($post_id->get_error_message());
        }
        return $post_id;
    }

    /**
     * upload image handler
     *
     * @param [type] $image
     * @param [type] $image_url
     * @return void
     */
    public static function upload_image($image = null, $image_url = null)
    {

        if (empty($image) && empty($image_url)) {
            return false;
        }

        $post_id = $_POST['post_id'] ?? 1;

        if (!empty($image)) {
            $image = $image;

            $cont = file_get_contents($image['tmp_name']);
            $new_file_name = $image['name'];
            $ext = $image['type'];
        }

        if (!empty($image_url)) {
            $url = $image_url;
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

        $attach_id = wp_insert_attachment($attachment, $upload['file']);

        require_once(ABSPATH . 'wp-admin/includes/image.php');

        $attach_data = wp_generate_attachment_metadata($attach_id, $upload['file']);

        wp_update_attachment_metadata($attach_id, $attach_data);

        return [
            'attach_data' => $attach_data,
            'upload' => $upload,
            'attach_id' => $attach_id
        ];
    }
}

SavePost::init();
