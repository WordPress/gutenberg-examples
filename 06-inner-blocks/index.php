<?php

/**
 * Plugin Name: Gutenberg Examples Inner Blocks
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to use nested and inner blocks in the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_06_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-examples-06',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-block-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ),
		true
	);

	register_block_type(
		'gutenberg-examples/example-06',
		[
			'editor_script' => 'gutenberg-examples-06',
		]
	);

}
add_action( 'init', 'gutenberg_examples_06_register_block' );
