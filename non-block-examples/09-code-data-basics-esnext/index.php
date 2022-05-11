<?php
/**
 * Plugin Name: My first Gutenberg App
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to use nested and inner blocks in the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

/**
 * Create a new admin page.
 */
function my_admin_menu() {
	// Create a new admin page for our app.
	add_menu_page(
		__( 'My first Gutenberg app', 'gutenberg' ),
		__( 'My first Gutenberg app', 'gutenberg' ),
		'manage_options',
		'my-first-gutenberg-app',
		function () {
			echo '
			<h2>Pages</h2>
			<div id="my-first-gutenberg-app"></div>
		';
		},
		'dashicons-schedule',
		3
	);
}
add_action( 'admin_menu', 'my_admin_menu' );

/**
 * Enqueue admin assets for this example.
 *
 * @param string $hook The current admin page.
 */
function load_custom_wp_admin_scripts( $hook ) {
	// Load only on ?page=my-first-gutenberg-app.
	if ( 'toplevel_page_my-first-gutenberg-app' !== $hook ) {
		return;
	}

	// Load the required WordPress packages.

	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'index.asset.php';

	// Enqueue CSS dependencies.
	foreach ( $asset_file['dependencies'] as $style ) {
		wp_enqueue_style( $style );
	}

	// Load our app.js.
	wp_register_script(
		'09-code-data-basics-esnext',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true,
	);
	wp_enqueue_script( '09-code-data-basics-esnext' );

	// Load our style.css.
	wp_register_style(
		'09-code-data-basics-esnext',
		plugins_url( 'style.css', __FILE__ ),
		null,
		$asset_file['version'],
	);
	wp_enqueue_style( '09-code-data-basics-esnext' );
}
add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_scripts' );
