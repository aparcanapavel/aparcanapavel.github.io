$(document).ready(function() {
    
    $('input').click(function(){
        // $('.page-menu').css({
        //  display: 'block',
        //     width: '120px'
        // })
        $('.page-menu').toggle(500);
    });
});

// page menu hovers
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
//SECTION BOXES.
//resume
$('.section-box:nth-child(1)').mouseover(function()
{
	$('.section-box:nth-child(1) > a').css({'border-bottom': 'solid black', 'transition' : '1s'});
});
//return after mouse is not hovering.
$('.section-box').mouseout(function(){
	$('.section-box:nth-child(1) > a').css({'border-bottom': 'solid transparent', 'transition' : '1.2s'});
	$('.section-box:nth-child(2) > a').css({'border-bottom': 'solid transparent', 'transition' : '1.2s'});
	$('.section-box:nth-child(3) > a').css({'border-bottom': 'solid transparent', 'transition' : '1.2s'});
	$('.section-box:nth-child(4) > a').css({'border-bottom': 'solid transparent', 'transition' : '1.2s'});
});
//skills & certificates
$('.section-box:nth-child(2)').mouseover(function()
{
	$('.section-box:nth-child(2) > a').css({'border-bottom': 'solid white', 'transition' : '1s'});
});
//professional experience
$('.section-box:nth-child(3)').mouseover(function()
{
	$('.section-box:nth-child(3) > a').css({'border-bottom': 'solid white', 'transition' : '1s'});
});
//volunteer wo0rk
$('.section-box:nth-child(4)').mouseover(function()
{
	$('.section-box:nth-child(4) > a').css({'border-bottom': 'solid black', 'transition' : '1s'});
});
// first slideshow
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("skillSlide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); // Change image every 2.5 seconds
}

// second slideshpw
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slidePic");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// smooth scrolling
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	},50 );
});

