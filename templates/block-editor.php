<div class="bfe-editor" id="bfe-editor" post_id="<?= $post_id ?>" editor_post_id="<?= get_the_ID() ?>">
    <div id="bfe-editor-block-header">
        <div class="sub-header top">
            <a class="editor-button big" id="save-editor-block" title="<?php echo $button_text ?>"><?php echo $button_text ?></a>
            <?php
            $add_new_button = $attributes['add_new_button'] ?? false;
            if (($post_id !== 'new' && $add_new_button !== 'disable') || $add_new_button === 'always_display') : ?>
                <a target="_blank" class="editor-button" href="<?= $new_post_link ?>" title="<?= __('Add new', 'front-editor') ?>"><?= __('Add new', 'front-editor') ?></a>
            <?php endif; ?>
            <a target="_blank" class="editor-button view-page <?php echo $post_id === 'new' ? 'hide' : ''; ?>" href="<?php the_permalink($post_id) ?? ''; ?>" title="<?php echo __('View Post', 'front-editor') ?>">
                <img src="<?= FE_PLUGIN_URL . '/assets/img/see.svg' ?>" class="button-icon">
            </a>
        </div>
        <div class="sub-header">
            <?php do_action('bfe_editor_sub_header_parts_form', $post_id, $attributes); ?>
        </div>
        <div class="sub-header">
            <input id="post_title" name="post_title" type="text" placeholder="<?php echo  __('Add Title', 'front-editor') ?>" value="<?php echo $title =  get_the_title($post_id) ?>">
        </div>
    </div>
    <div id="bfe-editor-block" post_id="<?= $post_id; ?>"></div>
</div>