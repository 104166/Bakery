/*jQuery(document).ready(function( $ ) {    

$('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
      
      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });
}
$("#banner .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });*/


$(window).on('load', function() {
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });

    
  /*  $(document).ready(function() {
   window.setTimeout("#preloader", 3000); //call fade in 3 seconds
 }
)

function fadeMyDiv() {
   $("#preloader").fadeOut('slow');
}*/