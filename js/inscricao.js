(function () {
    'use strict';

    // Listener da troca de modalidade
    $('#insc-select-mod').on('sp-change', function () {
        $('#insc-select-container > div').hide();

        switch ($(this).val()) {

            case '':
                $('#insc-select-cur-1').show();
                break;

            case 'Presencial':
                $('#campaign_id').val('70123000000AWvn');
                $('#insc-select-cur-2').show();
                break;

            case 'EAD':
                $('#campaign_id').val('7011C000001Bw1k');
                $('#insc-select-cur-3').show();
                break;
        }
    });

    // Muda o valor do input hidden do curso no click
    $('.select-curso').on('sp-change', function () {
        $('#insc-select-cur').val($(this).val());
    });

    // Validação newsletter
    $("#inscricao-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },

        messages: {
            email: {
                required: 'Por favor, insira um e-mail válido!',
                email: 'Email inválido'
            }
        }
    });

})();