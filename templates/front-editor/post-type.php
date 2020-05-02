<?php
$current_post_type = get_post_type($post_id) ?? esc_attr(__('post', 'front-editor'));
$args = [
    'public'   => true,
    '_builtin' => false,
];

$output = 'names';
$operator = 'and';

$post_types = get_post_types($args, $output, $operator);
array_unshift($post_types, __('post', 'front-editor'));
?>
<div>
    <label><?php echo esc_attr(__('Select post type', 'front-editor')); ?></label>
    <select id="bfe-post-type" name="post-type-select">
        <?php foreach ($post_types  as $post_type) : ?>
            <option value="<?= $post_type ?>" <?= $current_post_type == $post_type ? 'selected="selected"' : ''; ?>>
                <?= $post_type ?></option>
        <?php endforeach ?>
    </select>
</div>