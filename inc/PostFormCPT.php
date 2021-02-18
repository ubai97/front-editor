<?php

/**
 * Gutenberg block to display Post Form.
 *
 * @package BFE;
 */

namespace BFE;

defined('ABSPATH') || exit;

/**
 * Class Post Form - registers custom gutenberg block.
 */
class PostFormCPT
{
    /**
     * Init logic.
     */
    public static function init()
    {
        require_once __DIR__ . '/post-form-builder/PostTitleField.php';
        require_once __DIR__ . '/post-form-builder/EditorJsField.php';
        require_once __DIR__ . '/post-form-builder/TaxonomiesFields.php';

        /**
         * Registering custom post type
         */
        add_action('init', [__CLASS__, 'register_post_types']);

        /**
         * Adding scripts to custom post type
         */
        add_action('admin_enqueue_scripts', [__CLASS__, 'add_admin_scripts'], 10, 1);

        /**
         * Get formBuilder data
         */
        add_action('wp_ajax_fe_get_formBuilder_data', [__CLASS__, 'fe_get_formBuilder_data']);

        add_action('wp_ajax_save_post_front_settings', [__CLASS__, 'save_post_front_settings']);
    }

    /**
     * Adding custom metabox
     *
     * @return void
     */
    public static function front_editor_add_custom_box()
    {
        $screens = ['fe_post_form'];
        add_meta_box('front_editor_metabox', 'Post Form Data', [__CLASS__, 'front_editor_meta_box_callback'], $screens);
    }

    /**
     * Get formBuilder data
     *
     * @return void
     */
    public static function fe_get_formBuilder_data()
    {

        /**
         * Check wp nonce
         */
        if (!wp_verify_nonce($_POST['admin_form_builder_nonce'], 'admin_form_builder_nonce'))
            return;

        /**
         * If this is auto save do nothing
         */
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
            return;


        $data = [
            'settings' => [
                'post_type' => esc_html($_POST['post_type']),
            ],
            'formBuilder_options' => [
                //'prepend' => sprintf('<h2>%s</h2>', __('Post Title', 'front-editor')),
                'fields' => [], // New field creation
                'typeUserAttrs' => [], // Custom attr settings for fields,
                'disabledFieldButtons' => [],
                'defaultFields' => [],
                'typeUserDisabledAttrs' => [ // Disable attributes
                    'paragraph' => ['access']
                ],
                'disable_attr' => [],
                'templates' => [],
                'temp_back' => [],
                'disableFields' => ['autocomplete', 'button', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'radio-group', 'select', 'number'],
                'defaultControls' => ['paragraph', 'text', 'textarea'],
                'controls_group' => [
                    'post_fields' => [
                        'label' => __('Post Fields', 'front-editor'),
                        'types' => []
                    ],
                    'taxonomies' => [
                        'label' => __('Taxonomies', 'front-editor'),
                        'types' => []
                    ],
                    'custom_fields' => [
                        'label' => __('Custom Fields', 'front-editor'),
                        'types' => []
                    ],
                ],
                'controlOrder' => [],
                'messages' => [
                    'max_fields_warning' => __('You already have this field in the form', 'front-editor')
                ]
            ],
        ];

        /**
         * Default controls
         */
        $data['formBuilder_options']['controls_group']['custom_fields']['types'] = $data['formBuilder_options']['defaultControls'];

        /**
         * Ability to add custom group
         */
        $data['formBuilder_options']['controls_group'] = apply_filters('admin_post_form_formBuilder_add_controls_group', $data['formBuilder_options']['controls_group']);

        $filter_data = apply_filters('admin_post_form_formBuilder_settings', $data);

        /**
         * Order Elements in control bar
         */
        foreach ($filter_data['formBuilder_options']['controls_group'] as $group) {

            if (empty($group['types'])) {
                continue;
            }

            foreach ($group['types'] as $types) {
                $filter_data['formBuilder_options']['controlOrder'][] = $types;
            }
        }
        wp_send_json_success($filter_data);
    }


    /**
     * Callback method for Post Forms submenu
     *
     * @since 2.5
     *
     * @return void
     */
    public static function fe_post_forms_page()
    {
        $action           = isset($_GET['action']) ? sanitize_text_field(wp_unslash($_GET['action'])) : null;
        $post_ID           = isset($_GET['id']) ? sanitize_text_field(wp_unslash($_GET['id'])) : 'new';
        $add_new_page_url = admin_url('admin.php?page=fe-post-forms&action=add-new');


        wp_enqueue_script('jquery-ui');
        wp_enqueue_script('bfe-block-script');
        wp_enqueue_script('bfe-form-builder');
        wp_enqueue_style('fe_post_form_CPT');


        $data = [
            'post_id' => $post_ID,
            'ajax_url' => admin_url('admin-ajax.php'),
        ];

        wp_localize_script('bfe-block-script', 'fe_post_form_data', apply_filters('bfe_fe_post_form_backend_block_localize_data', $data));

        switch ($action) {
            case 'edit':

                require FE_PLUGIN_DIR_PATH . 'templates/post-form.php';
                break;

            case 'add-new':
                require FE_PLUGIN_DIR_PATH . 'templates/post-form.php';
                break;

            default:
                //require_once WPUF_ROOT . '/admin/post-forms-list-table-view.php';
                break;
        }
    }

