<?php
/**
 * Plugin Name: Gutenberg Examples Format API
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to use Format API in the Gutenberg editor.
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
add_action( 'init', function() {
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'index.asset.php';

	wp_register_script(
		'gutenberg-examples-format-api',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
} );

/**
 * Enqueue block editor assets for this example.
 */
add_action(
	'enqueue_block_editor_assets',
	function() {
		wp_enqueue_script( 'gutenberg-examples-format-api' );
	}
);
