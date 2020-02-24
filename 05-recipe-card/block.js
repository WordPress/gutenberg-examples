( function( blocks, editor, i18n, element, components, _ ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = editor.RichText;
	var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'gutenberg-examples/example-05-recipe-card', {
		title: __( 'Example: Recipe Card', 'gutenberg-examples' ),
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

		edit: function( props ) {
			var attributes = props.attributes;

			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return el(
				'div',
				{ className: props.className },
				el( RichText, {
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'Write Recipe title…',
						'gutenberg-examples'
					),
					value: attributes.title,
					onChange: function( value ) {
						props.setAttributes( { title: value } );
					},
				} ),
				el(
					'div',
					{ className: 'recipe-image' },
					el( MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						value: attributes.mediaID,
						render: function( obj ) {
							return el(
								components.Button,
								{
									className: attributes.mediaID
										? 'image-button'
										: 'button button-large',
									onClick: obj.open,
								},
								! attributes.mediaID
									? __( 'Upload Image', 'gutenberg-examples' )
									: el( 'img', { src: attributes.mediaURL } )
							);
						},
					} )
				),
				el( 'h3', {}, i18n.__( 'Ingredients', 'gutenberg-examples' ) ),
				el( RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: i18n.__(
						'Write a list of ingredients…',
						'gutenberg-examples'
					),
					value: attributes.ingredients,
					onChange: function( value ) {
						props.setAttributes( { ingredients: value } );
					},
					className: 'ingredients',
				} ),
				el( 'h3', {}, i18n.__( 'Instructions', 'gutenberg-examples' ) ),
				el( RichText, {
					tagName: 'div',
					inline: false,
					placeholder: i18n.__(
						'Write instructions…',
						'gutenberg-examples'
					),
					value: attributes.instructions,
					onChange: function( value ) {
						props.setAttributes( { instructions: value } );
					},
				} )
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				{ className: props.className },
				el( RichText.Content, {
					tagName: 'h2',
					value: attributes.title,
				} ),
				attributes.mediaURL &&
					el(
						'div',
						{ className: 'recipe-image' },
						el( 'img', { src: attributes.mediaURL } )
					),
				el( 'h3', {}, i18n.__( 'Ingredients', 'gutenberg-examples' ) ),
				el( RichText.Content, {
					tagName: 'ul',
					className: 'ingredients',
					value: attributes.ingredients,
				} ),
				el( 'h3', {}, i18n.__( 'Instructions', 'gutenberg-examples' ) ),
				el( RichText.Content, {
					tagName: 'div',
					className: 'steps',
					value: attributes.instructions,
				} )
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._
);
