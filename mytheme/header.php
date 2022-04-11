<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	 <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <title><?php wp_title(); ?></title>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
        <?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
        <?php wp_head(); ?>
	 
	 <link
   			 rel="stylesheet"
    			type="text/css"
    			href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
  		/>

	

</head>
<body>
	
	<div class="wrapper">
		<div class="container">
			<div class="header">
					<div class="header-left">
						<img class="logo" src="./img/logo.png" >
					</div>
					<div class="header-center">
							<ul class="main-menu">
								<?php wp_nav_menu( array( 'theme_location' => 'main-menu') ); ?>
							</ul>
					</div>
					<div class="header-right">
						<a class="header-btnin" href=#>Sign In</a>
						<a class="header-btnup" href=#>Sign Up</a>
					</div>

					

			</div>