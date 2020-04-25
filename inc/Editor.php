<?php

namespace BFE;

class Editor
{
    /**
     * Example data for editor
     *
     * @return void
     */
    public static function example_editor_data()
    {

        $data = [
            [
                'type' => "header",
                'data' => [
                    'text' => __("Add Title", 'BFE'),
                    'level' => 1
                ]
            ],
            [
                'type' => 'paragraph',
                'data' => [
                    'text' => __('Add content', 'BFE')
                ]
            ]
        ];

        return $data;
    }

    /**
     * editor js data to html
     *
     * @return void
     */
    public static function show_front_editor()
    {
        if (!self::can_edit_post()) {
            return sprintf('<h2>%s</h2>', __('You do not have permission', 'BFE'));
        }

        $post_id = 'new';
        $editor_data = 'new';
        $button_text = __('Publish', 'BFE');

        if (!empty($_GET)) {
            if (intval($_GET['post_id'])) {
                $post_id = $_GET['post_id'];
            }
        }

        if ($post_id !== 'new') {
            $editor_data = json_decode(get_post_meta($post_id, 'editor_js_data', true));
            $button_text = __('Update', 'BFE');
        } else {
            $editor_data = Editor::example_editor_data();
        }

        $data = [
            'ajax_url' => admin_url('admin-ajax.php'),
            'data' => $editor_data,
            'translations' => [
                'save_button' => [
                    'publish' => __('Publish', 'BFE'),
                    'updating' => sprintf('%s...', __('Updating', 'BFE')),
                    'update' => __('Update', 'BFE')
                ],
                'View Page' => __('View Page', 'BFE')
            ]
        ];

        $data = json_encode($data);

        wp_localize_script('bfee-editor.js', 'editor_data', $data);

        wp_enqueue_script('bfee-editor.js');

        // Adding post meta to know the editor page
        update_post_meta(get_the_ID(), 'editor_js_page', true);

        ob_start();
        require_once BFE_Template_PATH . 'block-editor.php';
        return ob_get_clean();
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
        $html = '';
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

    /**
     * Can user edit post 
     *
     * @param [type] $cur_user
     * @param [type] $post_id
     * @return boolean
     */
    public static function can_edit_post($cur_user_id = false, $post_id = 0)
    {
        if (!$cur_user_id) {
            $cur_user_id = get_current_user_id();
        }

        if (!is_user_logged_in()) {
            return false;
        }

        if (!current_user_can('edit_others_pages')) {
            return false;
        }

        if ($post_id) {
            if (get_the_author_meta($post_id) !== $cur_user_id) {
                return false;
            }
        }

        return true;
    }
}
