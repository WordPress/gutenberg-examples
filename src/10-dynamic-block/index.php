<?php
/**
 * Plugin Name: Gutenberg Examples Dynamic Block
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_dynamic_block_block_init() {

	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'gutenberg_examples_dynamic_block_render_callback',
		)
	);
}
add_action( 'init', 'gutenberg_examples_dynamic_block_block_init' );


/**
 * This function is called when the block is being rendered on the front end of the site
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
 */
function gutenberg_examples_dynamic_block_render_callback( $attributes, $content, $block_instance ) {
	ob_start();
	/**
	 * Keeping the markup to be returned in a separate file is sometimes better, especially if there is very complicated markup.
	 * All of passed parameters are still accessible in the file.
	 */
	require plugin_dir_path( __FILE__ ) . 'template.php';
	return ob_get_clean();
}
