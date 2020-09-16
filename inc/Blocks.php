<?php

/**
 * Editor blocks for gutenberg and front part
 *
 * Long Description.
 *
 * @link URL
 * @since x.x.x (if available)
 *
 * @package bfee
 */

namespace BFE;

class Block
{

    public static function init()
    {
        add_action('init', [__CLASS__, 'gutenberg_add_editor_block']);
        add_action('enqueue_block_editor_assets', [__CLASS__, 'gutenberg_editor_block_editor_scripts']);
        // post status
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_post_status_check'], 10, 3);
        // image selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'add_post_image_selection'], 12);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'image_on_save_check'], 10, 3);
        // category selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'category_select'], 13, 2);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_category_on_save_and_check'], 10, 3);

        // tag selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'tag_select'], 13);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_tag_on_save_and_check'], 10, 3);
    }

    /**
     * Gutenberg block scripts
     *
     * @return void
     */
    public static function gutenberg_editor_block_editor_scripts()
    {
        $asset = require FE_PLUGIN_DIR_PATH . 'assets/editor/editor.asset.php';

        wp_register_script(
            'bfe-block-script',
            plugins_url('assets/editor/editor.js', dirname(__FILE__)),
            $asset['dependencies'],
            $asset['version'],
            true
        );

        wp_register_style(
            'bfe-block-style',
            plugins_url('assets/editor/main.css', dirname(__FILE__)),
            [],
            $asset['version']
        );

        $data = [
            'translations' => [
                'publish' => __('Publish', 'front-editor'),
                'pending' => __('Pending', 'front-editor'),
                'post_status' => __('Post status', 'front-editor'),
                'post_status_desc' => __('when user is adding the post what status it must have', 'front-editor'),
                'title' => __('Front editor settings', 'front-editor'),
                'post_image' => __('Post image', 'front-editor'),
                'post_category' => __('Post category', 'front-editor'),
                'show_empty_category' => __('Show empty categories', 'front-editor'),
                'category_multiple' => __('Choose multiple category', 'front-editor'),
                'category_settings_title' => __('Category settings', 'front-editor'),
                'post_tags' => __('Post tags', 'front-editor'),
                'tags_settings_title' => __('Tags settings', 'front-editor'),
                'tags_add_new' => __('Ability to add new tags', 'front-editor'),
                'display' => __('Display', 'front-editor'),
                'always_display' => __('Always display', 'front-editor'),
                'add_new_button' => __('Add new button', 'front-editor'),
                'require' => __('Display and require', 'front-editor'),
                'disable' => __('Disable this field', 'front-editor'),
                'editor_settings_title' => __('Editor plugins', 'front-editor'),
            ],
            'editor_pro_settings' => [
                'table_block' => false,
                'warning_block' => false,
                'gallery_block' => false
            ]
        ];

        wp_enqueue_script('bfe-block-script');

        wp_localize_script('bfe-block-script', 'editor_block_data', apply_filters('bfe_front_editor_backend_block_localize_data', $data));
    }

    /**
     * Rendering block in front
     *
     * @param [type] $attributes
     * @param [type] $content
     * @return void
     */
    public static function bfe_content_block($attributes, $content)
    {
        // Start capture.
        ob_start();
        echo Editor::show_front_editor($attributes, $content);
        return ob_get_clean();
    }

    /**
     * Registering block
     *
     * @return void
     */
    public static function gutenberg_add_editor_block()
    {

        if (!function_exists('register_block_type')) {
            // Gutenberg is not active.
            return;
        }

        register_block_type('bfe/bfe-block', [
            'editor_script' => 'bfe-block-script',
            'style' => 'bfe-block-style',
            'editor_style' => 'bfe-block-style',
            'render_callback' => [__CLASS__, 'bfe_content_block']
        ]);
    }

    /**
     * adding status
     *
     * @param [type] $post_data
     * @param [type] $data
     * @param [type] $file
     * @return void
     */
    public static function add_post_status_check($post_data, $data, $file)
    {
        $settings = get_post_meta($_POST['editor_post_id'], 'save_editor_attributes_to_meta', 1);
        $post_status = sanitize_text_field($settings['editor_post_status']);

        if (empty($post_status)) {
            return $post_data;
        }

        $post_data['post_status'] = $post_status;

        return $post_data;
    }

