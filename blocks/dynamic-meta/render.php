<?php
/**
 * Render callback for the dynamic block with meta.
 *
 * @package Bloxample
 */

( function () {

	$bloxample_dynamic_meta = get_post_meta( get_the_ID(), 'bloxample_dynamic_meta', true );
	$posts_count            = wp_count_posts( 'post' );

	echo '<div class="sivu-block-dynamic-meta">';
	echo '<h2>' . esc_html__( 'Dynamic Block with Meta', 'bloxample' ) . '</h2>';
	echo '<p>' . esc_html( $bloxample_dynamic_meta ) . '</p>';
	echo '<p>' . esc_html__( 'Published posts: ', 'bloxample' ) . esc_html( $posts_count->publish ) . '</p>';
	echo '</div>';
} )();
