$(document).ready(function () {

    $('.js-timeline').Timeline();

    function checkTimeline() {
        if ($(window).width() < '1440') {
            $('.timeline').removeClass('js-timeline');
        } checkTimeline();
    }

    $(window).resize(function() {
        checkTimeline();
    });

    $('.reviews__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100,
        responsive: [
            {
              breakpoint: 630,
              settings: {
                    adaptiveHeight: true,
                    infinite: true
              }
            }
        ]
    });

    $('.reviews-arrows__left').click(function () { 
        $('.reviews .slick-prev').click();
    });

    $('.reviews-arrows__right').click(function () { 
        $('.reviews .slick-next').click();
    });

    $('.production__row').slick({
        variableWidth: true,
        infinite: false,
        touchThreshold: 100,
        responsive: [
            {
              breakpoint: 630,
              settings: {
                    adaptiveHeight: true,
                    infinite: true
              }
            }
        ]
    });

    $('.production-arrows__left').click(function () { 
        $('.production .slick-prev').click();
    });

    $('.production-arrows__right').click(function () { 
        $('.production .slick-next').click();
    });

    $('.nav__burger').click(function () {
        $(this).toggleClass('nav__burger_active');
        $('.nav__inner').toggleClass('nav__inner_active');
    });

});