    /**
     * Add post image selection
     *
     * @return void
     */
    public static function add_post_image_selection($post_id)
    {

        $settings = get_post_meta(get_the_ID(), 'save_editor_attributes_to_meta', 1);
        $post_image = sanitize_text_field($settings['post_image']);

        if ($post_image === 'disable') {
            return;
        }

        require FE_Template_PATH . 'front-editor/post-featured-image.php';
    }

    /**
     * Image check
     *
     * @param [type] $post_data
     * @param [type] $data
     * @param [type] $file
     * @return void
     */
    public static function image_on_save_check($post_data, $data, $file)
    {

        $settings = get_post_meta($_POST['editor_post_id'], 'save_editor_attributes_to_meta', 1);
        $post_image = sanitize_text_field($settings['post_image']);
        $is_featured_image_exist = $_POST['thumb_exist'] ?? 0;

        if ($post_image === 'disable') {
            return $post_data;
        }

        if ($is_featured_image_exist) {
            return $post_data;
        }

        if ($post_image === 'require' && empty($_FILES['image'])) {
            wp_send_json_error(['message' => __('The featured image is required', 'front-editor')]);
        }

        return $post_data;
    }

    /**
     * Category selector template
     *
     * @return void
     */
    public static function category_select($post_id, $attributes)
    {
        $settings = get_post_meta(get_the_ID(), 'save_editor_attributes_to_meta', 1);
        $post_category = sanitize_text_field($settings['post_category']);

        if ($post_category === 'disable') {
            return;
        }

        require FE_Template_PATH . 'front-editor/category.php';
    }


    /**
     * Category selection on post saving actions;
     *
     * @param [type] $post_data
     * @param [type] $data
     * @param [type] $file
     * @return void
     */
    public static function add_category_on_save_and_check($post_data, $data, $file)
    {
        if (empty($_POST['category'])) {
            return $post_data;
        }

        $settings = get_post_meta($_POST['editor_post_id'], 'save_editor_attributes_to_meta', 1);
        $post_category_settings = sanitize_text_field($settings['post_category']);
        $post_category_val = sanitize_text_field($_POST['category']);
        $post_id = intval(sanitize_text_field($_POST['post_id']));

        if ($post_category_settings === 'disable') {
            return $post_data;
        }

        if ($post_category_settings === 'require' && empty($post_category_val)) {
            wp_send_json_error(['message' => __('The category selection is required', 'front-editor')]);
        }

        if ($post_category_val === 'null') {
            if ($post_id) {
                wp_delete_object_term_relationships($post_id, 'category');
            }
        }

        if (!empty($post_category_val) && $post_category_val !== 'null') {
            $post_data['post_category'] = explode(",", $post_category_val);
        }

        return $post_data;
    }

    /**
     * Category tag template
     *
     * @return void
     */
    public static function tag_select($post_id)
    {
        $settings = get_post_meta(get_the_ID(), 'save_editor_attributes_to_meta', 1);
        $post_tags = sanitize_text_field($settings['post_tags']);

        if ($post_tags === 'disable') {
            return;
        }

        require FE_Template_PATH . 'front-editor/tags.php';
    }


    /**
     * Tag selection on post saving actions;
     *
     * @param [type] $post_data
     * @param [type] $data
     * @param [type] $file
     * @return void
     */
    public static function add_tag_on_save_and_check($post_data, $data, $file)
    {

        if (empty($_POST['tags'])) {
            return $post_data;
        }

        $settings = get_post_meta($_POST['editor_post_id'], 'save_editor_attributes_to_meta', 1);
        $post_tags = sanitize_text_field($settings['post_tags']);

        if ($post_tags === 'disable') {
            return $post_data;
        }

        if ($post_tags === 'require' && empty($_POST['tags'])) {
            wp_send_json_error(['message' => __('The category selection is required', 'front-editor')]);
        }

        if (sanitize_text_field($_POST['tags']) === 'null') {
            $post_data['tags_input'] = [];
        }

        if (!empty($_POST['tags']) && sanitize_text_field($_POST['tags']) !== 'null') {
            $post_data['tags_input'] = explode(",", sanitize_text_field($_POST['tags']));
        }

        return $post_data;
    }
}

Block::init();
