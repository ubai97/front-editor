<?php

namespace BFE;

class EditorPro
{
    public static function init()
    {
        // post status
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_post_status_check'], 10, 3);
        // post type selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'post_type_select'], 11);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_post_type_on_save_and_check'], 10, 3);
        // category selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'category_select'], 12);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_category_on_save_and_check'], 10, 3);
        // image selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'add_post_image_selection'], 13);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'image_on_save_check'], 10, 3);
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
        $setting = get_option('bfe_front_editor_post_moderation');

        if (!$setting) {
            return $post_data;
        }

        $post_data['post_status'] = $setting;

        return $post_data;
    }

    /**
     * Add post image selection
     *
     * @return void
     */
    public static function add_post_image_selection($post_id)
    {

        $setting = get_option('bfe_front_editor_display_featured_image_select');

        if ($setting === 'disable') {
            return;
        }

        require BFE_Template_PATH . 'front-editor/post-featured-image.php';
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

        $setting = get_option('bfe_front_editor_display_featured_image_select');
        $is_featured_image_exist = $_POST['thumb_exist'] ?? 0;

        if ($setting === 'disable') {
            return $post_data;
        }

        if($is_featured_image_exist){
            return $post_data;
        }

        if ($setting === 'require' && empty($_FILES['image'])) {
            wp_send_json_error(['message' => __('The featured image is required', 'front-editor')]);
        }

        return $post_data;
    }

    /**
     * Category selector
     *
     * @return void
     */
    public static function category_select($post_id)
    {
        $setting = get_option('bfe_front_editor_display_category_selector');

        if ($setting === 'disable') {
            return;
        }

        require BFE_Template_PATH . 'front-editor/category.php';
    }


    /**
     * Category selection add on;
     *
     * @param [type] $post_data
     * @param [type] $data
     * @param [type] $file
     * @return void
     */
    public static function add_category_on_save_and_check($post_data, $data, $file)
    {

        $setting = get_option('bfe_front_editor_display_category_selector');

        if ($setting === 'disable') {
            return $post_data;
        }

        if ($setting === 'require' && empty($_POST['post_type'])) {
            wp_send_json_error(['message' => __('The category selection is required', 'front-editor')]);
        }

        if (!empty($_POST['category'])) {
            $post_data['post_category'] = [$_POST['category']];
        }

        return $post_data;
    }

    /**
     * Post type select
     *
     * @param [type] $post_id
     * @return void
     */
    public static function post_type_select($post_id)
    {

        $setting = get_option('bfe_front_editor_display_post_type_selector');

        if ($setting === 'disable') {
            return;
        }

        require BFE_Template_PATH . 'front-editor/post-type.php';
    }

    /**
     * Add post type select
     *
     * @param [type] $data
     * @return void
     */
    public static function add_post_type_on_save_and_check($post_data, $data, $file)
    {

        $setting = get_option('bfe_front_editor_display_post_type_selector');

        if ($setting === 'disable') {
            return $post_data;
        }

        if ($setting === 'require' && empty($_POST['post_type'])) {
            wp_send_json_error(['message' => __('The post type selection is required', 'front-editor')]);
        }

        if (!empty($_POST['post_type'])) {
            $post_data['post_type'] = $_POST['post_type'];
        }

        return $post_data;
    }
}
EditorPro::init();
