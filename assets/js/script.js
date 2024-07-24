let btn1=document.querySelector(".exp-menu .btn1");
let btn2=document.querySelector(".exp-menu .btn2");
let hideeduc=document.querySelectorAll(".hide-educ")

document.querySelector(".btn2").onclick=function(){
    for(i=0; i<hideeduc.length; i++){
        hideeduc[i].classList.add('hideediuc')
       }
       for(i=0; i<dataexp.length; i++){
        dataexp[i].classList.remove('hide-exper')
       }
       btn2.classList.add("active");
       btn1.classList.remove('active')
}
let dataexp=document.querySelectorAll('.hide-exper')
document.querySelector('.btn1').onclick=function(){
    for(i=0; i<hideeduc.length; i++){
        hideeduc[i].classList.remove('hideediuc')
       }
    for(i=0; i<dataexp.length; i++){
        dataexp[i].classList.add('hide-exper')
       }
       btn2.classList.remove("active");
       btn1.classList.add('active')
}


///////////////////////////////////.owl-carousel....//////////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
// ////////////////////////////////... Toggle....///////////

let hamb=document.querySelector(".fa-bars");
let cros=document.querySelector('.fa-times')
hamb.onclick=function(){
    let uldata=document.querySelector(".main-ul");
    
    uldata.classList.toggle('show-slide')

    console.log(uldata)
}
cros.onclick=function(){
    let uldata=document.querySelector(".main-ul");
    uldata.classList.remove('show-slide')
}

// /////////////////////..scroll-top......///////////
$(window).scroll(function(){
	let scroll=$(window).scrollTop();
	if(scroll>200){
		$('.scroll-top').fadeIn();
	}
	else{
		$('.scroll-top').fadeOut();
	}

})
$(document).ready(function(){
    $('.scroll-top').click(function(){
        $(window).scrollTop(0);
    })
})

AOS.init({
    disable: function() {
      var maxWidth = 600;
      return window.innerWidth < maxWidth;
    }
  });

