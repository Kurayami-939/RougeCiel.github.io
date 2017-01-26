$( document ).ready(function() {
    var height = $('.feature .block_header').height() + $('img.ipad').height();
    $('.feature').css('height', height);
    $(window).on('resize', function(){
        var height = $('.feature .block_header').height() + $('img.ipad').height();
        $('.feature').css('height', height);
    });
    $(window).bind('orientationchange', function() {
        var height = $('.feature .block_header').height() + $('img.ipad').height();
        $('.feature').css('height', height);
    });
});