// `const` is for creating block scoped variables that can not be reassigned.
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
//
// These are using Destructing Assignment which can be used to unpack properties from an object
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { __ } = wp.i18n;
const { registerBlockType, Editable } = wp.blocks;

// registerBlockType is the base function for registering a block  
// see: https://wordpress.org/gutenberg/handbook/block-api/#register-block-type
registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	// the displayed title in the block selector
	title: __( 'Example: Editable (esnext)' ),
	// this can be any of WordPress Dashicons, or a custom svg element.
	icon: 'universal-access-alt',
	// The category where the block will live in the block insertor 
	// Possible values can be found at https://wordpress.org/gutenberg/handbook/block-api/#category
	category: 'layout',
	// this blocks structured data
	// See https://wordpress.org/gutenberg/handbook/block-api/attributes/
	attributes: {
		content: {
			// the data type we are storing
			// See http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1.1
			type: 'array',
			// source dictates how to get this content
			// HTML-based sources will have a selector
			source: 'children',
			selector: 'p',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 * @return {Element}       Element to render.
	 */
	edit: props => {
	// The above uses arrow functions which inherit `this` from it's parent.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
		const { attributes: { content }, focus, className, setFocus } = props;
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};
		// We are returning JSX which babel will convert for us due to the use of `babel-plugin-transform-react-jsx`
		// Intro to JSX: https://reactjs.org/docs/introducing-jsx.html
		return (
			// see: https://wordpress.org/gutenberg/handbook/block-api/editable-api/
			<RichText
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				focus={ focus }
				onFocus={ setFocus }
				/>
		);
	},
	
	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into `post_content`.
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
	 *
	 * @return {Element}       Element to render.
	 */	
	save: props => (
		<p>
			{ props.attributes.content }
		</p>
	)
} );
