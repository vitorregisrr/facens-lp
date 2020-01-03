(function () {
    'use strict';

    const simulador = {
        data: {
            cursos: [],
            cursoSelecionado: {}, 
        },

        open: () => {
            $('#home-banner').addClass('hidden');
            $('#simulador').addClass('active');
            $('#sim-col-cupom').hide();
            $('#sim-desc-curso').hide();

            $('html, body').animate({
                scrollTop: 0
            }, 500, function () {});

        },

        close: () => {
            $('#home-banner').removeClass('hidden');
            $('#simulador').removeClass('active');
        }

    }
    
    $('[data-toggle="simulador"').click(simulador.open);
})();