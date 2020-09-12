<?php

namespace BFE;

class EditorWidget
{
    public static $post_id;

    public static function init()
    {

        add_action('wp_footer', [__CLASS__, 'add_widget']);
    }

    /**
     * add widget to footer 
     *
     * @param [type] $atts
     * @return void
     */
    public static function add_widget()
    {
        global $post;

        if (!is_single($post)) {
            return;
        }

        if (!Editor::can_edit_post(0, $post->ID)) {
            return;
        }

        $position = get_option('bfe_front_editor_edit_button_position');

        if(empty($position)){
            $position = 'right_bottom';
        }

        $post_edit_link = Editor::get_post_edit_link($post->ID);

        $widget_html = sprintf('<a class="bfe-edit-post-button %s" href="%s">%s</a>',$position,$post_edit_link,__('Edit','front-editor'));

        $widget_html = apply_filters('bfe-editor-post-edit-button-html', $widget_html);

        echo $widget_html;
    }
}

EditorWidget::init();
