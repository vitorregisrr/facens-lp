(function () {
    'use strict';

    //Init Libs
    new WOW().init();

    const mainNav = $('#main-nav');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            mainNav.addClass('sticky');
        } else {
            mainNav.removeClass('sticky');
        }
    });

    // Smooth Scroll
    $("a").on('click', function (event) {
        if (this.hash !== "" && $(`a[href="${this.hash}"`).attr('href')[0] === '#') {
            event.preventDefault();

            const offset = this.hash == '#lista-cursos' ? -50 : 0;
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800, function () {});

        }
    });

    // Select customizado
    const customSelects = $('.custom_select');
    customSelects.picker({
        containerClass: 'custom-select'
    });
    $('.pc-list').attr('data-simplebar', true);

    // Remove a primeira opção dos data-title, que na verdade vai servir apenas como título
    $('.pc-list').each(function () {
        $(this).find('ul li')[0].remove();
     });

    //  Cursos filtering
    
    var cursosIsotope = $('#container-cursos').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

    // store filter for each group
    var filters = {};

    $('#container-cursos-filters button').on('click', function () {
        var $this = $(this);

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // get group key
        var $buttonGroup = $this.parent();
        var filterGroup = $buttonGroup.attr('data-filter-group');
        
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');

        // combine filters
        var filterValue = concatValues(filters);

        cursosIsotope.isotope({
            filter: filterValue
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }

    // Toggle modal inscrição
    $('[data-toggle="modal-inscricao"]').click( function(){
        $('#modal-inscricao').toggleClass('active');
    });

    window.dispatchEvent(new Event('resize'));
})();