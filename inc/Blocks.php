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
		add_action('init', [__CLASS__, 'gutenberg_add_team_block']);
		add_action('enqueue_block_editor_assets', [__CLASS__, 'gutenberg_team_block_editor_scripts']);
		// post status
		add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_post_status_check'], 10, 3);
		// image selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'add_post_image_selection'], 13);
		add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'image_on_save_check'], 10, 3);
		// category selection addon
        add_action('bfe_editor_sub_header_parts_form', [__CLASS__, 'category_select'], 12);
        add_filter('bfe_ajax_before_front_editor_post_update_or_creation', [__CLASS__, 'add_category_on_save_and_check'], 10, 3);  
	}

	/**
	 * Gutenberg block scripts
	 *
	 * @return void
	 */
	public static function gutenberg_team_block_editor_scripts()
	{
		wp_register_script(
			'bfe-block-script',
			plugins_url('assets/js/block/bfee-block.js', dirname(__FILE__)),
			['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
			filemtime(plugin_dir_path(dirname(__FILE__)) . 'assets/js/block/bfee-block.js')
		);

		wp_register_style(
			'bfe-block-style',
			plugins_url( 'assets/css/bfe-editor-style.css', dirname(__FILE__) ),
			[],
			filemtime( plugin_dir_path(dirname(__FILE__) ) . 'assets/css/bfe-editor-style.css' )
		);

		$data = [
            'translations' => [
                'save_button' => [
                    'publish' => __('Publish', 'front-editor'),
                    'updating' => sprintf('%s...', __('Updating', 'front-editor')),
                    'update' => __('Update', 'front-editor')
                ],
                'gutenberg_editor_block_text' => __('Best Front End Editor Block', 'front-editor')
            ]
        ];

        $data = json_encode($data);

		wp_enqueue_script('bfe-block-script');
		
		wp_localize_script('bfe-block-script', 'editor_data', $data);
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
		echo Editor::show_front_editor();
		return ob_get_clean();
	}

	/**
	 * Registering block
	 *
	 * @return void
	 */
	public static function gutenberg_add_team_block()
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

        if ($is_featured_image_exist) {
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

        if ($setting === 'require' && empty($_POST['category'])) {
            wp_send_json_error(['message' => __('The category selection is required', 'front-editor')]);
        }

        if (!empty($_POST['category'])) {
            $post_data['post_category'] = [$_POST['category']];
        }

        return $post_data;
    }

}

Block::init();
