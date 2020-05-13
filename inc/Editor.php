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
                'type' => 'paragraph',
                'data' => [
                    'text' => __('Add content', 'front-editor')
                ]
            ]
        ];

        return $data;
    }

    /**
     * page editor init
     *
     * @return void
     */
    public static function show_front_editor()
    {
        // Adding post meta to know the editor page if no page founded
        if (!self::get_editor_page_link()) {
            update_post_meta(get_the_ID(), 'editor_js_page', true);
        }

        $post_id = 'new';
        $editor_data = 'new';
        $button_text = __('Publish', 'front-editor');
        $new_post_text = false;
        $html_content = '';

        if (!empty($_GET['post_id'])) {

            $post_id = sanitize_text_field($_GET['post_id']);

            if ($post_id !== 'new') {
                if (!$post_id = intval($post_id)) {
                    return sprintf('<h2>%s</h2>', __('The post you trying to edit is not exist, please create a new one', 'front-editor'));
                }
                if ($post_id = intval($post_id)) {
                    if (!get_post_status($post_id)) {
                        return sprintf('<h2>%s</h2>', __('The post you trying to edit is not exist, please create a new one', 'front-editor'));
                    }
                }
            }
        }

        if (!self::can_edit_post(0, $post_id)) {
            return sprintf('<h2>%s</h2>', __('You do not have permission to edit this post', 'front-editor'));
        }

        if ($post_id !== 'new') {
            $new_post_text = __('Add new', 'front-editor');
            $new_post_link = self::get_editor_page_link();
            // if we sending $editor_data = "" in js it will render $html_content data
            $editor_data = "";
            if ($editor_data = get_post_meta($post_id, 'bfe_editor_js_data', true)) {
                $editor_data = json_decode($editor_data, true);
                $front_edited_modified_time = $editor_data['time'] / 1000;
                $admin_post_modified_time = get_the_modified_time('U', $post_id);
                // if is the post is changed from admin we will use html content
                if ($admin_post_modified_time > $front_edited_modified_time) {
                    $editor_data = "";
                }
            }

            $post = get_post($post_id);
            $html_content = $post->post_content;

            $button_text = __('Update', 'front-editor');
        } else {
            $editor_data = Editor::example_editor_data();
        }

        $data = [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('bfe_nonce'),
            'data' => $editor_data,
            'html_post_content' => $html_content,
            'translations' => [
                'save_button' => [
                    'publish' => __('Publish', 'front-editor'),
                    'updating' => sprintf('%s...', __('Updating', 'front-editor')),
                    'update' => __('Update', 'front-editor')
                ],
                'View Page' => __('View Page', 'front-editor')
            ]
        ];

        $data = json_encode($data);

        wp_localize_script('bfee-editor.js', 'editor_data', $data);

        wp_enqueue_script('bfee-editor.js');

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
                $guten_type = 'heading';
                $html = sprintf(
                    '<!-- wp:%s {"level":%s} --><h%s>%s</h%s><!-- /wp:%s -->',
                    $guten_type,
                    $data['level'],
                    $data['level'],
                    $data['text'],
                    $data['level'],
                    $guten_type
                );
                break;

            case 'paragraph';
                $html = sprintf('<!-- wp:paragraph --><p>%s</p><!-- /wp:paragraph -->', $data['text']);
                break;

            case 'list';
                $html = '<!-- wp:list --><ul>';
                foreach ($data['items'] as $item) {
                    $html .= sprintf('<li>%s</li>', $item);
                }
                $html .= '</ul><!-- /wp:list -->';
                break;

            case 'code';
                $html = sprintf('<!-- wp:code --><pre class="bfe-code wp-block-code"><code>%s</code></pre><!-- /wp:code -->', $data['code']);
                break;

            case 'delimiter':
                $html = '<!-- wp:separator --><hr class="wp-block-separator bfe-delimiter"/><!-- /wp:separator -->';
                break;

            case 'embed':
                ob_start();
                require BFE_Template_PATH . 'editor/embed.php';
                $html = trim(ob_get_clean());
                break;

            case 'image':
                $image_url = $data['file']['url'];
                $image_id = attachment_url_to_postid($image_url);
                ob_start();
                require BFE_Template_PATH . 'editor/image.php';
                $html = trim(ob_get_clean());
                break;

            case 'quote':
                ob_start();
                require BFE_Template_PATH . 'editor/quote.php';
                $html = ob_get_clean();
                break;

            case 'table':
                ob_start();
                require BFE_Template_PATH . 'editor/table.php';
                $html = ob_get_clean();
                break;

            case 'checklist':
                ob_start();
                require BFE_Template_PATH . 'editor/checklist.php';
                $html = ob_get_clean();
                break;
        }
        $html .= htmlspecialchars("\n");

        /**
         * html that generated type of block and data of 
         * that block you can use this filter for make your html elements
         */
        $html = apply_filters('bfe_editor_data_to_html_filter', $html, $type, $data);

        return $html;
    }
}
