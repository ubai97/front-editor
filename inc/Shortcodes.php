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

        /**
         * If exist true and false string it is changing it to the boolean
         */
        if (!empty($atts)) {
            foreach ($atts as $att_name => $attribute) {
                if (
                    filter_var($attribute, FILTER_VALIDATE_BOOLEAN) !== null
                    && $attribute !== "display"
                    && $attribute !== "require"
                    && $attribute !== "disable"
                    && $attribute !== "always_display"
                ) {
                    $atts[$att_name] = filter_var($attribute, FILTER_VALIDATE_BOOLEAN);
                }
            }
        }

        return Editor::show_front_editor($atts);
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
