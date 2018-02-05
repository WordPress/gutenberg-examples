const { __ } = wp.i18n;
const { registerBlockType, RichText, source: { children } } = wp.blocks;

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	title: __( 'Example: Editable (esnext)' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: props => {
		const { attributes: { content }, focus, className, setFocus } = props;
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};
		return (
			<RichText
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				focus={ focus }
				onFocus={ setFocus }
				/>
		);
	},
	save: props => (
		<p>
			{ props.attributes.content }
		</p>
	)
} );
