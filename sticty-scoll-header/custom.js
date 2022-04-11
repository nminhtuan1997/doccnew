var curent=0;
	$(window).on('scroll', function() {  		
		 var window= $(this).scrollTop();
		 if(window>curent){
			 $('.header-main').addClass('mora')
			 $('.header-main').removeClass('andi')
			 curent=window;
		 }
		 if(window<curent){
			  $('.header-main').removeClass('mora')
			  $('.header-main').addClass('andi')
			  curent=window;
		 }
});