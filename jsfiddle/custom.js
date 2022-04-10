var oba=$('.slider1 img');
var oba1=$('.slider1');
var index=0;

$('.next').click(function(){
		if(index==oba.length-1){
    	index=0;	
    }
    else{
    	index++
    }
    oba1.css('margin-left',-320*index)
    
})
$('.prev').click(function(){
		
    if(index==0){
    	index=oba.length-1
    }
    else{
    	index--;
    }
    oba1.css('margin-left',-320*index)
    
})


var count=$('.at').text();
window.setTimeout(function () {
$('.next').click()
}, 2000);


$('.at').each(function () {
    $(this).prop('Counter',0).animate(
    {
        Counter: $(this).text()
    }, 
    {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/*window.setTimeout(function () {

	for(var i=1;i<300;i++){
  	$('.at').text(count++);
  }
}, 7000);*/
