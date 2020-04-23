<?php

namespace BFE;

class Editor
{
    /**
     * Example data for editor
     *
     * @return void
     */
    public static function example_editor_data()
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
