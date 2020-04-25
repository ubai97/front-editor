<div id="bfe-editor-block-header">
    <button id="save-editor-block"><?php echo $button_text ?></button>
    <div class="bfe-editor-view-page">
        <p><?php echo __('View Post', 'BFE') ?></p>
        <a target="_blank" href="<?php the_permalink($post_id)??''; ?>"><?php the_permalink($post_id)??''; ?></a>
    </div>
</div>
<div id="bfe-editor-block" post_id="<?= $post_id; ?>"></div>