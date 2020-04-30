<?php
    $classes = array();

    if ( !empty($data['stretched']) && $data['stretched'] == 'true'){
        $classes[] = 'bfe-image--stretched';
    }

    if ( !empty($data['withBorder']) && $data['withBorder'] == 'true'){
        $classes[] = 'bfe-image--bordered';
    }

    if ( !empty($data['withBackground']) && $data['withBackground'] == 'true'){
        $classes[] = 'bfe-image--backgrounded';
    }

    $size_slug = "large";
?>
<!-- wp:image {"id":<?= $image_id ?>,"sizeSlug":<?= $size_slug ?>} -->
<figure class="wp-block-image size-large"><img src="<?php echo wp_get_attachment_image_url( $image_id, 'large'); ?>"/></figure>
<!-- /wp:image -->