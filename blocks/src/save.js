/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { timelineItems } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="timeline_aria" { ...blockProps }>
			<div class="timeline_items">
				{timelineItems.map((item, index) => (
					<div className="timeline_item_area" key={index}>
						<div className="timeline_icon">
							<span className={`dashicons ${item.timelineIcon}`}></span>
						</div>
						<div className="timeline_date">
							<span>{item.formattedDate}</span>
						</div>
						<div className="timeline_item">
							<div className="timeline_thumbnail">
								<img src={item.postThumbnail} alt="Timeline Thumbnail" />
							</div>
							<div className="timeline_title">{item.postTitle}</div>
							<div className="timeline_content">
								<p>{item.postContent}</p>
							</div>
						</div>

					</div>
				))}
			</div>
		</div>
	);
}
