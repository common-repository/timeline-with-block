/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './index.css';
import './editor.css';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { RichText, MediaUpload } from '@wordpress/block-editor';
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
// Example structure for each timeline item
const timelineItemDefault = {
    timelineIcon: 'dashicons-admin-post',
    formattedDate: formattedDate,
    postThumbnail: '', // Default image URL
    postTitle: 'timeline title',
    postContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
};
const dashiconString = "dashicons-before,dashicons-admin-appearance,dashicons-admin-collapse,dashicons-admin-comments,dashicons-admin-customizer,dashicons-admin-generic,dashicons-admin-home,dashicons-admin-links,dashicons-admin-media,dashicons-admin-multisite,dashicons-admin-network,dashicons-admin-page,dashicons-admin-plugins,dashicons-admin-post,dashicons-admin-settings,dashicons-admin-site-alt,dashicons-admin-site-alt2,dashicons-admin-site-alt3,dashicons-admin-site,dashicons-admin-tools,dashicons-admin-users,dashicons-airplane,dashicons-album,dashicons-align-center,dashicons-align-full-width,dashicons-align-left,dashicons-align-none,dashicons-align-pull-left,dashicons-align-pull-right,dashicons-align-right,dashicons-align-wide,dashicons-amazon,dashicons-analytics,dashicons-archive,dashicons-arrow-down-alt,dashicons-arrow-down-alt2,dashicons-arrow-down,dashicons-arrow-left-alt,dashicons-arrow-left-alt2,dashicons-arrow-left,dashicons-arrow-right-alt,dashicons-arrow-right-alt2,dashicons-arrow-right,dashicons-arrow-up-alt,dashicons-arrow-up-alt2,dashicons-arrow-up-duplicate,dashicons-arrow-up,dashicons-art,dashicons-awards,dashicons-backup,dashicons-bank,dashicons-beer,dashicons-bell,dashicons-block-default,dashicons-book-alt,dashicons-book,dashicons-buddicons-activity,dashicons-buddicons-bbpress-logo,dashicons-buddicons-buddypress-logo,dashicons-buddicons-community,dashicons-buddicons-forums,dashicons-buddicons-friends,dashicons-buddicons-groups,dashicons-buddicons-pm,dashicons-buddicons-replies,dashicons-buddicons-topics,dashicons-buddicons-tracking,dashicons-building,dashicons-businessman,dashicons-businessperson,dashicons-businesswoman,dashicons-button,dashicons-calculator,dashicons-calendar-alt,dashicons-calendar,dashicons-camera-alt,dashicons-camera,dashicons-car,dashicons-carrot,dashicons-cart,dashicons-category,dashicons-chart-area,dashicons-chart-bar,dashicons-chart-line,dashicons-chart-pie,dashicons-clipboard,dashicons-clock,dashicons-cloud-saved,dashicons-cloud-upload,dashicons-cloud,dashicons-code-standards,dashicons-coffee,dashicons-color-picker,dashicons-columns,dashicons-controls-back,dashicons-controls-forward,dashicons-controls-pause,dashicons-controls-play,dashicons-controls-repeat,dashicons-controls-skipback,dashicons-controls-skipforward,dashicons-controls-volumeoff,dashicons-controls-volumeon,dashicons-cover-image,dashicons-dashboard,dashicons-database-add,dashicons-database-export,dashicons-database-import,dashicons-database-remove,dashicons-database-view,dashicons-database,dashicons-desktop,dashicons-dismiss,dashicons-download,dashicons-drumstick,dashicons-edit-large,dashicons-edit-page,dashicons-edit,dashicons-editor-aligncenter,dashicons-editor-alignleft,dashicons-editor-alignright,dashicons-editor-bold,dashicons-editor-break,dashicons-editor-code-duplicate,dashicons-editor-code,dashicons-editor-contract,dashicons-editor-customchar,dashicons-editor-expand,dashicons-editor-help,dashicons-editor-indent,dashicons-editor-insertmore,dashicons-editor-italic,dashicons-editor-justify,dashicons-editor-kitchensink,dashicons-editor-ltr,dashicons-editor-ol-rtl,dashicons-editor-ol,dashicons-editor-outdent,dashicons-editor-paragraph,dashicons-editor-paste-text,dashicons-editor-paste-word,dashicons-editor-quote,dashicons-editor-removeformatting,dashicons-editor-rtl,dashicons-editor-spellcheck,dashicons-editor-strikethrough,dashicons-editor-table,dashicons-editor-textcolor,dashicons-editor-ul,dashicons-editor-underline,dashicons-editor-unlink,dashicons-editor-video,dashicons-ellipsis,dashicons-email-alt,dashicons-email-alt2,dashicons-email,dashicons-embed-audio,dashicons-embed-generic,dashicons-embed-photo,dashicons-embed-post,dashicons-embed-video,dashicons-excerpt-view,dashicons-exit,dashicons-external,dashicons-facebook-alt,dashicons-facebook,dashicons-feedback,dashicons-filter,dashicons-flag,dashicons-food,dashicons-format-aside,dashicons-format-audio,dashicons-format-chat,dashicons-format-gallery,dashicons-format-image,dashicons-format-quote,dashicons-format-status,dashicons-format-video,dashicons-forms,dashicons-fullscreen-alt,dashicons-fullscreen-exit-alt,dashicons-games,dashicons-google,dashicons-googleplus,dashicons-grid-view,dashicons-groups,dashicons-hammer,dashicons-heading,dashicons-heart,dashicons-hidden,dashicons-hourglass,dashicons-html,dashicons-id-alt,dashicons-id,dashicons-image-crop,dashicons-image-filter,dashicons-image-flip-horizontal,dashicons-image-flip-vertical,dashicons-image-rotate-left,dashicons-image-rotate-right,dashicons-image-rotate,dashicons-images-alt,dashicons-images-alt2,dashicons-index-card,dashicons-info-outline,dashicons-info,dashicons-insert-after,dashicons-insert-before,dashicons-insert,dashicons-instagram,dashicons-laptop,dashicons-layout,dashicons-leftright,dashicons-lightbulb,dashicons-linkedin,dashicons-list-view,dashicons-location-alt,dashicons-location,dashicons-lock-duplicate,dashicons-lock,dashicons-marker,dashicons-media-archive,dashicons-media-audio,dashicons-media-code,dashicons-media-default,dashicons-media-document,dashicons-media-interactive,dashicons-media-spreadsheet,dashicons-media-text,dashicons-media-video,dashicons-megaphone,dashicons-menu-alt,dashicons-menu-alt2,dashicons-menu-alt3,dashicons-menu,dashicons-microphone,dashicons-migrate,dashicons-minus,dashicons-money-alt,dashicons-money,dashicons-move,dashicons-nametag,dashicons-networking,dashicons-no-alt,dashicons-no,dashicons-open-folder,dashicons-palmtree,dashicons-paperclip,dashicons-pdf,dashicons-performance,dashicons-pets,dashicons-phone,dashicons-pinterest,dashicons-playlist-audio,dashicons-playlist-video,dashicons-plugins-checked,dashicons-plus-alt,dashicons-plus-alt2,dashicons-plus,dashicons-podio,dashicons-portfolio,dashicons-post-status,dashicons-pressthis,dashicons-printer,dashicons-privacy,dashicons-products,dashicons-randomize,dashicons-reddit,dashicons-redo,dashicons-remove,dashicons-rest-api,dashicons-rss,dashicons-saved,dashicons-schedule,dashicons-screenoptions,dashicons-search,dashicons-share-alt,dashicons-share-alt2,dashicons-share,dashicons-shield-alt,dashicons-shield,dashicons-shortcode,dashicons-slides,dashicons-smartphone,dashicons-smiley,dashicons-sort,dashicons-sos,dashicons-spotify,dashicons-star-empty,dashicons-star-filled,dashicons-star-half,dashicons-sticky,dashicons-store,dashicons-superhero-alt,dashicons-superhero,dashicons-table-col-after,dashicons-table-col-before,dashicons-table-col-delete,dashicons-table-row-after,dashicons-table-row-before,dashicons-table-row-delete,dashicons-tablet,dashicons-tag,dashicons-tagcloud,dashicons-testimonial,dashicons-text-page,dashicons-text,dashicons-thumbs-down,dashicons-thumbs-up,dashicons-tickets-alt,dashicons-tickets,dashicons-tide,dashicons-translation,dashicons-trash,dashicons-twitch,dashicons-twitter-alt,dashicons-twitter,dashicons-undo,dashicons-universal-access-alt,dashicons-universal-access,dashicons-unlock,dashicons-update-alt,dashicons-update,dashicons-upload,dashicons-vault,dashicons-video-alt,dashicons-video-alt2,dashicons-video-alt3,dashicons-visibility,dashicons-warning,dashicons-welcome-add-page,dashicons-welcome-comments,dashicons-welcome-learn-more,dashicons-welcome-view-site,dashicons-welcome-widgets-menus,dashicons-welcome-write-blog,dashicons-whatsapp,dashicons-wordpress-alt,dashicons-wordpress,dashicons-xing,dashicons-yes-alt,dashicons-yes,dashicons-youtube,dashicons-editor-distractionfree,dashicons-exerpt-view,dashicons-format-links,dashicons-format-standard,dashicons-post-trash,dashicons-share1,dashicons-welcome-edit-page,dashicons-arrow-down"; // Your entire string
import { useState } from 'react';
export default function Edit({ attributes, setAttributes }) {
    const { timelineItems } = attributes;
    const dashiconArray = dashiconString.split(',');
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [topPosition, settopPosition] = useState(0);
    return (
        <div {...useBlockProps()}>
            <div class="timeline_aria">
                <div class="timeline_items">
                    {timelineItems.map((item, index) => (
                        <div className="timeline_item_area animate__animated" key={index}>
                            <span className='dashicons  dashicons-trash remove-timeline-item' title='remote timeline item' onClick={() => removeTimelineIte(index)}></span>
                            <div className="timeline_icon">
                                <span className={`dashicons  ${item.timelineIcon}`} onClick={(event) => iconpickerClick(index, event)}
                                ></span>
                            </div>
                            <div className="timeline_date">
                                <span>
                                    <RichText
                                        value={item.formattedDate}
                                        onChange={(e) => handleAttributeChange(index, 'formattedDate', e)}
                                        placeholder="Enter Date"
                                    />
                                </span>
                            </div>
                            <div className="timeline_item">
                                <div className="timeline_thumbnail">
                                    <MediaUpload
                                        onSelect={(media) => handleAttributeChange(index, 'postThumbnail', media.url)}
                                        type="image"
                                        value={item.postThumbnail}
                                        render={({ open }) => (
                                            <img
                                                src={item.postThumbnail}
                                                alt="Thumbnail"
                                                onClick={open}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="timeline_title">
                                    <RichText
                                        value={item.postTitle}
                                        onChange={(value) => handleAttributeChange(index, 'postTitle', value)}
                                        placeholder="Enter Title"
                                    />
                                </div>
                                <div className="timeline_content">
                                    <RichText
                                        value={item.postContent}
                                        onChange={(value) => handleAttributeChange(index, 'postContent', value)}
                                        placeholder="Enter Content"

                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='text-center clearfix'>
                <button type='button' className='addtimeline-btn' onClick={addTimelineItem}>Add Timeline Item</button>
            </div>

            <div className={`dashicon-picker-aria ${isOpen == true ? 'opend' : ''}`} data-top-position={topPosition} >
                <div className='icon-picker-close'>   <span className='dashicons  dashicons-no-alt' onClick={() => setIsOpen(false)}></span></div>

                <div className="icon-picker">
                    {dashiconArray.map((item) => (
                        <span className={`dashicons ${item}`} data-value={item} key={item} onClick={() => handleDashiconClick(item)}></span>
                    ))}
                </div>
            </div>
        </div>
    );


    function handleDashiconClick(item) {
        setIsOpen(false);
        handleAttributeChange(currentIndex, 'timelineIcon', item);
        console.log(item);
    }
    function removeTimelineIte(itemIndex) {
        const newTimelineItems = [...timelineItems];
        newTimelineItems.splice(itemIndex, 1); // Removes one item at the specified index
        setAttributes({ timelineItems: newTimelineItems });
    }
    // Function to handle attribute change for a specific timeline item
    function handleAttributeChange(itemIndex, attributeName, value) {
        // console.log(value);
        const newTimelineItems = [...timelineItems];
        newTimelineItems[itemIndex] = {
            ...newTimelineItems[itemIndex],
            [attributeName]: value,
        };
        setAttributes({ timelineItems: newTimelineItems });
    }
    function iconpickerClick(index, event) {
        setIsOpen(true);
        setcurrentIndex(index);
        settopPosition(event.clientY);
        console.log(event);
    }
    // Function to add a new timeline item
    function addTimelineItem() {
        setAttributes({ timelineItems: [...timelineItems, { ...timelineItemDefault }] });
    }
}
