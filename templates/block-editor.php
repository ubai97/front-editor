<div class="bfe-editor" id="bfe-editor" post_id="<?= $post_id ?>">
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
            <select id="bfe-category" name="category-select">
                <option value="0"><?php echo esc_attr(__('Select category', 'BFE')); ?></option>
                <?php
                $post_cat_id = 0;
                $has_categories = wp_get_post_categories($post_id);
                if (!empty($has_categories)) {
                    $post_cat_id = (int) $has_categories[0];
                }
                $categories = get_categories([
                    'hide_empty'   => 0,
                ]);
                foreach ($categories as $category) {
                    $cat_id = (int) $category->cat_ID;
                    echo sprintf(
                        '<option %s value="%s">%s</option>',
                        $post_cat_id === $cat_id ? 'selected="selected"' : '',
                        $cat_id,
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
                $thumb_exist = 1;
            }
            ?>
            <div class="image_loader <?= $class ?? '' ?>" thumb_exist="<?= $thumb_exist ?? 0 ?>">
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