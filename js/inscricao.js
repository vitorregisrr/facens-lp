(function () {
    'use strict';

    $('.mask-phone').mask('00 000000000');
    $('.mask-cpf').mask('00000000000');

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
    $("#inscricao-form-1, #inscricao-form-2").validate({
        ignore: "",
        rules: {
            email: {
                required: true,
                email: true
            },

            Modalidade__c: {
                required: true,
            },

            Curso_de_interesse__c:{
                required: true,
            },

            last_name: {
                required: true,
            },

            CPF__c: {
                required: true,
                minLength: 11
            },

            mobile: {
                required: true,
                minLength: 11
            },
        },

        messages: {
            email: {
                required: 'Por favor, insira um e-mail válido!',
                email: 'Por favor, insira um e-mail válido!'
            },

            Modalidade__c: {
                required: 'Por favor, selecione uma modalidade!',
            },

            Curso_de_interesse__c:{
                required: 'Por favor, selecione um curso!',
            },

            last_name: {
                required: 'Por favor, digite seu nome!',
            },

            CPF__c: {
                required: 'Por favor, digite seu CPF!',
                minLength: 'Seu celular deve ter no minímo 11 números'
            },

            mobile: {
                required: 'Por favor, digite seu celular!',
                minLength: 'Seu celular deve ter no minímo 11 números'
            },
        }
    });

})();