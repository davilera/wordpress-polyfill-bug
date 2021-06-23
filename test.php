<?php
/**
 * Plugin Name: Test
 * Version:     1.0.0
 * Author:      David
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}//end if

add_action( 'admin_enqueue_scripts', function() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );
	$dir = untrailingslashit( plugin_dir_path( __FILE__ ) );
	$asset = include "{$dir}/dist/main.asset.php";

	wp_enqueue_script( 'nab-components' );

	wp_enqueue_script(
		'nelio-test',
		"{$url}/dist/main.js",
		$asset['dependencies'],
		$asset['version']
	);
} );
