$('.welcomeStatement > p').delay(100).animate({'opacity':'1'},4000);
$('.aboutMe > h2, .aboutMe > p').delay(100).animate({'opacity':'1'},2000);

// the next 21 lines of code are partially borrowed from Anna Larson's Element Fade in on Scoll.
//https://codepen.io/annalarson/pen/GesqK
$(document).ready(function() {
    
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
    
});