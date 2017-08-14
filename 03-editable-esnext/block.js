const { __ } = wp.i18n;
const { registerBlockType, Editable, query: { children } } = wp.blocks;

registerBlockType( 'gutenberg-examples/03-editable-esnext', {
	title: __( 'Example: Editable (esnext)' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: children( 'p' ),
	},
	edit: props => {
		const { attributes: { content }, focus, className, setFocus } = props;
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};
		return (
			<Editable
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
