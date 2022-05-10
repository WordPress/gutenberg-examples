/**
 * WordPress dependencies
 */
import {
	RichText,
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	const {
		attributes: { content, alignment },
		className,
	} = props;

	const onChangeContent = ( newContent ) => {
		props.setAttributes( { content: newContent } );
	};

	const onChangeAlignment = ( newAlignment ) => {
		props.setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	return (
		<div { ...blockProps }>
			{
				<BlockControls>
					<AlignmentToolbar
						value={ alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
			}
			<RichText
				className={ className }
				style={ { textAlign: alignment } }
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
		</div>
	);
};

export default Edit;
