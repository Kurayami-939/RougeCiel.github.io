$( document ).ready(function() {
    var position = $('.feature').position();
    $(document).on('scroll', function(){
        if($(document).scrollTop() > position.top - 100){
            $('.ipad').css('bottom', '0');
            $('.iphone').css('bottom', '-100px');
            $('.ipad').css('opacity', '1');
            $('.iphone').css('opacity', '1');
        }
        else {
            $('.ipad').removeAttr( 'style' );
            $('.iphone').removeAttr( 'style' );
        }
    });
});