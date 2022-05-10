<?php
/**
 * Plugin Name: Gutenberg Examples
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;


require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/01-basic/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/01-basic-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/02-stylesheets/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/03-editable/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/03-editable-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/04-controls/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/04-controls-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/05-recipe-card/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/05-recipe-card-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/06-inner-blocks/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/06-inner-blocks-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'build/non-block-examples/07-slotfills-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/08-block-supports-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'build/non-block-examples/09-code-data-basics-esnext/index.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/10-dynamic-block/index.php';
require plugin_dir_path( __FILE__ ) . 'build/non-block-examples/format-api/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks-non-jsx/plugin-sidebar/plugin-sidebar.php';
require plugin_dir_path( __FILE__ ) . 'build/blocks-jsx/meta-block/index.php';
