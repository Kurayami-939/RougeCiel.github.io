$( document ).ready(function() {
    resizeImg();
    $(window).on('resize', function(){
        resizeImg();
    });
    $(window).bind('orientationchange', function() {
        resizeImg();
    });

    $('.about-us .mouseover-img').on('mouseover', function () {
        $(this).children('.frame-img').addClass('frame_active');
    });
    $('.about-us .mouseover-img').on('mouseout', function () {
        $(this).children('.frame-img').removeClass('frame_active');
    });

    $('.meet-our-team .mouseover-img').on('mouseover', function () {
        $(this).children('.frame-img').addClass('frame_active');
    });
    $('.meet-our-team .mouseover-img').on('mouseout', function () {
        $(this).children('.frame-img').removeClass('frame_active');
    });
});

function resizeImg() {
    height = $('.about-us .mouseover-img').children('.frame-img').children('img').height();
    $('.about-us .mouseover-img').css('height', height);
    $('.about-us .frame-img').css('height', height);

    height2 = $('.meet-our-team .mouseover-img').children('.frame-img').children('img').height();
    $('.meet-our-team .mouseover-img').css('height', height2);
    $('.meet-our-team .frame-img').css('height', height2);

}