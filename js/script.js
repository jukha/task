$(document).ready(function () {
    $('.expertise-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        onInit: function (slick) {
            // Find the left and right slide indexes based on the initial center slide index
            var centerSlide = Math.floor(slick.slideCount / 2);
            var leftSlide = (centerSlide === 0) ? slick.slideCount - 1 : centerSlide - 1;
            var rightSlide = (centerSlide === slick.slideCount - 1) ? 0 : centerSlide + 1;

            // Add the 'left' and 'right' classes to the left and right slides, respectively
            $('.slick-slide[data-slick-index=' + leftSlide + ']').addClass('slick-left');
            $('.slick-slide[data-slick-index=' + rightSlide + ']').addClass('slick-right');
        },
        appendDots: '.slider-dots',
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        // remove numbers that was appearing with the dots by default
        customPaging: function (slider, i) {
            return $('<button type="button" />').text('');
        },
    });

    // Add beforeChange event listener
    $('.expertise-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // Remove the 'left' and 'right' classes from all slides
        $('.slick-slide').removeClass('slick-left slick-right');

        // Find the left and right slide indexes based on the current and next slide indexes
        var leftSlide = (nextSlide === 0) ? slick.slideCount - 1 : nextSlide - 1;
        var rightSlide = (nextSlide === slick.slideCount - 1) ? 0 : nextSlide + 1;

        // Add the 'left' and 'right' classes to the left and right slides, respectively
        $('.slick-slide[data-slick-index=' + leftSlide + ']').addClass('slick-left');
        $('.slick-slide[data-slick-index=' + rightSlide + ']').addClass('slick-right');
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
