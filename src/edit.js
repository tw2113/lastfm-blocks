import { __ } from '@wordpress/i18n';

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';

export default function Edit( props ) {
	const {
		attributes: {},
		setAttributes,
	} = props;

	return (
		<div { ...useBlockProps() }>

		</div>
	);
}
