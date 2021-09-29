! ( function() {
	'use strict';
	var e = {
		d( t, o ) {
			for ( const n in o )
				e.o( o, n ) &&
					! e.o( t, n ) &&
					Object.defineProperty( t, n, {
						enumerable: ! 0,
						get: o[ n ],
					} );
		},
		o( e, t ) {
			return Object.prototype.hasOwnProperty.call( e, t );
		},
	};
	! ( function( e, t, o ) {
		o.d( t, {
			l() {
				return s;
			},
		} );
		const n = window.wp.blocks,
			r = JSON.parse(
				'{"apiVersion":2,"name":"gutenberg-examples/example-01-basic-esnext","title":"Example: Basic (ESNext)","textdomain":"gutenberg-examples","icon":"universal-access-alt","category":"layout","example":{},"editorScript":"file:./build/index.js"}'
			),
			l = window.wp.element,
			i = window.wp.i18n,
			a = window.wp.blockEditor;
		const s = { backgroundColor: '#900', color: '#fff', padding: '20px' },
			{ name: c, ...p } = r;
		( 0, n.registerBlockType )( c, {
			...p,
			edit: () => {
				const e = ( 0, a.useBlockProps )( { style: s } );
				return ( 0, l.createElement )(
					'div',
					e,
					( 0, i.__ )(
						'Hello World, step 1 (from the editor).',
						'gutenberg-examples'
					)
				);
			},
			save: () => {
				const e = a.useBlockProps.save( { style: s } );
				return ( 0, l.createElement )(
					'div',
					e,
					( 0, i.__ )(
						'Hello World, step 1 (from the frontend).',
						'gutenberg-examples'
					)
				);
			},
		} );
	} )( 0, {}, e );
} )();
