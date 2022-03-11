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
	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ );
}
add_action( 'init', 'gutenberg_examples_06_register_block' );
