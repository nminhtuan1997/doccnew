jQuery('.clickct').click(function(){
		jQuery('html,body').animate({
			scrollTop:jQuery('#noidungct').offset().top-150
		},1000);
});