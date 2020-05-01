<?php

namespace BFE;

class PostList
{

    /**
     * creating shortcode post list
     *
     * @param [type] $atts
     * @return void
     */
    public static function user_posts_list($atts)
    {
        if (!is_user_logged_in()) {
            return;
        }

        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $count = 2;
        $editor_page = Editor::get_editor_page_link();
        $html = '';

        if (!$editor_page) {
            $html .= sprintf('<p><strong>%s</strong></p>', __('Please create page with editor shortcode: [short-code]'));
        }

        if (!empty($atts)) {
            $count = ($atts['count']) ? $atts['count'] : 2;
        }

        $args = [
            'posts_per_page' => $count,
            'paged' => $paged,
            'post_type' => 'post'
        ];

        if (!current_user_can('edit_others_pages')) {
            $args['author'] = get_current_user_id();
        }

        $post_lists = new \WP_Query($args);

        $html .= '<div class="post__list_block">';

        if ($post_lists->have_posts()) {

            while ($post_lists->have_posts()) {
                $post_lists->the_post();

                $html .= sprintf(
                    '<div class="post__list"><a href="%s"><div class="img__box">%s</div></a><a href="%s">%s</a><span class="edit__btn"><a href="%s">%s 🖊</a></span></div>',
                    get_the_permalink(),
                    wp_get_attachment_image(get_post_thumbnail_id(get_the_ID()), 'medium'),
                    get_the_permalink(),
                    wp_trim_words(get_the_title(), 2),
                    Editor::get_post_edit_link(get_the_ID()),
                    __('Edit', 'BFE')
                );
            }
            $html .= '</div>';
            $newer_page_link = get_previous_posts_link(sprintf('< %s', __('Newer', 'BFE')));
            $previous_page_link = get_next_posts_link(sprintf('%s >', __('Previous', 'BFE')), $post_lists->max_num_pages);
            $html .= sprintf('<div class="nav"><span>%s</span> <span>%s</span></div>', $newer_page_link, $previous_page_link);

            wp_reset_postdata();
        }

        return $html;
    }
}
