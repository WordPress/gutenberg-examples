<?php
/**
 * Plugin Name: Gutenberg Examples Custom Fill
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to render a "Fill" for a custom "Slot" in the Gutenberg editor.
 * Version: 1.0.0
 * Author: the Gutenberg Team
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/components/slot-fill/
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_custom_fill_register_dependencies() {
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'index.asset.php';

	wp_register_script(
		'gutenberg-examples-custom-fill',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'init', 'gutenberg_examples_custom_fill_register_dependencies' );

/**
 * Enqueue block editor assets for this example.
 */
function gutenberg_examples_custom_fill_enqueue_assets() {
	wp_enqueue_script( 'gutenberg-examples-custom-fill' );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_custom_fill_enqueue_assets' );
