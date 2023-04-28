$(document).ready(function () {
    $('.expertise-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: true,
        appendDots: '.slider-dots',
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        customPaging: function (slider, i) {
            return $('<button type="button" />').text('');
        }
    });

    // Add beforeChange event listener
    $('.expertise-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $('.slick-slide').removeClass('slick-left slick-right');
        $('.slick-slide[data-slick-index=' + (nextSlide - 1) + ']').addClass('slick-left');
        $('.slick-slide[data-slick-index=' + (nextSlide + 1) + ']').addClass('slick-right');
    });

    const navbar = $('.navbar');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
});
