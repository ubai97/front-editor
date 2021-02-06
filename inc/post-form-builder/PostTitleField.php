<?php

/**
 * formBuilder EditorJS field
 *
 * @package BFE;
 */

namespace BFE\Field;

defined('ABSPATH') || exit;


class PostTitleField
{
    public static $field_label = 'Post Title';
    public static $field_type =  'post_title';

    public static function init()
    {
        add_filter('admin_post_form_formBuilder_settings', [__CLASS__, 'add_field_settings']);
    }

    public static function add_field_settings($data)
    {
        $field_label = __(self::$field_label, 'front-editor');
        /**
         * Adding field
         */
        $data['formBuilder_options']['fields'][] =
            [
                'label' => $field_label,
                'attrs' => [
                    'type' => self::$field_type
                ],
                'icon' => '🅰️',
            ];

        $data['formBuilder_options']['temp_back'][self::$field_type] = [
            'field' => sprintf('<input type="text" class="%s" name="%s">', self::$field_type, self::$field_type),
            'onRender' => '',
            'max_in_form' => 1
        ];

        /**
         * Adding as default
         */
        $data['formBuilder_options']['defaultFields'][] = [
            'label' => $field_label,
            'type' => self::$field_type
        ];

        /**
         * Adding field to group
         */
        $data['formBuilder_options']['controls_group']['post_fields']['types'][] = self::$field_type;


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
                'access',
                'value',
            ];

        return $data;
    }
}

PostTitleField::init();
