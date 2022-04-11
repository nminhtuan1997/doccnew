<?php 

//doi thanh ten theme (mytheme) va goi css va script
function mytheme_enqueue_style() {
    wp_enqueue_style( 'my-theme', get_template_directory_uri().'/style.css', false );
}
 
function mytheme_enqueue_script() {
    wp_enqueue_script( 'my-js', get_template_directory_uri().'/custom/app.js', false );
}
 
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_script' );
//////////////////////

function register_my_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
      'extra-menu' => __( 'Extra Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );



?>