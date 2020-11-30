<?php

/**
 * This file for uploading and saving data from front editor
 *
 * Long Description.
 *
 * @link URL
 * @since x.x.x (if available)
 *
 * @package bfee
 */

namespace BFE;

/**
 * Saving post logic
 */
class SavePost
{

	/**
	 * Init function
	 *
	 * @return void
	 */
	public static function init()
	{
		add_action('wp_ajax_bfe_update_post', array(__CLASS__, 'update_or_add_post'));
		add_action('wp_ajax_bfe_uploading_image', array(__CLASS__, 'bfe_uploading_image'));
	}

	/**
	 * Undocumented function
	 *
	 * @param array $image file array where we can find img.
	 * @return $image
	 */
	public static function fe_sanitize_image($image = array())
	{
		if (empty($image)) {
			$image = array();
			$file  = isset($_FILES['image']) ? $_FILES['image'] : array();
			if (isset($file)) {
				foreach ($file as $key => $val) {
					switch ($key) {
						case 'tmp_name':
							$image[$key] = sanitize_text_field($val);
							break;
						case 'name':
							$image[$key] = sanitize_file_name($val);
							break;
						case 'type':
							$image[$key] = sanitize_mime_type($val);
							break;
						case 'size':
							$image[$key] = intval(sanitize_text_field($val));
							break;
					}
				}
			}
		}

		return $image;
	}


