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
?>

<figure class="bfe-image <?= implode(' ', $classes) ?>">
    <?php echo wp_get_attachment_image( $image_id, 'large'); ?>
    <?php if (!empty($data['caption'])): ?>
        <footer class="bfe-image-caption">
            <?= $data['caption'] ?>
        </footer>
    <?php endif ?>
</figure>