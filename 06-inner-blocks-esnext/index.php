<?php

/**
 * Plugin Name: Gutenberg Examples Inner Blocks ESNext
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
function gutenberg_examples_06_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-06-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	register_block_type(
		'gutenberg-examples/example-06-esnext',
		[
			'editor_script' => 'gutenberg-examples-06-esnext',
		]
	);

}
add_action( 'init', 'gutenberg_examples_06_esnext_register_block' );
