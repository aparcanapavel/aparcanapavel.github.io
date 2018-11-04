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

$(document).ready(function() {
    
    $('input').click(function(){
        // $('.page-menu').css({
        //  display: 'block',
        //     width: '120px'
        // })
        $('.page-menu').toggle(500);
    });
});