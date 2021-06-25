import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
export default registerBlockType( 'tw2113/lastfm-blocks', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,
	title: __( 'LastFM Blocks', 'lastfm-blocks' ),
	description: __( 'Last.FM Blocks', 'lastfm-blocks' ),
	attributes: {},
	category: 'widgets',
	icon: 'book-alt',
	edit: Edit,
	save: () => {
		return null;
	},
} );
