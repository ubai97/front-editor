<?php

namespace BFE;

class Block
{

    public static function init()
	{
		add_action('init', [__CLASS__, 'gutenberg_add_team_block']);
		add_action('enqueue_block_editor_assets', [__CLASS__, 'gutenberg_team_block_editor_scripts']);
	}

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
			plugins_url( 'assets/css/block/bfe-block-editor-style.css', dirname(__FILE__) ),
			[],
			filemtime( plugin_dir_path(dirname(__FILE__) ) . 'assets/css/block/bfe-block-editor-style.css' )
		);

		//wp_register_style()

		wp_enqueue_script('team_block');
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
		echo '<h1>Content here</h1>';
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

		wp_register_style(
			'bfe-style',
			plugins_url( 'assets/css/bfee.css', dirname(__FILE__) ),
			[],
			filemtime( plugin_dir_path( dirname(__FILE__) ) . 'assets/css/bfee.css' )
		);


		register_block_type('bfe/bfe-block', [
			'editor_script' => 'bfe-block-script',
			'style' => 'bfe-style',
			'editor_style' => 'bfe-block-style',
			'render_callback' => [__CLASS__, 'bfe_content_block']
		]);
	}

}

Block::init();
