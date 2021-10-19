( function( blocks, element, blockEditor ) {
	var el = element.createElement;
	var InnerBlocks = blockEditor.InnerBlocks;
	var useBlockProps = blockEditor.useBlockProps;
	blocks.registerBlockType( 'gutenberg-examples/example-06', {
		title: 'Example: Inner Blocks',
		category: 'layout',
		edit: function() {
			return el(
				'div',
				useBlockProps(),
				el( InnerBlocks )
			);
		},
		save: function() {
			return el(
				'div',
				useBlockProps.save(),
				el( InnerBlocks.Content )
			);
		},
	} );
}( window.wp.blocks, window.wp.element, window.wp.blockEditor ) );
