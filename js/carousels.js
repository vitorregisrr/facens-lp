(function () {
    'use strict';

    // Produto Carousel //
    const produtoCarousel = $(".owl-carousel.produto-pg__slider-mobile__carousel");
    produtoCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='owl-nav fa fa-chevron-left'>", "<i class='owl-nav fa fa-chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    // Product slider
    $('.product-slider__preview__item').click(function () {
        const parent = $(this).parent().parent();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        parent.find('.product-slider__selected').hide();
        parent.find('.product-slider__selected img').attr('src', $(this).data('image'));
        parent.find('.product-slider__selected').fadeIn();
    })

    window.dispatchEvent(new Event('resize'));
})();