<?php

namespace BFE;

class SavePost
{

    public static function init()
    {

        add_action('wp_ajax_save_post_from_front', [__CLASS__, 'save_post_from_front']);
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
        update_post_meta( $post_id, 'editor_js_data', $all_data['blocks'] );

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
