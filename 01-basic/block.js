/**
 * Hello World: Step 1
 *
 * Simple block, renders and saves the same content without interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended
 * because all of these styles will appear in `post_content`.
 */
( function( blocks, i18n, element ) {
	const el = element.createElement;
	const __ = i18n.__;

	const blockStyle = {
		backgroundColor: '#900',
		color: '#fff',
		padding: '20px',
	};

	i18n.setLocaleData( { '': {} }, 'gutenberg-examples' );

	blocks.registerBlockType( 'gutenberg-examples/example-01-basic', {
		title: __( 'Example: Basic', 'gutenberg-examples' ),
		icon: 'universal-access-alt',
		category: 'layout',
		edit: function() {
			return el(
				'p',
				{ style: blockStyle },
				'Hello World, step 1 (from the editor).'
			);
		},
		save: function() {
			return el(
				'p',
				{ style: blockStyle },
				'Hello World, step 1 (from the frontend).'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
) );
