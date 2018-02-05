const { __ } = wp.i18n;
const {
	registerBlockType,
	RichText,
	MediaUpload,
	source: {
		attr,
		children
	}
} = wp.blocks;
const { Button } = wp.components;

registerBlockType( 'gutenberg-examples/example-05-recipe-card-esnext', {
	title: __( 'Example: Recipe Card (esnext)' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		ingredients: {
			type: 'array',
			source: 'children',
			selector: '.ingredients',
		},
		instructions: {
			type: 'array',
			source: 'children',
			selector: '.steps',
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
				<RichText
					tagName="h2"
					placeholder={ __( 'Write Recipe title…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
				/>
				<div className="recipe-image">
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ attributes.mediaID }
						render={ ( { open } ) => (
							<Button className={ attributes.mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! attributes.mediaID ? __( 'Upload Image' ) : <img src={ attributes.mediaURL } /> }
							</Button>
						) }
					/>
				</div>
				<h3>{ __( 'Ingredients' ) }</h3>
				<RichText
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
				<RichText
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
