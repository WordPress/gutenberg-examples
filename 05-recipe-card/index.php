<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_05_enqueue_block_editor_assets' );

function gutenberg_examples_05_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-examples-05',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_examples_05_enqueue_block_assets' );

function gutenberg_examples_05_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-examples-05',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
