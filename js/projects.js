if($(window).width() >= 551){
    $('.menu > .page-menu > li:nth-child(1)').mouseover(function()
    {
    	$('.menu > .page-menu > li:nth-child(1)').css({'background-color': 'rgba(0,0,0,0.8)', 'transition' : '1s'});
    	$('.menu > .page-menu > li:nth-child(1) > a').css({'color': 'white', 'transition' : '1s'});
    });
    $('.menu > .page-menu > li:nth-child(2)').mouseover(function()
    {
        $('.menu > .page-menu > li:nth-child(2)').css({'background-color': 'rgba(0,0,0,0.8)', 'transition' : '1s'});
        $('.menu > .page-menu > li:nth-child(2) > a').css({'color': 'white', 'transition' : '1s'});
    });
    $('.menu > .page-menu > li:nth-child(3)').mouseover(function()
    {
        $('.menu > .page-menu > li:nth-child(3)').css({'background-color': 'rgba(0,0,0,0.8)', 'transition' : '1s'});
        $('.menu > .page-menu > li:nth-child(3) > a').css({'color': 'white', 'transition' : '1s'});
    });
    $('.menu > .page-menu > li:nth-child(4)').mouseover(function()
    {
        $('.menu > .page-menu > li:nth-child(4)').css({'background-color': 'rgba(0,0,0,0.8)', 'transition' : '1s'});
        $('.menu > .page-menu > li:nth-child(4) > a').css({'color': 'white', 'transition' : '1s'});
    });
    $('.menu > .page-menu > li:nth-child(5)').mouseover(function()
    {
        $('.menu > .page-menu > li:nth-child(5)').css({'background-color': 'rgba(0,0,0,0.8)', 'transition' : '1s'});
        $('.menu > .page-menu > li:nth-child(5) > a').css({'color': 'white', 'transition' : '1s'});
    });
    $('.menu > .page-menu').mouseout(function()
    {
        //home
        $('.menu > .page-menu > li:nth-child(1)').css({'background-color': 'white', 'transition' : '1.3s'});
        $('.menu > .page-menu > li:nth-child(1) > a').css({'color': 'black', 'transition' : '1.3s'});
        //experience
        $('.menu > .page-menu > li:nth-child(2)').css({'background-color': 'white', 'transition' : '1.3s'});
        $('.menu > .page-menu > li:nth-child(2) > a').css({'color': 'black', 'transition' : '1.3s'});
        //Interests
        $('.menu > .page-menu > li:nth-child(3)').css({'background-color': 'white', 'transition' : '1.3s'});
        $('.menu > .page-menu > li:nth-child(3) > a').css({'color': 'black', 'transition' : '1.3s'});
        //Projects
        $('.menu > .page-menu > li:nth-child(4)').css({'background-color': 'white', 'transition' : '1.3s'});
        $('.menu > .page-menu > li:nth-child(4) > a').css({'color': 'black', 'transition' : '1.3s'});
        //Contact
        $('.menu > .page-menu > li:nth-child(5)').css({'background-color': 'white', 'transition' : '1.3s'});
        $('.menu > .page-menu > li:nth-child(5) > a').css({'color': 'black', 'transition' : '1.3s'});
    });
}
// section boxes
// passion project
$('.section-box:nth-child(1)').mouseover(function()
{
    $('.section-box:nth-child(1)').css({'background-color': 'white', 'transition' : '1s'});
    $('.section-box:nth-child(1) > div').css({'color': 'black'});
});
//return after mouse is not hovering.
$('.section-box:nth-child(1)').mouseout(function(){
  $('.section-box:nth-child(1)').css({'background-color': 'rgba(22,129,174,1)', 'transition' : '1.2s'});
  $('.section-box:nth-child(1) > div').css({'color': 'white'});
});
// rise of fake news
$('.section-box:nth-child(2)').mouseover(function()
{
    $('.section-box:nth-child(2)').css({'background-color': 'white', 'transition' : '1s'});
    $('.section-box:nth-child(2) > div').css({'color': 'black'});
});
//return after mouse is not hovering.
$('.section-box:nth-child(2)').mouseout(function(){
  $('.section-box:nth-child(2)').css({'background-color': 'rgba(22,129,174,0.5)', 'transition' : '1.2s'});
  $('.section-box:nth-child(2) > div').css({'color': 'white'});
});
// rise of fake news
$('.section-box:nth-child(3)').mouseover(function()
{
    $('.section-box:nth-child(3)').css({'background-color': 'white', 'transition' : '1s'});
    $('.section-box:nth-child(3) > div').css({'color': 'black'});
});
//return after mouse is not hovering.
$('.section-box:nth-child(3)').mouseout(function(){
  $('.section-box:nth-child(3)').css({'background-color': 'rgb(72,91,109)', 'transition' : '1.2s'});
  $('.section-box:nth-child(3) > div').css({'color': 'white'});
});


$(document).ready(function() {
    
    $('input').click(function(){
        $('.page-menu').toggle(500);
    });
});
// add if statement about the height when using smaller screens and making the fade
// work
if($(window).height() >= 900){
    if($(window).width() >= 551){
        $(window).on("load",function() {
          $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + ($(this).innerHeight()*1.25);
            $(".module").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });
    }
}
else if($(window).height() >= 700){
    if($(window).width() >= 551){
        $(window).on("load",function() {
          $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + ($(this).innerHeight()*1.75);
            $(".module").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });
    }
}
else if($(window).height() >= 600){
    if($(window).width() >= 551){
        $(window).on("load",function() {
          $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + ($(this).innerHeight()*2);
            $(".module").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });
    }
}
