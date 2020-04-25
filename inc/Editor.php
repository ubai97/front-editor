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

        $post_id = 'new';
        $editor_data = 'new';
        $button_text = __('Publish', 'BFE');

        if (!empty($_GET)) {
            if (intval($_GET['post_id'])) {
                $post_id = $_GET['post_id'];
            }
        }

        if (!self::can_edit_post(0, $post_id)) {
            return sprintf('<h2>%s</h2>', __('You do not have permission to edit this post', 'BFE'));
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
     * Can user edit post 
     *
     * @param [type] $cur_user
     * @param [type] $post_id
     * @return boolean
     */
    public static function can_edit_post($cur_user_id = 0, $post_id = 'new')
    {
        if (!$cur_user_id) {
            $cur_user_id = get_current_user_id();
        }

        if (!is_user_logged_in()) {
            return false;
        }

        if (current_user_can('edit_others_pages')) {
            return true;
        }

        if ($post_id !== 'new') {
            $post_user = (int) get_post_field('post_author', $post_id);
            if ($post_user !== $cur_user_id) {
                return false;
            }
        }

        return true;
    }

    /**
     * Getting edit links by id
     *
     * @param [type] $post_id
     * @return void
     */
    public static function get_post_edit_link($post_id)
    {

        $editor_page = self::get_editor_page_link();

        if (!$editor_page) {
            return false;
        }

        return sprintf('%s?post_id=%s', $editor_page, $post_id);
    }

    /**
     * Getting the page link with editor shortcode
     *
     * @return void
     */
    public static function get_editor_page_link()
    {
        $args = [
            'posts_per_page' => 1,
            'post_type' => 'page',
            'meta_query' => [
                [
                    'key' => 'editor_js_page',
                    'compare' => 'EXISTS'
                ]
            ]
        ];

        $editor_page = new \WP_Query($args);

        if ($editor_page->have_posts()) {

            while ($editor_page->have_posts()) {
                $editor_page->the_post();

                return get_the_permalink();
            }
        }

        return false;
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
        switch ($type) {
            case 'header';
                $html = sprintf('<h%s>%s</h%s>', $data['level'], $data['text'], $data['level']);
                break;

            case 'paragraph';
                $html = sprintf('<p>%s</p>', $data['text']);
                break;

            case 'list';
                $html = '<ul>';
                foreach ($data['items'] as $item) {
                    $html .= sprintf('<li>%s</li>', $item);
                }
                $html .= '</ul>';
                break;

            case 'code';
                $html = sprintf('<div class="bfe-code"><code class="bfe-code__content">%s</code></div>', $data['code']);
                break;

            case 'delimiter':
                $html = '<div class="bfe-delimiter"></div>';
                break;

            case 'embed':
                ob_start();
                require_once BFE_Template_PATH . 'editor/embed.php';
                $html = ob_get_clean();
                break;

            case 'image':
                $image_url = $data['file']['url'];
                $image_id = attachment_url_to_postid($image_url);
                ob_start();
                require_once BFE_Template_PATH . 'editor/image.php';
                $html = ob_get_clean();
                break;

            case 'quote':
                ob_start();
                require_once BFE_Template_PATH . 'editor/quote.php';
                $html = ob_get_clean();
                break;

            case 'table':
                ob_start();
                require_once BFE_Template_PATH . 'editor/table.php';
                $html = ob_get_clean();
                break;

            case 'checklist':
                ob_start();
                require_once BFE_Template_PATH . 'editor/checklist.php';
                $html = ob_get_clean();
                break;
        }

        /**
         * html that generated type of block and data of 
         * that block you can use this filter for make your html elements
         */
        $html = apply_filters('bfe_editor_data_to_html_filter', $html, $type, $data);

        return $html;
    }
}
