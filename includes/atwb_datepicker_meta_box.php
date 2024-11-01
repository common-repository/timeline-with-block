<?php
/**
 * Date picker box for custom post type Timeline
 *
 * PHP version 7.4.1
 *
 * @category Basefile
 * @package  General
 * @author   Alchemy Software Limited <wordpress@alchemy-bd.com>
 * @license  GPL v2 or later
 * @link     wordpress.org
 */

namespace ATWB\Meta;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Class Timeline_Meta_Box
 */
class Timeline_Meta_Box
{

    /**
     * Initialize the class
     */
    public function __construct()
    {
        add_action('add_meta_boxes', array($this, 'atwb_add_date_meta_box'));
        add_action('save_post', array($this, 'atwb_save_date_metabox'));
    }

    /**
     * Add custom meta box for Timeline
     */
    public function atwb_add_date_meta_box()
    {
        add_meta_box(
            'timeline_date_metabox',
            esc_html__('Timeline Date', 'atwb'),
            array($this, 'atwb_render_date_metabox'),
            _ATWB_POST_TYPE, // You can change this to 'page' or a custom post type
            'normal',
            'high'
        );
    }

    /**
     * Render the date picker meta box
     *
     * @param mixed $post Post object.
     */
    public function atwb_render_date_metabox($post)
    {
        wp_nonce_field('atwb_date_nonce', 'atwb_date_nonce');

        // Retrieve the current value of the date from post meta
        $timeline_date = get_post_meta($post->ID, 'timeline_date', true);
        ?>
        <input type="date" id="timeline_date" class="timeline_input" name="timeline_date"
            value="<?php echo esc_attr($timeline_date); ?>" />
        <?php
    }

    /**
     * Save custom date meta box data
     *
     * @param mixed $post_id Post ID.
     */
    public function atwb_save_date_metabox($post_id)
    {

        // Verify that the nonce is valid.
        if (!isset($_POST['atwb_date_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['atwb_date_nonce'])), 'atwb_date_nonce')) {
            return;
        }

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        // Check if the user has permissions to save data
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        // Save the custom date value
        if (isset($_POST['timeline_date'])) {
            update_post_meta($post_id, 'timeline_date', htmlspecialchars(sanitize_text_field($_POST['timeline_date']), ENT_QUOTES, 'UTF-8'));
        }
    }
}

// Instantiate of the class
new Timeline_Meta_Box();
