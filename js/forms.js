// Validação newsletter
$("#newsletter-form").validate({
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