$( document ).ready(function() {
    accordeon();
    $(window).on('resize', function(){
        accordeon();
    });
    $(window).bind('orientationchange', function() {
        accordeon();
    });
    $(document).on('click', 'li.title', function(){
        $('li.open').slideToggle();
        $(this).parent().children('li.text').slideToggle();
        $('li.text').removeClass('open');
        $('li.title').removeClass('arrow');
        $(this).parent().children('li.text').addClass('open');
        $(this).parent().children('li.title').addClass('arrow');
    });
});

function accordeon() {
    var height = $('.accordeon img').height() - 244;
    $('li.text').css('height', height);
}