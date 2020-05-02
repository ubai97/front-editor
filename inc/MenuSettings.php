<?php

namespace BFE;

// Exit if accessed directly
defined('ABSPATH') || exit;

/**
 *  Tool for MoySklad
 */
class MenuSettings
{
	public static $only_if_pro_text;
	public static $default_select;
	public static $is_pro_version;

	/**
	 * The Init
	 */
	public static function init()
	{
		self::$only_if_pro_text = __('Buy pro version to use this functionality', 'front-editor');
		//self::$is_pro_version = get_option('bfe_is_front_editor_pro_version_exist');
		self::$is_pro_version = 1;
		self::$default_select = [
			'display' => __('Display','front-editor'),
			'require' => __('Display and require','front-editor'),
			'disable' => __('Disable this field','front-editor')
		];

		add_action(
			'admin_menu',
			function () {

				if (current_user_can('manage_options')) {
					add_menu_page(
						$page_title = __('Front Editor', 'front-editor'),
						$menu_title = __('Front Editor', 'front-editor'),
						$capability = 'manage_options',
						$menu_slug = 'front_editor_settings',
						$function = [__CLASS__, 'display_page'],
						$icon = BFE_PLUGIN_URL . '/assets/img/logo_16.png',
						'57.5'
					);
				}
			}
		);
		add_action('admin_init', [__CLASS__, 'settings_general'], $priority = 10, $accepted_args = 1);
	}

	public static function settings_general()
	{
		add_settings_section('bfe_front_editor_general_settings_section', __('Front editor settings', 'front-editor'), null, 'front_editor_settings');

		/**
		 * display featured image 
		 */
		$cs_option_name = 'bfe_front_editor_post_moderation';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('Post status', 'front-editor'),
			$callback = [__CLASS__, 'post_moderation'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);

		/**
		 * display featured image 
		 */
		$cs_option_name = 'bfe_front_editor_display_featured_image_select';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('Post image', 'front-editor'),
			$callback = [__CLASS__, 'display_featured_image_select'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);

		/**
		 * the category selector option
		 */
		$cs_option_name = 'bfe_front_editor_display_category_selector';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('Post category', 'front-editor'),
			$callback = [__CLASS__, 'display_category_selector'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);

		/**
		 * display custom post type 
		 */
		$cs_option_name = 'bfe_front_editor_display_post_type_selector';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('Custom post type', 'front-editor'),
			$callback = [__CLASS__, 'display_post_type_selector'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);
	}


	/**
	 * Display UI
	 */
	public static function display_page()
	{
		echo sprintf('<h1>%s</h1>', __('Front Editor', 'front-editor'));
		echo '<form method="POST" action="options.php">';
		settings_fields('front_editor_settings');
		do_settings_sections('front_editor_settings');
		submit_button();
		echo '</form>';
	}

	/**
	 * post need approvement
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function post_moderation($val)
	{
		$disabled = 1;

		if (self::$is_pro_version) {
			$disabled = 0;
		}

		$id = $val['id'];

		echo sprintf('<select name="%s" %s>', $id, disabled($disabled, true, false));

		$options = [
			'publish'=> __('Publish','front-editor'),
			'pending' => __('Pending','front-editor')
		];

		foreach ($options as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val,selected( $val, get_option($id), false ),$option);
		}
		echo '</select>';
		printf('<span style="padding-left:10px;">%s</span><br>',__('when user is adding the post what status it must have'));
		
		if ($disabled) {
			echo sprintf('<p>%s</p>', self::$only_if_pro_text);
		}
	}

	/**
	 * Display featured image
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function display_featured_image_select($val)
	{
		$disabled = 1;

		if (self::$is_pro_version) {
			$disabled = 0;
		}

		$id = $val['id'];
		echo sprintf('<select name="%s" %s>', $id, disabled($disabled, true, false));
		$data = get_option($id);
		foreach (self::$default_select as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val,selected( $val, get_option($id), false ),$option);
		}
		echo '</select>';
		
		if ($disabled) {
			echo sprintf('<p>%s</p>', self::$only_if_pro_text);
		}
	}

	/**
	 * category selector settings
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function display_category_selector($val)
	{
		$disabled = 1;

		if (self::$is_pro_version) {
			$disabled = 0;
		}

		$id = $val['id'];
		echo sprintf('<select name="%s" %s>', $id, disabled($disabled, true, false));
		$data = get_option($id);
		foreach (self::$default_select as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val,selected( $val, get_option($id), false ),$option);
		}
		echo '</select>';
		
		if ($disabled) {
			echo sprintf('<p>%s</p>', self::$only_if_pro_text);
		}
	}

	/**
	 * post type selector settings
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function display_post_type_selector($val)
	{
		$disabled = 1;

		if (self::$is_pro_version) {
			$disabled = 0;
		}

		$id = $val['id'];
		echo sprintf('<select name="%s" %s>', $id, disabled($disabled, true, false));
		$data = get_option($id);
		foreach (self::$default_select as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val,selected( $val, get_option($id), false ),$option);
		}
		echo '</select>';
		
		if ($disabled) {
			echo sprintf('<p>%s</p>', self::$only_if_pro_text);
		}
	}
}

MenuSettings::init();
