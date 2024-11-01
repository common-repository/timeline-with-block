<?php
/**
 * Icon picker box for custom post type Timeline
 *
 * PHP version 7.4.1
 *
 * @category Basefile
 * @package  General
 * @author   Alchemy Software Limited <wordpress@alchemy-bd.com>
 * @license  GPL v2 or later
 * @link     alchemy-bd.com
 */
namespace ATWB\Meta;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Class Timeline_Icon_Meta_Box
 */
class Timeline_Icon_Meta_Box
{

    /**
     * Initialize the class
     */
    public function __construct()
    {
        add_action('add_meta_boxes', array($this, 'atwb_add_icon_meta_box'));
        add_action('save_post', array($this, 'atwb_save_icon_meta_box'));
    }

    /**
     * Add custom meta box to the edit screen
     */
    public function atwb_add_icon_meta_box()
    {
        add_meta_box(
            'timeline_custom_meta_box',
            esc_html__('Select Icon', 'atwb'),
            array($this, 'atwb_render_custom_meta_box'),
            _ATWB_POST_TYPE,
            'normal',
            'default'
        );
    }

    /**
     * Render the HTML for the custom meta box
     *
     * @param mixed $post Post object.
     */
    public function atwb_render_custom_meta_box($post)
    {
        $timeline_icon = get_post_meta($post->ID, 'timeline_icon', true);
        $all_dashicons = $this->get_all_dashicons();
        // Add a nonce field so we can check for it later.
        wp_nonce_field('atwb_icon_nonce', 'atwb_icon_nonce');

        ?>

        <div class="dashicon-picker-aria">
            <?php echo wp_kses_post(sprintf('<label id="togglePicker" for="timeline_icon"> <span class="dashicons %s"></span></label> ', esc_attr($timeline_icon))) ?>
            <input name="timeline_icon" id="timeline_icon" type="hidden" value="<?php echo esc_attr($timeline_icon) ?>">
            <div class="icon-picker">
                <?php
                foreach ($all_dashicons as $dashicon) {
                    echo wp_kses_post(sprintf('<span class="dashicons %s" data-value="%s"></span>', esc_attr($dashicon), esc_attr($dashicon)));
                }
                ?>
            </div>
        </div>

        <script>
            jQuery(document).ready(function ($) {
                $('#togglePicker').on('click', function () {
                    $(".icon-picker").toggleClass('opend');
                });

                $(".icon-picker").on('click', 'span.dashicons', function () {
                    var val = $(this).attr('data-value');
                    $("#timeline_icon").val(val);
                    $('#togglePicker').find("span").removeClass().addClass("dashicons " + val);
                    $(this).parent('div.icon-picker').toggleClass('opend');
                });
            });
        </script>

        <?php
    }

    /**
     * Load all dashicons in an array
     *
     * @return array Dashicons as an array.
     */
    public function get_all_dashicons()
    {
        $dashicons_css = file_get_contents(admin_url('load-styles.php?c=0&dir=ltr&load=dashicons,admin-bar,buttons,media-views,wp-admin,wp-auth-check&ver=' . get_bloginfo('version')));
        preg_match_all('/\.(dashicons-[a-z0-9-]+)/', $dashicons_css, $matches);

        return $matches[1];
    }

    /**
     * Save the custom field value when the post is saved
     *
     * @param mixed $post_id Post ID.
     */
    public function atwb_save_icon_meta_box($post_id)
    {
        // Verify that the nonce is valid.
        if (!isset($_POST['atwb_icon_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['atwb_icon_nonce'])), 'atwb_icon_nonce')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        if (!isset($_POST['timeline_icon'])) {
            return;
        }
        $iconclass = sanitize_text_field($_POST['timeline_icon']);
        update_post_meta($post_id, 'timeline_icon', htmlspecialchars($iconclass, ENT_QUOTES, 'UTF-8'));



    }
}

// Instantiate the class
new Timeline_Icon_Meta_Box();
