<?php

namespace BFE;

class PostsListShortCode
{

    public static function init()
    {
        add_shortcode('user_posts_list', [__CLASS__, 'user_posts_list']);
    }

    /**
     * creating shortcode 
     *
     * @param [type] $atts
     * @return void
     */
    public static function user_posts_list($atts)
    {
        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $count = ($atts['count']) ? $atts['count'] : 5;


        $args = array(
            'posts_per_page' => $count,
            'paged' => $paged,
            'post_type' => 'post'
        );

        $post_lists = new \WP_Query($args);

        $html = '<ul>';

        if ($post_lists->have_posts()) {

            while ($post_lists->have_posts()) {
                $post_lists->the_post();

                $html .= sprintf('<li><a href="%s" >%s</a></li>', get_the_permalink(), get_the_title());
            }
            $html .= '</ul>';
            $newer_page_link = get_previous_posts_link(__('< Newer'));
            $previous_page_link = get_next_posts_link(__('Previous >'), $post_lists->max_num_pages);
            $html .= sprintf('<div class="nav"><span>%s</span> <span>%s</span></div>', $newer_page_link, $previous_page_link);

            wp_reset_postdata();
            
        }

        return $html;
    }
}

PostsListShortCode::init();
