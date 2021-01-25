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
    public static function init()
    {
        add_filter('bfe_fe_post_form_backend_block_localize_data', [__CLASS__, 'add_field_settings']);
    }

    public static function add_field_settings($data)
    {
        $data['formBuilder_options']['fields'][] =
            [
                'label' => 'EditorJS',
                'attrs' => [
                    'type' => 'EditorJS'
                ],
                'icon' => '<svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="editorjs-logo-a"><stop stop-color="#39FFD7" offset="0%"></stop><stop stop-color="#308EFF" offset="100%"></stop></linearGradient></defs><g fill-rule="nonzero" fill="none"><circle fill="url(#editorjs-logo-a)" cx="42" cy="42" r="42"></circle><rect fill="#FFF" x="38" y="17" width="8" height="50" rx="4"></rect><rect fill="#FFF" x="17" y="38" width="50" height="8" rx="4"></rect></g></svg>'
            ];
        $data['formBuilder_options']['typeUserAttrs']['EditorJS'] =
            [
                'activateTable' => [
                    'label' => 'Activate Table',
                    'value' => false,
                    'type' => 'checkbox',
                ]
            ];

        $data['formBuilder_options']['typeUserDisabledAttrs']['EditorJS'] =
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
