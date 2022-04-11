$(window).on('scroll', function() {  		
		 var window_top= $(this).scrollTop();
		 var footer_top = $("#footer").offset().top;
   		 var div_top = $('.page-content').offset().top;
    	 var div_height = $(".sidebar-content").height();
   	     
   	    if (window_top + div_height > footer_top)
        			$(".sidebar-content").css({top: (window_top + div_height - footer_top) * -1})
    	else if (window_top > div_top) {
        			$(".sidebar-content").addClass('stick');
        			$(".sidebar-content").css({top: 0})
    	} else {
        		$('.sidebar-content').removeClass('stick');
        	}
    })