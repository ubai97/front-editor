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
		self::$is_pro_version = get_option('bfe_is_front_editor_pro_version_exist');

		self::$default_select = [
			'display' => __('Display', 'front-editor'),
			'require' => __('Display and require', 'front-editor'),
			'disable' => __('Disable this field', 'front-editor')
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
						$icon = FE_PLUGIN_URL . '/assets/img/logo.svg',
						'57.5'
					);
				}
			}
		);

		add_action('admin_init', [__CLASS__, 'settings_general'], $priority = 10, $accepted_args = 1);

		/**
		 * checking is front editor page is created
		 */
		add_action('bfe_front_editor_settings_before_form', [__CLASS__, 'add_front_editor_page_check'], 10);

		/**
		 * short information and instruction
		 */
		add_action('bfe_front_editor_settings_before_form', [__CLASS__, 'short_information_and_instruction']);
	}

	/**
	 * adding general settings
	 *
	 * @return void
	 */
	public static function settings_general()
	{
		add_settings_section('bfe_front_editor_general_settings_section', __('Global settings', 'front-editor'), null, 'front_editor_settings');

		/**
		 * Edit button position in single post
		 */
		$cs_option_name = 'bfe_front_editor_edit_button_position';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('Edit button position in single post', 'front-editor'),
			$callback = [__CLASS__, 'edit_button_position'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);

		/**
		 * Disable or enable wp admin bar
		 */
		$cs_option_name = 'bfe_front_editor_wp_admin_menu';
		register_setting('front_editor_settings', $cs_option_name);
		add_settings_field(
			$id = $cs_option_name,
			$title = __('WordPress admin bar', 'front-editor'),
			$callback = [__CLASS__, 'wp_admin_menu'],
			$page = 'front_editor_settings',
			$section = 'bfe_front_editor_general_settings_section',
			$args = [
				'id' => $cs_option_name,
				'label_for' => $cs_option_name
			]
		);
	}

	/**
	 * if the page with editor is not set
	 *
	 * @return void
	 */
	public static function add_front_editor_page_check()
	{
		$is_set_editor_page = Editor::get_editor_page_link();
		if (!$is_set_editor_page) {
			$class = 'notice notice-error';
			$message = sprintf(
				__('We cant fined the page with <strong>Front Editor</strong>, 
			 		please add the page with Gutenberg block named <strong>%s</strong>
			 		or add Shortcode <strong>%s</strong>', 'front-editor'),
				$guthenber_block = 'Editor Block',
				$shortcode = '[bfe-front-editor]'
			);

			printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), $message);
		}
	}

	/**
	 * What we have
	 *
	 * @return void
	 */
	public static function short_information_and_instruction()
	{
		printf('<h2>%s</h2>', __('Short information', 'front-editor'));

		$class = 'notice notice-warning is-dismissible';
		$message = sprintf(
			__(
				'If you have some ideas or questions please contact me. 
				The contact information you can find on our website %s',
				'front-editor'
			),'<strong><a href="https://wpfronteditor.com" target="_blank">wpfronteditor.com</a></strong>');
		printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), $message);

		$github_link = '<a  target="_blank" href="https://github.com/Aharonyan/front-editor">GitHub</a>';
		$site_link = 'https://wpfronteditor.com/';
		printf(
			'<p>%s</p>',
			sprintf(__('You can buy pro version or find additional information <a href="%s" target="_blank">here</a> or add some ideas or issues in %s', 'front-editor'), $site_link, $github_link)
		);
	}


	/**
	 * Display UI
	 */
	public static function display_page()
	{
		echo sprintf('<h1>%s</h1>', __('Settings Page', 'front-editor'));
		do_action('bfe_front_editor_settings_before_form');
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
	public static function edit_button_position($val)
	{

		$id = $val['id'];

		echo sprintf('<select name="%s">', $id);

		$options = [
			'left_bottom' => __('Left bottom', 'front-editor'),
			'left_top' => __('Left top', 'front-editor'),
			'right_bottom' => __('Right bottom', 'front-editor'),
			'right_top' => __('Right top', 'front-editor'),
		];

		foreach ($options as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val, selected($val, get_option($id), false), $option);
		}
		echo '</select>';
	}

	/**
	 * Display featured image
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function wp_admin_menu($val)
	{
		$id = $val['id'];

		echo sprintf('<select name="%s">', $id);

		$options = [
			'display' => __('Display', 'front-editor'),
			'disable' => __('Disable for all', 'front-editor'),
			'disable_but_admin' => __('Disable for all but admin', 'front-editor'),
		];

		foreach ($options as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val, selected($val, get_option($id), false), $option);
		}
		echo '</select>';
	}

	/**
	 * category selector settings
	 *
	 * @param [type] $val
	 * @return void
	 */
	public static function display_category_selector($val)
	{
		$disabled = 0;

		$id = $val['id'];
		echo sprintf('<select name="%s" %s>', $id, disabled($disabled, true, false));
		$data = get_option($id);
		foreach (self::$default_select as $val => $option) {
			echo sprintf('<option value="%s" %s >%s</option>', $val, selected($val, get_option($id), false), $option);
		}
		echo '</select>';
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
			echo sprintf('<option value="%s" %s >%s</option>', $val, selected($val, get_option($id), false), $option);
		}
		echo '</select>';

		if ($disabled) {
			echo sprintf('<p>%s</p>', self::$only_if_pro_text);
		}
	}
}

MenuSettings::init();
