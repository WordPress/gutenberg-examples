<?php

/**
 * Plugin Name: Gutenberg Example 11 Tabs ESNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to create tabs using the Gutenberg editor.
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
function gutenberg_examples_11_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'gutenberg-examples-11-esnext-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_register_style(
		'gutenberg-examples-11-esnext-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_script(
		'gutenberg-examples-11-esnext',
		plugins_url( 'frontend.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ),
		true
	);

	wp_register_style(
		'gutenberg-examples-11-esnext',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type(
		'gutenberg-examples/example-11-tabs-esnext',
		array(
			'editor_script' => 'gutenberg-examples-11-esnext-editor',
			'editor_style'  => 'gutenberg-examples-11-esnext-editor',
			'script'        => 'gutenberg-examples-11-esnext',
			'style'         => 'gutenberg-examples-11-esnext',
		)
	);

	register_block_type(
		'gutenberg-examples/example-11-tab-esnext',
		array(
			'editor_script' => 'gutenberg-examples-11-esnext-editor',
			'editor_style'  => 'gutenberg-examples-11-esnext-editor',
			'script'        => 'gutenberg-examples-11-esnext',
			'style'         => 'gutenberg-examples-11-esnext',
		)
	);

}
add_action( 'init', 'gutenberg_examples_11_esnext_register_block' );
