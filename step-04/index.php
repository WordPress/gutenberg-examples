<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_boilerplate_es5__step04__enqueue_block_editor_assets' );

function gutenberg_boilerplate_es5__step04__enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-boilerplate-es5-step04',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step04-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_boilerplate_es5__step04__enqueue_block_assets' );

function gutenberg_boilerplate_es5__step04__enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-boilerplate-es5-step04',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
