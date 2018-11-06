<?php

/**
 * Plugin Name: Gutenberg Examples Recipe Card EsNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.0.2
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'gutenberg_examples_05_esnext_load_textdomain' );

function gutenberg_examples_05_esnext_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_05_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-examples-05-esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	wp_register_style(
		'gutenberg-examples-05-esnext',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'gutenberg-examples/example-05-recipe-card-esnext', array(
		'style' => 'gutenberg-examples-05-esnext',
		'editor_script' => 'gutenberg-examples-05-esnext',
	) );

	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's too late.
	 */
	wp_add_inline_script(
		'gutenberg-examples-05-esnext',
		sprintf(
			'var gutenberg_examples_05_esnext = { localeData: %s };',
			json_encode( ! function_exists( 'wp_get_jed_locale_data' ) ? gutenberg_get_jed_locale_data( 'gutenberg-examples' ) : wp_get_jed_locale_data( 'gutenberg-examples' ) )
		),
		'before'
	);

}
add_action( 'init', 'gutenberg_examples_05_esnext_register_block' );