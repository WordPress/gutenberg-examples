( function( blocks, i18n, element, _ ) {
	var el = element.createElement;
	var children = blocks.source.children;
	var attr = blocks.source.attr;

	blocks.registerBlockType( 'gutenberg-examples/05-recipe-card', {
		title: i18n.__( 'Example: Recipe Card' ),
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
		edit: function( props ) {
			var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
			var attributes = props.attributes;
			var onSelectImage = ( media ) => {
				props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return (
				el( 'div', { className: props.className },
					el( blocks.Editable, {
						tagName: 'h2',
						inline: true,
						placeholder: i18n.__( 'Write Recipe title…' ),
						value: attributes.title,
						onChange: function( value ) {
							props.setAttributes( { title: value } );
						},
						focus: focusedEditable === 'title' ? focus : null,
						onFocus: function( focus ) {
							props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
						},
					} ),
					el( 'div', { className: 'recipe-image' },
						el( blocks.MediaUploadButton, {
							buttonProps: {
								className: attributes.mediaID
									? 'image-button'
									: 'components-button button button-large',
							},
							onSelect: onSelectImage,
							type: 'image',
							value: attributes.mediaID,
						},
							attributes.mediaID
								? el( 'img', { src: attributes.mediaURL } )
								: 'Upload Image'
						),
					),
					el( 'h3', {}, i18n.__( 'Ingredients' ) ),
					el( blocks.Editable, {
						tagName: 'ul',
						multiline: 'li',
						placeholder: i18n.__( 'Write a list of ingredients…' ),
						value: attributes.ingredients,
						onChange: function( value ) {
							props.setAttributes( { ingredients: value } );
						},
						focus: focusedEditable === 'ingredients' ? focus : null,
						onFocus: function( focus ) {
							props.setFocus( _.extend( {}, focus, { editable: 'ingredients' } ) );
						},
						className: 'ingredients',
					} ),
					el( 'h3', {}, i18n.__( 'Instructions' ) ),
					el( blocks.Editable, {
						tagName: 'div',
						inline: false,
						placeholder: i18n.__( 'Write instructions…' ),
						value: attributes.instructions,
						onChange: function( value ) {
							props.setAttributes( { instructions: value } );
						},
						focus: focusedEditable === 'instructions' ? focus : null,
						onFocus: function( focus ) {
							props.setFocus( _.extend( {}, focus, { editable: 'instructions' } ) );
						},
					} ),
				)
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return (
				el( 'div', { className: props.className },
					el( 'h2', {}, attributes.title ),
					attributes.mediaURL &&
						el( 'div', { className: 'recipe-image' },
							el( 'img', { src: attributes.mediaURL } ),
						),
					el( 'h3', {}, i18n.__( 'Ingredients' ) ),
					el( 'ul', { className: 'ingredients' }, attributes.ingredients ),
					el( 'h3', {}, i18n.__( 'Instructions' ) ),
					el( 'div', { className: 'steps' }, attributes.instructions ),
				)
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
	window._,
);
