<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_03_esnext_enqueue_block_editor_assets' );

function gutenberg_examples_03_esnext_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-examples-03_esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	wp_enqueue_style(
		'gutenberg-examples-03_esnext-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_examples_03_esnext_enqueue_block_assets' );

function gutenberg_examples_03_esnext_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-examples-03_esnext',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
