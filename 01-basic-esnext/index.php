<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_01_esnext_enqueue_block_editor_assets' );

function gutenberg_examples_01_esnext_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);
}
