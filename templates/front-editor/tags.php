<div class="select-wrap">
    <label for="tags-select"><?php echo esc_attr(__('Select tags', 'front-editor')); ?></label>
    <select id="bfe-tags" name="tags-select" data-placeholder="<?php echo esc_attr(__('Select tags', 'front-editor')); ?>" style="width: 50%">
        <option value="0"><?php echo esc_attr(__('Select tags', 'front-editor')); ?></option>
        <?php
        $post_cat_id = 0;
        $has_tags = wp_get_post_tags($post_id);
        if (!empty($has_tags)) {
            $post_cat_id = (int) $has_tags[0];
        }
        $tags = get_tags([
            'hide_empty'   => 0,
        ]);
        foreach ($tags as $tag) {
            $tag_id = (int) $tag->term_id;
            echo sprintf(
                '<option %s value="%s">%s</option>',
                $post_cat_id === $tag_id ? 'selected="selected"' : '',
                $tag_id,
                $tag->name
            );
        }
        ?>
    </select>
</div>