    public static function save_post_front_settings()
    {

        /**
         * Check wp nonce
         */
        if (!wp_verify_nonce($_POST['admin_form_builder_nonce'], 'admin_form_builder_nonce'))
            return;

        /**
         * If this is auto save do nothing
         */
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
            return;

        $post_ID = $_POST['post_ID'];

        /**
         * Check user roles
         */
        if (!current_user_can('edit_post', $post_ID))
            return;

        /**
         * Saving data
         */
        // update_post_meta($post_ID, 'front_editor_first_name', sanitize_text_field($_POST['front_editor_first_name']));
        // update_post_meta($post_ID, 'front_editor_last_name', sanitize_text_field($_POST['front_editor_last_name']));
        // update_post_meta($post_ID, 'front_editor_email', sanitize_email($_POST['front_editor_email']));
        // update_post_meta($post_ID, 'front_editor_subject', sanitize_text_field($_POST['front_editor_subject']));
        // update_post_meta($post_ID, 'front_editor_message', sanitize_text_field($_POST['front_editor_message']));
    }

    /**
     * Adding scripts to custom post type
     *
     * @param [type] $hook
     * @return void
     */
    public static function add_admin_scripts($hook)
    {

        global $post;
        $asset = require FE_PLUGIN_DIR_PATH . 'assets/frontend/frontend.asset.php';

        wp_register_script(
            'jquery-ui',
            plugins_url('assets/vendors/jquery-ui.min.js', dirname(__FILE__)),
            $asset['dependencies'],
            $asset['version'],
            true
        );
        wp_register_script(
            'bfe-form-builder',
            plugins_url('assets/vendors/form-builder.min.js', dirname(__FILE__)),
            $asset['dependencies'],
            $asset['version'],
            true
        );
        wp_register_style('fe_post_form_CPT', FE_PLUGIN_URL . '/assets/editor/main.css', [], $asset['version']);
        wp_register_script(
            'bfe-block-script',
            plugins_url('assets/editor/editor.js', dirname(__FILE__)),
            $asset['dependencies'],
            $asset['version'],
            true
        );
    }

    /**
     * Registering post type
     *
     * @return void
     */
    public static function register_post_types()
    {
        register_post_type('fe_post_form', [
            'label'  => null,
            'labels' => [
                'name'               => __('Post Form', 'front-editor'),
                'singular_name'      => __('Post Form', 'front-editor'),
                'add_new'            => __('Add Post Form', 'front-editor'),
                'add_new_item'       => __('Add Post Form', 'front-editor'),
                'edit_item'          => __('Edit Post Form', 'front-editor'),
                'new_item'           => __('New Post Form', 'front-editor'),
                'view_item'          => __('Watch Post Form', 'front-editor'),
                'search_items'       => __('Search Post Form', 'front-editor'),
                'not_found'          => __('Not Found', 'front-editor'),
                'not_found_in_trash' => __('Not found in trash', 'front-editor'),
                'parent_item_colon'  => '',
                'menu_name'          => __('Post Forms', 'front-editor'),
            ],
            'description'         => '',
            'public'              => false,
            'show_ui'            => true,
            'show_in_menu'       => 'front_editor_settings',
            'show_in_rest'        => false,
            'rest_base'           => null,
            'menu_position'       => 10,
            'exclude_from_search' => true,
            'menu_icon'           => 'dashicons-format-quote',
            'capability_type'   => 'post',
            'capabilities'      => array(
                'edit_post'          => 'update_core',
                'read_post'          => 'update_core',
                'delete_post'        => 'update_core',
                'edit_posts'         => 'update_core',
                'edit_others_posts'  => 'update_core',
                'delete_posts'       => 'update_core',
                'publish_posts'      => 'update_core',
                'read_private_posts' => 'update_core'
            ),
            'map_meta_cap'      => null,
            'hierarchical'        => false,
            'supports'            => ['title'],
            'has_archive'         => false,
            'rewrite'             => true,
            'query_var'           => true,
        ]);
    }
}

PostFormCPT::init();
