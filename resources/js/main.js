$(document).ready(function () {

  //carousel gallery in jumbotron

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 4000
   });

   //Navbar animation
   
   var scrolled = 0;

   $(window).scroll(function (){

     var x = $(this).scrollTop();

     if (x - scrolled > 50) {
       var navHeight = $('.navbar').css('height');
       $('.navbar').animate({top: '-' + navHeight}, 150);
       scrolled = x;
       console.log(scrolled);
     }
     else if (scrolled - x > 50) {
       $('.navbar').animate({top: 0}, 150);
       scrolled = x;
       console.log(scrolled);
     }

   });

});
