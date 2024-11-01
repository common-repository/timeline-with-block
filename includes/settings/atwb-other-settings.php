<?php
/**
 * This Color settings for timeline
 *
 * PHP version 7.4.1
 *
 * @category Basefile
 * @package  General
 * @author   Alchemy Software Limited <wordpress@alchemy-bd.com>
 * @license  GPL v2 or later
 * @link     alchemy-bd.com
 */
namespace ATWB\Settings;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class TimelineOtherSettings
{
    public function __construct()
    {
        $this->timeline_load_Other_settings();
    }

    /**
     * This function will register section and settings field
     *
     * @return null
     */
    function timeline_load_Other_settings()
    {
        add_settings_section('other', esc_html__('Other Timeline Settings', 'atwb'), array($this, 'atwb_Other_Section_callback'), 'atwb-settings-other');

        $otherSettings = array(
            "atwb_maximum_item",
            "atwb_item_title_font_size",
        );

        foreach ($otherSettings as $field) {
            add_settings_field(
                $field,
                ucwords(str_replace('atwb ', '', str_replace('_', ' ', $field))),
                array($this, 'atwb_Other_Type_callback'),
                'atwb-settings-other', // Specify the page slug here
                'other',
                array('setting_id' => $field)
            );
        }
        add_settings_field('atwb_ascending_by_timeline_date', esc_html__('Item with assending Order', 'atwb'), array($this, 'renderBooleanFieldCallBack'), 'atwb-settings-other', 'other', array('setting_id' => 'atwb_ascending_by_timeline_date'));

    }
    /**
     * This function will register section and settings field
     *
     * @return null
     */
    function atwb_Other_Section_callback()
    {
        // Description for the color section
        echo wp_kses_post("<p>Precision meets customization in our Numeric Input section. Tailor your timeline by inputting numerical values that enhance the clarity and accuracy of data representation. Whether it's specifying quantities, adjusting scales, or configuring precise settings, this section empowers you to fine-tune your timeline with numerical precision. </p>");
    }
    /**
     * This function will register section and settings field
     *
     * @param mixed $args is arguments of settings field

     * @return null
     */
    function atwb_Other_Type_callback($args)
    {
        $setting_id = $args['setting_id'];
        $value = get_option($setting_id, '20'); // Default value is '0'
        ?>
        <input type="number" min="1" required id="<?php echo esc_attr($setting_id) ?>"
            name="<?php echo esc_attr($setting_id) ?>" value="<?php echo esc_attr($value) ?>" class="timeline_number_input" />
        <?php
    }
    /**
     * This function will return some html as settings field
     *
     * @param mixed $args is arguments of settings field

     * @return null
     */
    function renderBooleanFieldCallBack($args)
    {
        $setting_bool_id = $args['setting_id'];
        $v = get_option($setting_bool_id); // Default value is '0'

        // Sanitize the boolean value
        $v = $v ? '1' : '0';

        ?>
        <input type="checkbox" id="<?php echo esc_attr($setting_bool_id); ?>" name="<?php echo esc_attr($setting_bool_id); ?>"
            value="1" <?php checked('1', $v); ?> class="timeline-checkbox" />
        <label for="<?php echo esc_attr($setting_bool_id); ?>"></label>
        <?php
    }
}
new TimelineOtherSettings();