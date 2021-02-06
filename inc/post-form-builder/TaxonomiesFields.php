<?php

/**
 * formBuilder Tax Fields
 *
 * @package BFE;
 */

namespace BFE\Field;

defined('ABSPATH') || exit;


class TaxonomiesFields
{
    public static function init()
    {
        add_filter('admin_post_form_formBuilder_settings', [__CLASS__, 'add_field_settings']);
    }

    public static function add_field_settings($data)
    {
        $post_type = $data['settings']['post_type'];
        $post_taxonomies = get_object_taxonomies($post_type, 'objects');

        foreach ($post_taxonomies as $tax) {
            $tax_type = sprintf('tax_%s', $tax->name);
            /**
             * We do not need post_format
             */
            if ($tax->name === 'post_format')
                continue;

            $data['formBuilder_options']['fields'][] =
                [
                    'label' => $tax->label,
                    'attrs' => [
                        'placeholder' => sprintf('%s %s', __('Select', 'front-editor'), $tax->label),
                        'type' => $tax_type
                    ],
                    'icon' => '<span class="dashicons dashicons-list-view"></span>'
                ];

            /**
             * Templates
             */
            $data['formBuilder_options']['temp_back'][$tax_type] = [
                'field' => sprintf('<div class="%s tax" name="%s"></div>', $tax->name, $tax->name),
                'onRender' => '',
                'max_in_form' => 1
            ];

            /**
             * Adding field to group
             */
            $data['formBuilder_options']['controls_group']['taxonomies']['types'][] = $tax_type;

            /**
             * Adding attribute settings 
             */
            $data['formBuilder_options']['typeUserAttrs'][$tax->name] =
                [
                    'order' => [
                        'label' => __('Order', 'front-editor'),
                        'options' => [
                            'asc' => 'ASC',
                            'desc' => 'Desc'
                        ],
                        'type' => 'select',
                    ],
                    'multiple' => [
                        'label' => __('Allow Multiple Selections', 'front-editor'),
                        'value' => false,
                        'type' => 'checkbox',
                    ],
                    'multiple' => [
                        'label' => __('Allow Add New', 'front-editor'),
                        'value' => false,
                        'type' => 'checkbox',
                    ],
                ];
            /**
             * Disabling default settings
             */
            $data['formBuilder_options']['typeUserDisabledAttrs'][$tax->name] =
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
        }


        return $data;
    }
}

TaxonomiesFields::init();
