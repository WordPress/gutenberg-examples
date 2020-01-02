import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'gutenberg-examples/example-06-esnext', {
	title: 'Example: Inner Blocks (ESNext)',
	category: 'layout',
	edit: ( props ) => {
		return (
			<div className={ props.className }>
				<InnerBlocks />
			</div>
		);
	},
	save: ( props ) => {
		return (
			<div className={ props.className } >
				<InnerBlocks.Content />
			</div>
		);
	},
} );
