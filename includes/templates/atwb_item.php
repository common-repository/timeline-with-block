<?php
/**
 * This is the template of timeline item
 *
 * PHP version 7.4.1
 *
 * @category Basefile
 * @package  General
 * @author   Alchemy Software Limited <wordpress@alchemy-bd.com>
 * @license  GPL v2 or later
 * @link     alchemy-bd.com
 */
if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

        $post_id = get_the_ID();
        $timeline_icon = get_post_meta($post_id, 'timeline_icon', true);
        $timeline_date = get_post_meta($post_id, 'timeline_date', true);
        $dateTime = new DateTime($timeline_date);
        $formattedDate = $dateTime->format('F j, Y');
        ?>
<div class="timeline_item_area animate__animated">
        <div class="timeline_icon">
            <span class="dashicons <?php echo esc_attr($timeline_icon) ?>"></span>
        </div>
        <div class="timeline_date">
                <span><?php echo esc_attr($formattedDate) ?></span>
        </div>
        <div class="timeline_item">
        <?php
                if (has_post_thumbnail()) { ?>
               <div class="timeline_thumbnail">
                <img src="<?php echo esc_url( get_the_post_thumbnail_url() ); ?>" alt=" <?php echo esc_html( the_title()); ?>">
               </div>
         <?php }?>
                <div class="timeline_title">
                   <?php echo esc_html( the_title()); ?>
                </div>
               <div class="timeline_content">
               <p><?php echo wp_kses_post(get_the_content()); ?></p>
                </div>
        </div>
 </div>