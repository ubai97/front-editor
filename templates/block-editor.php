<div class="bfe-editor" id="bfe-editor">
    <div id="bfe-editor-block-header">
        <div class="sub-header">
            <a class="editor-button" id="save-editor-block"><?php echo $button_text ?></a>
            <?php if ($new_post_text) : ?>
                <a class="editor-button" href="<?= $new_post_link ?>"><?= $new_post_text ?></a>
            <?php endif; ?>
            <div class="bfe-editor-view-page">
                <p><?php echo __('View Post', 'BFE') ?></p>
                <a target="_blank" href="<?php the_permalink($post_id) ?? ''; ?>"><?php the_permalink($post_id) ?? ''; ?></a>
            </div>
        </div>
        <div class="sub-header">
            <select name="category-select">
                <option value="0"><?php echo esc_attr(__('Select category', 'BFE')); ?></option>
                <?php
                $categories =  get_categories();
                foreach ($categories as $category) {
                    echo sprintf(
                        '<option value="%s">%s</option>',
                        $category->cat_ID,
                        $category->cat_name
                    );
                }
                ?>
            </select>
            <?php
            if (has_post_thumbnail($post_id)) {
                $thumb_id = get_post_thumbnail_id($post_id);
                $style = sprintf('style="background:url(%s)"', wp_get_attachment_url($thumb_id));
                $class = 'chosen';
            }
            ?>
            <div class="image_loader <?= $class ?? '' ?>">
                <input name="post_thumbnail" type='file' id="img_inp" accept="image/*" />
                <label class="thumbnail" for="img_inp">
                    <?php echo __('Set featured image', 'BFE'); ?>
                </label>
                <img <?= $style ?? '' ?> id="post_thumbnail_image" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
                <img src="<?= BFE_PLUGIN_URL . '/assets/img/cancel.svg' ?>" class="bfe-remove-image">
            </div>
        </div>
        <div class="sub-header">
            <input id="post_title" name="post_title" type="text" placeholder="<?php echo  __('Add Title', 'BFE') ?>" value="<?php echo $title =  get_the_title($post_id) ?>">
        </div>
    </div>
    <div id="bfe-editor-block" post_id="<?= $post_id; ?>"></div>
</div>