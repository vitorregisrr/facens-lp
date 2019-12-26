(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    const mainNav = $('#main-nav');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            mainNav.addClass('sticky');
        } else {
            mainNav.removeClass('sticky');
        }
    });
    
    window.dispatchEvent(new Event('resize'));
})();