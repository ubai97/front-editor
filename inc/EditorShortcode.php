<?php

namespace BFE;

class EditorShortcode
{

    public static function init()
    {
        add_shortcode('editor-js', [__CLASS__, 'editor_js']);
    }

    /**
     * creating shortcode 
     *
     * @param [type] $atts
     * @return void
     */
    public static function editor_js($atts)
    {

        $data = [
            'ajax_url' => admin_url('admin-ajax.php'),
            'data' => self::first_data()
        ];

        $data = json_encode($data);

        wp_localize_script('editor.js', 'editor_data', $data);

        wp_enqueue_script('editor.js');

        $button_save = sprintf('<button>%s</button>', __('Save', 'BFE'));
        $html_data = sprintf(
            '<div id="editor-js">%s</div>',
            $button_save
        );

        return $html_data;
    }

    /**
     * Creating test data for editor
     *
     * @return void
     */
    public static function first_data()
    {

        $data = [
            [
                'type' => "header",
                'data' => [
                    'text' => __("Title", 'BFE'),
                    'level' => 1
                ]
            ],
            [
                'type' => 'paragraph',
                'data' => [
                    'text' => __('Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.', 'BFE')
                ]
            ],
            [
                'type' => "header",
                'data' => [
                    'text' => __("Key features", 'BFE'),
                    'level' => 3
                ]
            ],
            [
                'type' =>  'list',
                'data' => [
                    'items' => [
                        __('It is a block-styled editor', 'BFE'),
                        __('It returns clean data output in JSON', 'BFE'),
                        __('Designed to be extendable and pluggable with a simple API', 'BFE'),
                    ],
                    'style' => 'unordered'
                ]
            ],
        ];

        return $data;
    }
}

EditorShortcode::init();
