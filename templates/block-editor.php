<div class="bfe-editor" id="bfe-editor" post_id="<?= $post_id ?>">
    <div id="bfe-editor-block-header">
        <div class="sub-header">
            <a class="editor-button" id="save-editor-block"><?php echo $button_text ?></a>
            <?php if ($new_post_text) : ?>
                <a target="_blank" class="editor-button" href="<?= $new_post_link ?>"><?= $new_post_text ?></a>
            <?php endif; ?>
            <div class="bfe-editor-view-page">
                <p><?php echo __('View Post', 'BFE') ?></p>
                <a target="_blank" href="<?php the_permalink($post_id) ?? ''; ?>"><?php the_permalink($post_id) ?? ''; ?></a>
            </div>
        </div>
        <div class="sub-header">
            <?php do_action('bfe_editor_sub_header_parts_form',$post_id); ?>
        </div>
        <div class="sub-header">
            <input id="post_title" name="post_title" type="text" placeholder="<?php echo  __('Add Title', 'BFE') ?>" value="<?php echo $title =  get_the_title($post_id) ?>">
        </div>
    </div>
    <div id="bfe-editor-block" post_id="<?= $post_id; ?>"></div>
</div>