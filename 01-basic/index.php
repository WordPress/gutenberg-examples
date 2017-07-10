<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_boilerplate_es5__step01__enqueue_block_editor_assets' );

function gutenberg_boilerplate_es5__step01__enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-boilerplate-es5-step01',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}
