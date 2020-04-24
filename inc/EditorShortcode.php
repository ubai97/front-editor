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
        return Editor::show_front_editor();
    }

    /**
     * Creating test data for editor
     *
     * @return void
     */
    public static function first_data()
    {

    }
}

EditorShortcode::init();
