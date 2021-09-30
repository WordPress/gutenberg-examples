<?php
/**
 * Plugin Name: Gutenberg Examples SlotFills ESNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to use SlotFills in the Gutenberg editor.
 * Version: 1.0.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_07_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version.
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-07-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	register_block_type(
		'gutenberg-examples/example-07-esnext',
		[
			'editor_script' => 'gutenberg-examples-07-esnext',
		]
	);

	// Register the post meta field the meta box will save to.
	register_post_meta(
		'post',
		'example_meta_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'gutenberg_examples_07_esnext_register_block' );
