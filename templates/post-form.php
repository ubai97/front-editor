<h2 class="nav-tab-wrapper">
    <a href="#post-form-builder" class="nav-tab nav-tab-active"><?= __('Form Editor', 'front-editor') ?></a>
    <a href="#post-form-settings" class="nav-tab "><?= __('Settings', 'front-editor') ?></a>
</h2>
<div class="tab-contents">
    <div id="post-form-builder" class="group active">
        <h3><?= __('Options', 'front-editor') ?></h3>
        <span><?= __('Select post type', 'front-editor') ?></span>
        <select name="fe_settings[post_type]" id="fe_settings_post_type">
            <?php

            $post_types = get_post_types();
            $post_type_selected    = isset($form_settings['post_type']) ? $form_settings['post_type'] : 'post';
            unset($post_types['attachment']);
            unset($post_types['revision']);
            unset($post_types['nav_menu_item']);
            unset($post_types['wpuf_forms']);
            unset($post_types['wpuf_profile']);
            unset($post_types['wpuf_input']);
            unset($post_types['wpuf_subscription']);
            unset($post_types['custom_css']);
            unset($post_types['customize_changeset']);
            unset($post_types['wpuf_coupon']);
            unset($post_types['oembed_cache']);

            foreach ($post_types as $post_type) {
                printf('<option value="%s"%s>%s</option>', esc_attr($post_type), esc_attr(selected($post_type_selected, $post_type, false)), esc_html($post_type));
            }; ?>
        </select>
        <div class="formBuilder-wrapper">
            <div id="form-builder"></div>
            <div class="render-form">
                <div></div>
            </div>
            <button class="render">Render</button>
        </div>
    </div>
    <div id="post-form-settings" class="group  clearfix">
    </div>
</div>