<?php

namespace BFE;

class Shortcodes
{

    public static function init()
    {
        add_shortcode('bfe-front-editor', [__CLASS__, 'editor_js']);

        add_shortcode('user_posts_list', [__CLASS__, 'user_posts_list']);
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
     * creating shortcode 
     *
     * @param [type] $atts
     * @return void
     */
    public static function user_posts_list($atts)
    {
        return PostList::user_posts_list($atts);
    }

}

Shortcodes::init();
