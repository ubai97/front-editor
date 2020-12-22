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

/**
 * Users can see only oun attachments
 */
add_action('pre_get_posts','users_own_attachments');

function users_own_attachments( $wp_query_obj ) {

    global $current_user, $pagenow;

    $is_attachment_request = ($wp_query_obj->get('post_type')=='attachment');

    if( !$is_attachment_request )
        return;

    if( !is_a( $current_user, 'WP_User') )
        return;

    if( !in_array( $pagenow, array( 'upload.php', 'admin-ajax.php' ) ) )
        return;

    if( !current_user_can('delete_pages') )
        $wp_query_obj->set('author', $current_user->ID );

    return;
}