	/**
	 * Save post from front
	 */
	public static function update_or_add_post()
	{
		if (!wp_verify_nonce($_POST['nonce'], 'bfe_nonce')) {
			wp_send_json_error(array('message' => __('Security error, please update page', 'front-editor')));
		}

		if (empty($_POST['post_title'])) {
			wp_send_json_error(array('message' => __('Please add post title', 'front-editor')));
		}

		$post_title = sanitize_text_field($_POST['post_title']);
		if (empty($post_title)) {
			wp_send_json_error(array('message' => __('Please add correct post title', 'front-editor')));
		}

		$editor_data_json = wp_kses_data($_POST['editor_data']);
		$editor_data      = json_decode(stripslashes($editor_data_json), true);

		$cur_user_id  = get_current_user_id();
		$content_html = '';
		$post_id      = sanitize_text_field($_POST['post_id']);
		if (!empty($post_id) && 'new' !== $post_id) {
			$post_id = intval($post_id);
			if (!$post_id) {
				wp_send_json_error(array('message' => __('The post you trying to edit is not exist, please create a new one', 'front-editor')));
			}

			if (!get_post_status($post_id)) {
				wp_send_json_error(array('message' => __('The post you trying to edit is not exist, please create a new one', 'front-editor')));
			}
		}

		foreach ($editor_data['blocks'] as $data) {

			$single_html = Editor::data_to_html($data['type'], $data['data'] ?? '');

			$content_html .= $single_html;
		}

		$post_data = array(
			'post_title'   => $post_title,
			'post_content' => $content_html,
		);

		$post_data['post_status'] = 'publish';

		/**
		 * Before post creation or update
		 */
		$post_data = apply_filters('bfe_ajax_before_front_editor_post_update_or_creation', $post_data, $_POST, $_FILES);

		if ('new' !== $post_id) {
			$post_id = intval($post_id);
			/**
			 * Checking is user has access to edit post
			 */
			if (!Editor::can_edit_post($cur_user_id, $post_id)) {
				wp_send_json_error(array('message' => __('You do not have permission to edit this post', 'front-editor')));
			}
			$post_data['ID'] = $post_id;
			self::update_post($post_id, $post_data);
		} else {
			$post_data['post_author'] = $cur_user_id;
			$post_id                  = self::insert_post($post_data);
		}

		add_action('bfe_ajax_after_front_editor_post_update_or_creation', $post_id);

		/**
		 * Adding to meta json string.
		 */
		$editor_data_json_clean = wp_json_encode($editor_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
		update_post_meta($post_id, 'bfe_editor_js_data', stripslashes($editor_data_json));

		/**
		 * Adding post thumbnail
		 */
		if(empty($_POST['thumb_img_id'])){
			self::add_post_thumbnail($post_id, self::fe_sanitize_image() ?? '', intval(sanitize_text_field($_POST['thumb_exist'])) ?? 0);
		} else {
			set_post_thumbnail($post_id, (int) $_POST['thumb_img_id']);
		}

		wp_send_json_success(
			array(
				'url'     => get_the_permalink($post_id),
				'post_id' => $post_id,
				'message' => ('new' === $post_id) ? __('New post created', 'front-editor') : __('Post updated', 'front-editor'),
			)
		);
	}

	/**
	 * Adding post thumbnail or delete
	 *
	 * @param integer $post_id post id.
	 * @param array   $image array of file['image'].
	 * @param integer $thumb_exist is post already has image or not.
	 * @return void
	 */
	public static function add_post_thumbnail($post_id = 0, $image = array(), $thumb_exist = 0)
	{
		/**
		 * Downloading image and adding to post
		 */
		if (!empty($image)) {
			$post_thumbnail = $image;
			$upload_data    = self::upload_image($post_thumbnail, '', $post_id);
			set_post_thumbnail($post_id, (int) $upload_data['attach_id']);
			return;
		}
		if (!(int) $thumb_exist) {
			delete_post_thumbnail($post_id);
		}
	}

	/**
	 * Update post
	 *
	 * @param integer $post_id id of post.
	 * @param array   $post_data post data array.
	 * @return void
	 */
	public static function update_post($post_id = 0, $post_data = array())
	{
		$post_id = wp_update_post($post_data);

		if (is_wp_error($post_id)) {
			wp_send_json_error($post_id->get_error_message());
		}
	}

	/**
	 * Create post
	 *
	 * @param array $post_data post data array.
	 * @return $post_id
	 */
	public static function insert_post($post_data = array())
	{
		$post_id = wp_insert_post($post_data);

		if (is_wp_error($post_id)) {
			wp_send_json_error($post_id->get_error_message());
		}
		return $post_id;
	}

	/**
	 * Uploading image by url and by file
	 *
	 * @return void
	 */
	public static function bfe_uploading_image()
	{
		$image     = self::fe_sanitize_image();
		$image_url = isset($_POST['image_url']) ? esc_url($_POST['image_url']) : null;

		if (!empty($image_url)) {
			if (!self::is_image_upload_needed()) {
				wp_send_json_success(['url' => $image_url]);
			}
		}


		$upload_data = self::upload_image($image, $image_url, $_POST['post_id']);


		wp_send_json_success(['url' => $upload_data['upload']['url']]);
	}

	/**
	 * Check if we need upload the image again or it is already exist
	 *
	 * @return boolean
	 */
	public static function is_image_upload_needed()
	{

		if (empty($_POST['post_id'])) {
			return false;
		}

		if ($_POST['post_id'] === 'new') {
			return true;
		}

		$image_url = isset($_POST['image_url']) ? esc_url($_POST['image_url']) : null;
		$attach_id = attachment_url_to_postid($image_url);

		if ($attach_id) {
			$attach = get_post($attach_id);
			$medias = get_attached_media( '', $_POST['post_id'] );
			foreach($medias as $media){
				if ($attach_id === $media->ID) {
					return false;
				}
			}

			if($attach->post_author === get_post($_POST['post_id'])->post_author){
				return false;
			}

			return true;
		}

		return true;
	}

	/**
	 * Undocumented function
	 *
	 * @param array  $image image array.
	 * @param string $image_url image url.
	 * @return array
	 */
	public static function upload_image($image = array(), $image_url = '', $parent_post_id = 0)
	{
		if (empty($image) && empty($image_url)) {
			return false;
		}

		require_once ABSPATH . 'wp-admin/includes/image.php';

		if (!empty($image)) {
			if (!file_is_displayable_image($image['tmp_name'])) {
				wp_send_json_error(array('message' => __('Image type is not supported, please select another image', 'front-editor')));
				return;
			}

			$cont          = file_get_contents($image['tmp_name']);
			$new_file_name = $image['name'];
			$ext           = sanitize_mime_type($image['type']);
		}

		if (!empty($image_url)) {
			$url = $image_url;
			$get = wp_remote_get($url);

			$new_file_name = basename($url); // to get file name
			$ext           = 'image/' . pathinfo($url, PATHINFO_EXTENSION); // to get extension

			if (empty($get['response']['code'])) {
				return false;
			}

			$cont = wp_remote_retrieve_body($get);
		}

		$new_file_name = sanitize_file_name($new_file_name);

		$upload = wp_upload_bits($new_file_name, null, $cont);

		$attachment = array(
			'post_title'     => $new_file_name,
			'post_mime_type' => $ext,
			'post_status'    => 'inherit'
		);

		$attach_id = wp_insert_attachment($attachment, $upload['file'], $parent_post_id);

		$attach_data = wp_generate_attachment_metadata($attach_id, $upload['file']);

		wp_update_attachment_metadata($attach_id, $attach_data);

		return array(
			'attach_data' => $attach_data,
			'upload'      => $upload,
			'attach_id'   => $attach_id,
		);
	}
}

SavePost::init();
