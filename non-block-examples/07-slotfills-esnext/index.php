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
function gutenberg_examples_07_esnext_register_dependencies() {
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'index.asset.php';

	wp_register_script(
		'gutenberg-examples-07-esnext',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
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
add_action( 'init', 'gutenberg_examples_07_esnext_register_dependencies' );

/**
 * Enqueue block editor assets for this example.
 */
function gutenberg_examples_07_esnext_enqueue_assets() {
	wp_enqueue_script( 'gutenberg-examples-07-esnext' );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_07_esnext_enqueue_assets' );
