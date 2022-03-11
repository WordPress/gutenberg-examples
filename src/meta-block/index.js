/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
	const blockProps = useBlockProps();
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const metaFieldValue = meta.myguten_meta_block_field;
	const updateMetaValue = ( newValue ) => {
		setMeta( { ...meta, myguten_meta_block_field: newValue } );
	};

	return (
		<div { ...blockProps }>
			<TextControl
				label="Meta Block Field"
				value={ metaFieldValue }
				onChange={ updateMetaValue }
			/>
		</div>
	);
};

registerBlockType( 'myguten/meta-block', {
	edit: Edit,

	// No information saved to the block.
	// Data is saved to post meta via the hook.
	save: () => {
		return null;
	},
} );
