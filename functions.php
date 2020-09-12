<?php 

/**
 * WP admin bar settings disable or not
 */
add_filter('show_admin_bar','disable_wp_admin_bar');

function disable_wp_admin_bar(){
    $options = get_option('bfe_front_editor_wp_admin_menu');

    if(empty($options)){
        return true;
    }

    if($options === 'display'){
        return true;
    }
    
    if($options === 'disable'){
        return false;
    }

    if($options === 'disable_but_admin'){
        $user = wp_get_current_user();
        if( current_user_can('administrator') ){
            return true;
        } 

        return false;
    }

    return true;
}