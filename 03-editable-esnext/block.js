// `const` is for creating block scoped variables that can not be reassigned.
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
//
// These are using Destructing Assignment which can be used to unpack properties from an object
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { __ } = wp.i18n;
const { registerBlockType, Editable, source: { children } } = wp.blocks;

// registerBlockType is the base function for registering a block  
// see: https://wordpress.org/gutenberg/handbook/block-api/#register-block-type
registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	// the displayed title in the block selector
	title: __( 'Example: Editable (esnext)' ),
	// this can be any of WordPress Dashicons, or a custom svg element.
	icon: 'universal-access-alt',
	// The category where the block will live in the block selector 
	category: 'layout',
	// this blocks structrued data
	// See https://wordpress.org/gutenberg/handbook/block-api/attributes/
	attributes: {
		content: {
			// the data type we are storing
			type: 'array',
			// source and selector combine to dictate how to get this content
			source: 'children',
			selector: 'p',
		},
	},
	// This uses arrow functions which inherit `this` from it's parent.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	//
	// The edit function describes the structure of your block in the context of the editor.
	// see: https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/#edit
	edit: props => {
		const { attributes: { content }, focus, className, setFocus } = props;
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};
		// We are returning JSX which babel will convert for us due to the use of `babel-plugin-transform-react-jsx`
		// Intro to JSX: https://reactjs.org/docs/introducing-jsx.html
		return (
			// see: https://wordpress.org/gutenberg/handbook/block-api/editable-api/
			<Editable
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				focus={ focus }
				onFocus={ setFocus }
				/>
		);
	},
	// The save function defines the way in which the different attributes should be combined into the final markup
	// see: https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/#save
	save: props => (
		<p>
			{ props.attributes.content }
		</p>
	)
} );
