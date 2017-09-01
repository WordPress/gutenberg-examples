const { __ } = wp.i18n;
const {
	registerBlockType,
	Editable,
	MediaUploadButton,
	source: {
		attr,
		children
	}
} = wp.blocks;

registerBlockType( 'gutenberg-examples/05-recipe-card-esnext', {
	title: __( 'Example: Recipe Card (esnext)' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: children( 'h2' ),
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: attr( 'img', 'src' ),
		},
		ingredients: {
			type: 'array',
			source: children( '.ingredients' ),
		},
		instructions: {
			type: 'array',
			source: children( '.steps' ),
		},
	},
	edit: props => {
		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;
		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
		};
		const onSelectImage = media => {
			props.setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};
		const onChangeIngredients = value => {
			props.setAttributes( { ingredients: value } );
		};
		const onFocusIngredients = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'ingredients' } ) );
		};
		const onChangeInstructions = value => {
			props.setAttributes( { instructions: value } );
		};
		const onFocusInstructions = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'instructions' } ) );
		};

		return (
			<div className={ props.className }>
				<Editable
					tagName="h2"
					placeholder={ __( 'Write Recipe title…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
				/>
				<div className="recipe-image">
					<MediaUploadButton
						buttonProps={
							{
								className: attributes.mediaID
									? 'image-button'
									: 'components-button button button-large',
							}
						}
						onSelect={ onSelectImage }
						type="image"
						value={ attributes.mediaID }
						>
						{
							attributes.mediaID
								? <img src={ attributes.mediaURL } />
								: __( 'Upload Image' )
						}
					</MediaUploadButton>
				</div>
				<h3>{ __( 'Ingredients' ) }</h3>
				<Editable
					tagName="ul"
					multiline="li"
					placeholder={ __( 'Write a list of ingredients…' ) }
					value={ attributes.ingredients }
					onChange={ onChangeIngredients }
					focus={ focusedEditable === 'ingredients' }
					onFocus={ onFocusIngredients }
					className="ingredients"
				/>
				<h3>{ __( 'Instructions' ) }</h3>
				<Editable
					tagName="div"
					multiline="p"
					className="steps"
					placeholder={ __( 'Write the instructions…' ) }
					value={ attributes.instructions }
					onChange={ onChangeInstructions }
					focus={ focusedEditable === 'instructions' }
					onFocus={ onFocusInstructions }
				/>
			</div>
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				mediaURL,
				ingredients,
				instructions
			}
		} = props;
		return (
			<div className={ className }>
				<h2>
					{ title }
				</h2>
				{
					mediaURL && (
						<img className="recipe-image" src={ mediaURL } />
					)
				}
				<ul className="ingredients">
					{ ingredients }
				</ul>
				<div className="steps">
					{ instructions }
				</div>
			</div>
		);
	}
} );
