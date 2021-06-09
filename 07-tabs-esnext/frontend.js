( function( $ ) {
	function setActiveTab( $el ) {
		const tabId = $el.attr( 'data-tab-id' );
		$el.siblings().removeClass(
			'wp-block-gutenberg-examples-example-07-tabs-esnext__tab--active'
		);
		$el.addClass(
			'wp-block-gutenberg-examples-example-07-tabs-esnext__tab--active'
		);
		$el.parent()
			.siblings( '.wp-block-gutenberg-examples-example-07-tab-esnext' )
			.each( function() {
				const $tab = $( this );
				if ( $tab.attr( 'data-tab-id' ) === tabId ) {
					$tab.css( 'display', 'block' );
				} else {
					$tab.css( 'display', 'none' );
				}
			} );
	}

	$( '.wp-block-gutenberg-examples-example-07-tabs-esnext__tab' ).click(
		function() {
			const $el = $( this );
			setActiveTab( $el );
		}
	);

	$( '.wp-block-gutenberg-examples-example-07-tabs-esnext__tabs' ).each(
		function() {
			const $firstTab = $( this )
				.children()
				.first();
			if ( $firstTab ) {
				setActiveTab( $firstTab );
			}
		}
	);
} )( jQuery ); // eslint-disable-line no-undef
