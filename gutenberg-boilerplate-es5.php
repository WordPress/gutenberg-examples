<?php
/**
 * Plugin Name: Gutenberg Boilerplate (ES5)
 * Plugin URI: https://github.com/WordPress/gutenberg-boilerplate
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor without a Webpack build process.
 * Version: 0.1.0
 * Author: Gutenberg Team
 *
 * @package gutenberg-boilerplate
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

/**
 * Registers block scripts and styles for the editing interface.
 *
 * @since 0.1.0
 */
function gutenberg_boilerplate_es5_enqueue_editor_assets() {
	// Block scripts for the editor.
	wp_enqueue_script(
		'gutenberg-boilerplate-es5-step01',
		plugins_url( 'step-01/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-01/block.js' )
	);
	wp_enqueue_script(
		'gutenberg-boilerplate-es5-step02',
		plugins_url( 'step-02/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-02/block.js' )
	);
	wp_enqueue_script(
		'gutenberg-boilerplate-es5-step03',
		plugins_url( 'step-03/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-03/block.js' )
	);

	// Block styles for the editor.
	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step02-editor',
		plugins_url( 'step-02/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-02/editor.css' )
	);
	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step03-editor',
		plugins_url( 'step-03/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-03/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_boilerplate_es5_enqueue_editor_assets' );

/**
 * Registers block styles common to the editor and the frontend.
 *
 * @since 0.1.0
 */
function gutenberg_boilerplate_es5_enqueue_common_assets() {
	// Block styles common to the editor and the frontend.
	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step02',
		plugins_url( 'step-02/style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-02/style.css' )
	);
	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step03',
		plugins_url( 'step-03/style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'step-03/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'gutenberg_boilerplate_es5_enqueue_common_assets' );
