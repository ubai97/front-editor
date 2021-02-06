<?php

/**
 * formBuilder EditorJS field
 *
 * @package BFE;
 */

namespace BFE\Field;

defined('ABSPATH') || exit;


class EditorJsField
{
    public static $field_label = 'EditorJS';
    public static $field_type =  'EditorJS';
    
    public static function init()
    {
        add_filter('admin_post_form_formBuilder_settings', [__CLASS__, 'add_field_settings']);
    }

    public static function add_field_settings($data)
    {
        /**
         * Adding field
         */
        $data['formBuilder_options']['fields'][] =
            [
                'label' => self::$field_label,
                'attrs' => [
                    'type' => self::$field_type
                ],
                'icon' => '<svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="editorjs-logo-a"><stop stop-color="#39FFD7" offset="0%"></stop><stop stop-color="#308EFF" offset="100%"></stop></linearGradient></defs><g fill-rule="nonzero" fill="none"><circle fill="url(#editorjs-logo-a)" cx="42" cy="42" r="42"></circle><rect fill="#FFF" x="38" y="17" width="8" height="50" rx="4"></rect><rect fill="#FFF" x="17" y="38" width="50" height="8" rx="4"></rect></g></svg>'
            ];

            $data['formBuilder_options']['temp_back'][self::$field_type] = [
                'field' => sprintf('<div class="%s editor" name="%s"></div>', self::$field_type,self::$field_type),
                'onRender' => ''
            ];

        /**
         * Adding attribute settings 
         */
        $data['formBuilder_options']['typeUserAttrs'][self::$field_type] =
            [
                'editor_image_plugin' => [
                    'label' => 'Image',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_header_plugin' => [
                    'label' => 'Header',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_embed_plugin' => [
                    'label' => 'Embed',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_list_plugin' => [
                    'label' => 'List',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_checklist_plugin' => [
                    'label' => 'Checklist',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_quote_plugin' => [
                    'label' => 'Quote',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_marker_plugin' => [
                    'label' => 'Marker',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_code_plugin' => [
                    'label' => 'Code',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_delimiter_plugin' => [
                    'label' => 'Delimiter',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_inlineCode_plugin' => [
                    'label' => 'Code',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_linkTool_plugin' => [
                    'label' => 'Link Tool',
                    'value' => true,
                    'type' => 'checkbox',
                ],
                'editor_warning_plugin' => [
                    'label' => 'Warning (Pro)',
                    'value' => false,
                    'type' => 'checkbox',
                ],
                'editor_gallery_plugin' => [
                    'label' => 'Gallery (Pro)',
                    'value' => false,
                    'type' => 'checkbox',
                ],
                'editor_table_plugin' => [
                    'label' => 'Table (Pro)',
                    'value' => false,
                    'type' => 'checkbox',
                ]
            ];

        /**
         * Adding as default
         */
        $data['formBuilder_options']['defaultFields'][] = [
            'label' => self::$field_label,
            'type' => self::$field_type
        ];

        /**
         * Adding field to group
         */
        $data['formBuilder_options']['controls_group']['post_fields']['types'][] = self::$field_type;

        /**
         * Disable attr if there is no pro version
         */
        $data['formBuilder_options']['disable_attr'][] = '.fld-editor_warning_plugin';
        $data['formBuilder_options']['disable_attr'][] = '.fld-editor_gallery_plugin';
        $data['formBuilder_options']['disable_attr'][] = '.fld-editor_table_plugin';


        $data['formBuilder_options']['disable_attr'][] = '.fld-editor_warning_plugin';

        /**
         * Disabling default settings
         */
        $data['formBuilder_options']['typeUserDisabledAttrs'][self::$field_type] =
            [
                'name',
                'description',
                'required',
                'inline',
                'toggle',
                'placeholder',
                'access',
                'value',
            ];


        

        return $data;
    }
}

EditorJsField::init();
