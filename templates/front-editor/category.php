<div title="<?php echo esc_attr(__('Select category', 'front-editor')); ?>">
    <select id="bfe-category" name="category-select">
        <option value="0"><?php echo esc_attr(__('Select category', 'front-editor')); ?></option>
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
</div>