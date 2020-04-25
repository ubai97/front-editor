<?php

namespace BFE;

class PostList
{

    /**
     * creating shortcode 
     *
     * @param [type] $atts
     * @return void
     */
    public static function user_posts_list($atts)
    {
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $count = 2;
        $author_id = get_the_author_meta('ID');
        $editor_page = self::get_editor_page_link();
        $html = '';

        if (!$editor_page) {
            $html .= sprintf('<p><strong>%s</strong></p>', __('Please create page with editor shortcode: [short-code]'));
        }

        if (!empty($atts)) {
            $count = ($atts['count']) ? $atts['count'] : 2;
        }

        $args = array(
            'posts_per_page' => $count,
            'paged' => $paged,
            'post_type' => 'post',
            'author' => $author_id
        );

        $post_lists = new \WP_Query($args);

        $html .= '<ul>';

        if ($post_lists->have_posts()) {

            while ($post_lists->have_posts()) {
                $post_lists->the_post();

                $html .= sprintf(
                    '<li><a href="%s">%s</a> <a href="%s?post_id=%s">✏</a></li>',
                    get_the_permalink(),
                    get_the_title(),
                    $editor_page,
                    get_the_ID()
                );
            }
            $html .= '</ul>';
            $newer_page_link = get_previous_posts_link(__('< Newer'));
            $previous_page_link = get_next_posts_link(__('Previous >'), $post_lists->max_num_pages);
            $html .= sprintf('<div class="nav"><span>%s</span> <span>%s</span></div>', $newer_page_link, $previous_page_link);

            wp_reset_postdata();
        }

        return $html;
    }

    /**
     * Getting the page link with editor shortcode
     *
     * @return void
     */
    public static function get_editor_page_link()
    {
        $args = [
            'posts_per_page' => 1,
            'post_type' => 'page',
            'meta_query' => [
                [
                    'key' => 'editor_js_page',
                    'compare' => 'EXISTS'
                ]
            ]
        ];

        $editor_page = new \WP_Query($args);

        if ($editor_page->have_posts()) {

            while ($editor_page->have_posts()) {
                $editor_page->the_post();

                return get_the_permalink();
            }
        }

        return false;
    }
}
