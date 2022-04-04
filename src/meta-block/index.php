<?php
/**
 * Plugin Name:       meta-block
 * Description:       An example block viewing and saving post meta.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       myguten-meta-block
 *
 * @package           myguten
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function myguten_myguten_meta_block_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'myguten_myguten_meta_block_block_init' );

/**
 * Register custom post meta field.
 */
function myguten_register_post_meta() {
	register_post_meta(
		'post',
		'myguten_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'myguten_register_post_meta' );
