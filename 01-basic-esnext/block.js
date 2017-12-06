const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
	title: __( 'Example: Basic (esnext)' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit() {
		return <div style={ blockStyle }>Basic example with JSX! (editor)</div>;
	},
	save() {
		return <div style={ blockStyle }>Basic example with JSX! (front)</div>;
	},
} );
