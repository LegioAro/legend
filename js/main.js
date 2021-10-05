$(document).ready(function () {

    function sliderDescription() {
        if ($(window).width() < 769) {
            $('.description__who-items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.description__who-items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderAbout() {
        if ($(window).width() < 551) {
            $('.about__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.about__items').filter('.slick-initialized').slick('unslick');
        }
    }

    $(window).resize(function () {
        sliderDescription();
        sliderAbout();
    })


    sliderDescription();
    sliderAbout();

    document.addEventListener('touchstart', { passive: true });

})