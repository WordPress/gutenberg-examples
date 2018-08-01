/**
 * Hello World: Step 3
 *
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by RichText.
 */
( function( blocks, editor, i18n, element ) {
	const el = element.createElement;
	const __ = i18n.__;
	const RichText = editor.RichText;

	wp.i18n.setLocaleData( { '': {} }, 'gutenberg-examples' );

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

		edit: function( props ) {
			const content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				RichText,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
			);
		},

		save: function( props ) {
			return el( RichText.Content, {
				tagName: 'p', value: props.attributes.content,
			} );
		},
	} );
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
) );
