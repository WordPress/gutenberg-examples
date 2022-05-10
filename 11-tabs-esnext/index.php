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

add_action( 'init', 'gutenberg_examples_11_esnext_register_block' );
add_action( 'init', 'gutenberg_examples_11_esnext_enqueue_scripts' );
add_filter( 'render_block', 'gutenberg_examples_11_esnext_enqueue_conditionally', 10, 2 );
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_11_esnext_register_block() {
	register_block_type( __DIR__ . '/build' );
}

/**
 * Registers frontend JavaScript allowing the tabs
 * to function.
 */
function gutenberg_examples_11_esnext_enqueue_scripts() {
	wp_register_script(
		'gutenberg-examples-11-esnext-frontend',
		plugins_url( 'tabs-frontend.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/tabs-frontend.js' ),
		true
	);
}

/**
 * Registers frontend JavaScript allowing the tabs
 * to function.
 */
function gutenberg_examples_11_esnext_enqueue_conditionally( $block_content, $block ) {
	if ( 'gutenberg-examples/example-11-tabs-esnext' === $block['blockName'] ) {
		wp_enqueue_script( 'gutenberg-examples-11-esnext-frontend' );
	}
	return $block_content;
}

