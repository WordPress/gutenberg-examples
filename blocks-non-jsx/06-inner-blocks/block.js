( function ( blocks, i18n, element, blockEditor ) {
	var __ = i18n.__;
	var el = element.createElement;
	var InnerBlocks = blockEditor.InnerBlocks;
	var useBlockProps = blockEditor.useBlockProps;
	blocks.registerBlockType( 'gutenberg-examples/example-06', {
		title: __( 'Example: Inner Blocks', 'gutenberg-examples' ),
		category: 'layout',
		edit: function () {
			return el( 'div', useBlockProps(), el( InnerBlocks ) );
		},
		save: function () {
			return el( 'div', useBlockProps.save(), el( InnerBlocks.Content ) );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
	window.wp.blockEditor
);
