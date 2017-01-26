$( document ).ready(function() {
    $(document).on('click', '.carousel-content .next', function(){
        $(this).parent().slideToggle();
        $(this).parent().removeClass('visible');
        if ($(this).parent().next('.carousel-content').length > 0) {
            $(this).parent().next('.carousel-content').slideToggle();
            $(this).parent().next('.carousel-content').addClass('visible');
        } else {
            $(this).parent().parent().children('.carousel-content:first').slideToggle();
            $(this).parent().parent().children('.carousel-content:first').addClass('visible');
        }
    });
    $(document).on('click', '.carousel-content .prev', function(){
        $(this).parent().slideToggle();
        $(this).parent().removeClass('visible');
        if ($(this).parent().prev('.carousel-content').length > 0) {
            $(this).parent().prev('.carousel-content').slideToggle();
            $(this).parent().prev('.carousel-content').addClass('visible');
        } else {
            $(this).parent().parent().children('.carousel-content:last').slideToggle();
            $(this).parent().parent().children('.carousel-content:last').addClass('visible');
            alert('bip');
        }
        console.log($(this).parent().prev('.carousel-content'));
    });
});