/**
 * Hello World: Step 3
 *
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by RichText.
 */
( function( blocks, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = blocks.RichText;
	var children = blocks.source.children;

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
			var content = props.attributes.content;
			var focus = props.focus;
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
					focus: focus,
					onFocus: props.setFocus
				}
			);
		},

		save: function( props ) {
			return el( 'p', {}, props.attributes.content );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
);
