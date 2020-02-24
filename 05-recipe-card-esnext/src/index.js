import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'gutenberg-examples/example-05-recipe-card-esnext', {
	title: __( 'Example: Recipe Card (ESNext)', 'gutenberg-examples' ),
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
	example: {
		attributes: {
			title: __( 'Chocolate Chip Cookies', 'gutenberg-examples' ),
			mediaURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
			ingredients: [
				__( 'flour', 'gutenberg-examples' ),
				__( 'sugar', 'gutenberg-examples' ),
				__( 'chocolate', 'gutenberg-examples' ),
				'💖',
			],
			instructions: [
				__( 'Mix', 'gutenberg-examples' ),
				__( 'Bake', 'gutenberg-examples' ),
				__( 'Enjoy', 'gutenberg-examples' ),
			],
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, ingredients, instructions },
			setAttributes,
		} = props;
		const onChangeTitle = ( value ) => {
			setAttributes( { title: value } );
		};

		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};
		const onChangeIngredients = ( value ) => {
			setAttributes( { ingredients: value } );
		};

		const onChangeInstructions = ( value ) => {
			setAttributes( { instructions: value } );
		};

		return (
			<div className={ className }>
				<RichText
					tagName="h2"
					placeholder={ __(
						'Write Recipe title…',
						'gutenberg-examples'
					) }
					value={ title }
					onChange={ onChangeTitle }
				/>
				<div className="recipe-image">
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<Button
								className={
									mediaID
										? 'image-button'
										: 'button button-large'
								}
								onClick={ open }
							>
								{ ! mediaID ? (
									__( 'Upload Image', 'gutenberg-examples' )
								) : (
									<img
										src={ mediaURL }
										alt={ __(
											'Upload Recipe Image',
											'gutenberg-examples'
										) }
									/>
								) }
							</Button>
						) }
					/>
				</div>
				<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
				<RichText
					tagName="ul"
					multiline="li"
					placeholder={ __(
						'Write a list of ingredients…',
						'gutenberg-examples'
					) }
					value={ ingredients }
					onChange={ onChangeIngredients }
					className="ingredients"
				/>
				<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>
				<RichText
					tagName="div"
					multiline="p"
					className="steps"
					placeholder={ __(
						'Write the instructions…',
						'gutenberg-examples'
					) }
					value={ instructions }
					onChange={ onChangeInstructions }
				/>
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { title, mediaURL, ingredients, instructions },
		} = props;
		return (
			<div className={ className }>
				<RichText.Content tagName="h2" value={ title } />

				{ mediaURL && (
					<img
						className="recipe-image"
						src={ mediaURL }
						alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
					/>
				) }

				<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
				<RichText.Content
					tagName="ul"
					className="ingredients"
					value={ ingredients }
				/>

				<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>
				<RichText.Content
					tagName="div"
					className="steps"
					value={ instructions }
				/>
			</div>
		);
	},
} );
