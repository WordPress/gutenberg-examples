const { __ } = wp.i18n;
const {
	registerBlockType
} = wp.blocks;
const {
	RichText,
	MediaUpload
} = wp.editor;
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
	edit: (props) => {
		const {
			className,
			attributes: {
				title,
				mediaURL,
				ingredients,
				instructions
			},
			setAttributes
		} = props;
		const onChangeTitle = value => {
			setAttributes( { title: value } );
		};
		
		const onSelectImage = media => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};
		const onChangeIngredients = value => {
			setAttributes( { ingredients: value } );
		};

		const onChangeInstructions = value => {
			setAttributes( { instructions: value } );
		};

		return (
			<div className={ className }>
				<RichText
					tagName="h2"
					placeholder={ __( 'Write Recipe title…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
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
				/>
			</div>
		);
	},
	save: (props) => {
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
				<RichText.Content tagName="h2" value={ title } />

				{
					mediaURL && (
						<img className="recipe-image" src={ mediaURL } />
					)
				}

				<RichText.Content tagName="h2" className="ingredients" value={ ingredients } />

				<RichText.Content tagName="div" className="steps" value={ instructions } />
			</div>
		);
	}
} );
