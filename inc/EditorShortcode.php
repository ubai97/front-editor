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
        $post_id = 'new';
        $editor_data = 'new';
        
        if(!empty($_GET)){
            if(intval($_GET['post_id'])){
                $post_id = $_GET['post_id'];
            }
        }

        if($post_id !== 'new'){
            $editor_data = get_post_meta( $post_id, 'editor_js_data',true );
        } else {
            $editor_data = Editor::example_editor_data();
        }

        $data = [
            'ajax_url' => admin_url('admin-ajax.php'),
            'data' => $editor_data
        ];

        $data = json_encode($data);

        wp_localize_script('bfee-editor.js', 'editor_data', $data);

        wp_enqueue_script('bfee-editor.js');

        $button_save = sprintf('<button>%s</button>', __('Save', 'BFE'));
        $html_data = sprintf(
            '<div id="editor-js">%s</div>',
            $button_save
        );

        // Adding post meta to know the editor page
        update_post_meta( get_the_ID(), 'editor_js_page', true );

        return $html_data;
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
