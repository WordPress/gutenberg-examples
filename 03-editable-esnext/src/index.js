import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	title: __( 'Example: Editable (ESNext)', 'gutenberg-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: __( 'Hello world' ),
		},
	},
	edit: ( props ) => {
		const {
			attributes: { content },
			setAttributes,
			className,
		} = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName="p"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		return (
			<RichText.Content tagName="p" value={ props.attributes.content } />
		);
	},
} );
