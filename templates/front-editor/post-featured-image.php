<?php 
if (has_post_thumbnail($post_id)) {
    $thumb_id = get_post_thumbnail_id($post_id);
    $style = sprintf('style="background:url(%s)"', wp_get_attachment_url($thumb_id));
    $class = 'chosen';
    $thumb_exist = 1;
}
?>
<div class="image_loader editor-button <?= $class ?? '' ?>" thumb_exist="<?= $thumb_exist ?? 0 ?>">
    <input name="post_thumbnail" type='file' id="img_inp" accept="image/*" title="<?php echo __('Set featured image', 'front-editor'); ?>"/>
    <label class="thumbnail" for="img_inp">
        <img src="<?= FE_PLUGIN_URL . '/assets/img/photo.svg' ?>" class="button-icon">
    </label>
    <img <?= $style ?? '' ?> id="post_thumbnail_image" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
    <img src="<?= FE_PLUGIN_URL . '/assets/img/cancel.svg' ?>" class="bfe-remove-image">
</div>