/**
 * Hello World: Step 2
 *
 * Move styles to stylesheets - both edit and front-end.
 *
 * Note the `className` property supplied to the `edit` callback.  To use the
 * `.wp-block-*` class for styling, plugin implementers must return an
 * appropriate element with this class.
 */
( function ( blocks, i18n, element, blockEditor ) {
	var el = element.createElement;
	var __ = i18n.__;

	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
		title: __( 'Example: Stylesheets', 'gutenberg-examples' ),
		icon: 'universal-access-alt',
		category: 'layout',
		example: {},
		edit: function ( props ) {
			return el(
				'p',
				useBlockProps( { className: props.className } ),
				__(
					'Hello World, step 2 (from the editor, in green).',
					'gutenberg-examples'
				)
			);
		},
		save: function () {
			return el(
				'p',
				useBlockProps.save(),
				__(
					'Hello World, step 2 (from the frontend, in red).',
					'gutenberg-examples'
				)
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
	window.wp.blockEditor
);
