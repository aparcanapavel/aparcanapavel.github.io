$('.welcomeStatement > p').delay(100).animate({'opacity':'1'},4000);
$('.aboutMe > h2, .aboutMe > p').delay(100).animate({'opacity':'1'},2000);

//the next 21 lines of code are partially borrowed from Anna Larson's Element Fade in on Scoll.
//https://codepen.io/annalarson/pen/GesqK
$(document).ready(function() {
    
    $('input').click(function(){
    	// $('.page-menu').css({
    	// 	display: 'block',
	    //     width: '120px'
    	// })
        $('.page-menu').toggle(500);
    });

    $(window).scroll( function(){
    
        $('.pages > .page-box').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $('.page-box:nth-child(1)').animate({'opacity':'1'},1500);
                $('.page-box:nth-child(2)').delay(600).animate({'opacity':'1'},1500);
                $('.page-box:nth-child(3)').delay(900).animate({'opacity':'1'},1500);
                $('.page-box:nth-child(4)').delay(1200).animate({'opacity':'1'},1500);                    
            }
            
        }); 
    
    });
    // Experience Panel
    $('.page-box:nth-child(1)').mouseover(function(){
        $('.page-box:nth-child(1)').css({'background-color': 'white', 'transition' : '1s'});
        $('.page-box:nth-child(1) > a').css({'border': 'solid black', 'transition' : '1s'});
    });
    $('.pages > .page-box').mouseout(function(){
        $('.page-box:nth-child(1)').css("background-color", "rgba(0,0,0,0.25)");
         $('.page-box:nth-child(1) > a').css({'border': 'solid transparent', 'transition' : '1.2s'});        
        $('.page-box:nth-child(2)').css("background-color", "rgba(22,129,174,1)");
         $('.page-box:nth-child(2) > a').css({'border': 'solid transparent', 'transition' : '1.2s'});
        $('.page-box:nth-child(3)').css("background-color", "rgba(22,129,174,0.5)");
         $('.page-box:nth-child(3) > a').css({'border': 'solid transparent', 'transition' : '1.2s'});
        $('.page-box:nth-child(4)').css("background-color", "rgba(0,0,0,0.1)");
         $('.page-box:nth-child(4) > a').css({'border': 'solid transparent', 'transition' : '1.2s'});
    });
    // Interests Panel
    $('.page-box:nth-child(2)').mouseover(function(){
        $('.page-box:nth-child(2)').css({'background-color': 'white', 'transition' : '1.2s'});
        $('.page-box:nth-child(2) > a').css({'border': 'solid black', 'transition' : '1s'}); 	
    });
    //PROJECTS PANEL
    $('.page-box:nth-child(3)').mouseover(function(){
        $('.page-box:nth-child(3)').css({'background-color': 'white', 'transition' : '1.2s'});
        $('.page-box:nth-child(3) > a').css({'border': 'solid black', 'transition' : '1s'});
  	});
    // Contact Panel
    $('.page-box:nth-child(4)').mouseover(function(){
        $('.page-box:nth-child(4)').css({'background-color': 'white', 'transition' : '1s'});
        $('.page-box:nth-child(4 ) > a').css({'border': 'solid black', 'transition' : '1s'});
 	});

    
});
