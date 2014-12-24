    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.slideup').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight() * .2;
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if(bottom_of_window > bottom_of_object){
                //if ($(this).css('opacity') == '.1') {
                    $(this).animate(
                        {'opacity':'1',
                        'margin-top':'0'}
                        ,500, "easeOutCubic");
                //}
                    
            }
            
        }); 
    
    });