$( document ).ready(function() {
    $(document).on('scroll', function(){
        if($(document).scrollTop() > $('header').height()){
            $('nav').css('background-color', 'rgba(149, 225, 211, 0.9)');
            $('nav').css('border-bottom', '1px solid #fff');
        }
        else{
            $('nav').css('background-color', 'transparent');
            $('nav').css('border-bottom', '1px solid transparent');
        }
    });
});