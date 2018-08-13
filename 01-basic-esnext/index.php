<?php

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'gutenberg_examples_01_esnext_load_textdomain' );

function gutenberg_examples_01_esnext_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_01_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
		'script' => 'gutenberg-examples-01-esnext',
	) );

	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's too late.
	 */
	wp_add_inline_script(
		'gutenberg-examples-01-esnext',
		sprintf( 
			'var gutenberg_examples_01_esnext = { localeData: %s };', 
			json_encode( gutenberg_get_jed_locale_data( 'gutenberg-examples' ) ) 
		),
		'before'
	);

} 
add_action( 'init', 'gutenberg_examples_01_esnext_register_block' );