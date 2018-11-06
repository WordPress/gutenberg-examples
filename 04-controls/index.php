<?php

/**
 * Plugin Name: Gutenberg Examples Controls
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
add_action( 'init', 'gutenberg_examples_04_load_textdomain' );

function gutenberg_examples_04_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_04_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-examples-04',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_register_style(
		'gutenberg-examples-04-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'gutenberg-examples-04',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'gutenberg-examples/example-04-controls', array(
		'style' => 'gutenberg-examples-04',
		'editor_style' => 'gutenberg-examples-04-editor',
		'editor_script' => 'gutenberg-examples-04',
	) );

	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's tooeditorlate.
	 */
	wp_add_inline_script(
		'gutenberg-examples-04',
		sprintf(
			'var gutenberg_examples_04 = { localeData: %s };',
			json_encode( ! function_exists( 'wp_get_jed_locale_data' ) ? gutenberg_get_jed_locale_data( 'gutenberg-examples' ) : wp_get_jed_locale_data( 'gutenberg-examples' ) )
		),
		'before'
	);

}
add_action( 'init', 'gutenberg_examples_04_register_block' );