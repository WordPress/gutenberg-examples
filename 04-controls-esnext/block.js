const { __ } = wp.i18n;
const {
	registerBlockType,
	Editable,
	query: { children },
	AlignmentToolbar,
	BlockControls
} = wp.blocks;

registerBlockType( 'gutenberg-examples/04-controls-esnext', {
	title: __( 'Example: Controls (esnext)' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: children( 'p' ),
	},
	edit: props => {
		const {
			attributes: {
				content,
				alignment
			},
			focus,
			className,
			setFocus
		} = props;

		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};

		const onChangeAlignment = newAlignment => {
			props.setAttributes( { alignment: newAlignment } );
		};

		return (
			<div>
				{
					!! focus && (
						<BlockControls>
							<AlignmentToolbar
								value={ alignment }
								onChange={ onChangeAlignment }
							/>
						</BlockControls>
					)
				}
				<Editable
					className={ className }
					style={ { textAlign: alignment } }
					onChange={ onChangeContent }
					value={ content }
					focus={ focus }
					onFocus={ setFocus }
					/>
			</div>
		);
	},
	save: props => {
		let classes = '';
		if ( props.attributes.alignment ) {
			classes = 'gutenberg-examples-align-' + props.attributes.alignment;
		}
		return (
			<p className={ classes }>
				{ props.attributes.content }
			</p>
		);
	}
} );
