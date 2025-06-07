<?php
/**
 * Plugin Name: Bloxample
 * Description: A simple plugin to demonstrate how to create a custom block in WordPress without JSX and building process.
 * Version: 1.0.0
 *
 * @package Bloxample
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BLOXAMPLE_DIR', plugin_dir_path( __FILE__ ) );


/**
 * Register meta data for the dynamic block.
 */
function bloxample_register_meta() {
	register_meta(
		'post',
		'bloxample_dynamic_meta',
		array(
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
}
add_action( 'init', 'bloxample_register_meta' );


/**
 * Register block category for custom blocks.
 *
 * @param array $categories Array of block categories.
 * @return array
 */
function bloxample_block_category( $categories ) {
	$bloxample_category = array(
		'slug'  => 'bloxample',
		'title' => 'Bloxample',
	);

	// Insert the custom category at the beginning of the array.
	array_unshift( $categories, $bloxample_category );

	return $categories;
}
add_filter( 'block_categories_all', 'bloxample_block_category' );


/**
 * Register blocks.
 */
function bloxample_register_blocks() {

	register_block_type( BLOXAMPLE_DIR . 'blocks/basic' );
	register_block_type( BLOXAMPLE_DIR . 'blocks/dynamic' );
	register_block_type( BLOXAMPLE_DIR . 'blocks/dynamic-meta' );
}
add_action( 'init', 'bloxample_register_blocks' );
