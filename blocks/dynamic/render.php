<?php
/**
 * Render callback for the dynamic block.
 *
 * @package Bloxample
 */

( function ( $attributes ) {

	$posts_count = wp_count_posts( 'post' );

	echo '<div class="sivu-block sivu-block-dynamic">';
	echo '<h2>' . esc_html__( 'Dynamic Block', 'bloxample' ) . '</h2>';
	echo '<p>' . esc_html( $attributes['content'] ) . '</p>';
	echo '<p>' . esc_html__( 'Published posts: ', 'bloxample' ) . esc_html( $posts_count->publish ) . '</p>';
	echo '</div>';
} )( $attributes );
