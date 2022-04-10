$('.benphai').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});


const listimg=document.querySelectorAll('.wrap-listslider .img');
const popup=document.querySelector('.wrap-popupslider')
const imgpopup=document.querySelector('.wrap-img-box img')
const closepop=document.querySelector('.wrap-img-box .close')
const btnprev=document.querySelector('.prev')
const btnnext=document.querySelector('.next')

window.onload=()=>{
    for(let i=0;i<listimg.length;i++){ 

      listimg[i].onclick=()=>{
        function suaanh(){
          console.log(i)
           imgpopup.src=listimg[i].querySelector('img').src
           popup.classList.remove('an')
           popup.classList.add('hien')
         }
        suaanh()
           btnnext.onclick=()=>{
              i++;
              if(i>listimg.length-1){
                i=0;
                   suaanh(); 
              }
              suaanh();
           }
           btnprev.onclick=()=>{
                i--;
                if(i<0){
                     i=listimg.length-1;
                    suaanh();
                   }
              suaanh();
             
        
           }
           closepop.onclick=()=>{
             popup.classList.remove('hien')
             popup.classList.add('an')
             onload();

          }
           
      }

    }

}