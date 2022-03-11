/**
 * Hello World: Step 3
 *
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by RichText.
 */
( function( blocks, editor, i18n, element, blockEditor ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = editor.RichText;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'gutenberg-examples/example-03-editable', {
		title: __( 'Example: Editable', 'gutenberg-examples' ),
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

		edit: function( props ) {
			var content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el( RichText, useBlockProps( {
				tagName: 'p',
				className: props.className,
				onChange: onChangeContent,
				value: content,
			} ) );
		},

		save: function( props ) {
			return el( RichText.Content, useBlockProps.save( {
				tagName: 'p',
				value: props.attributes.content,
			} ) );
		},
	} );
}( window.wp.blocks, window.wp.editor, window.wp.i18n, window.wp.element, window.wp.blockEditor ) );
