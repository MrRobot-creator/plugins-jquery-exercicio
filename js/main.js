$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
});

$('#telefone').mask('(00) 00000-0000')

$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone",
                minlength: "Telefone incompleto"
            },
            cpf: {
                required: "Por favor, insira seu CPF",
                minlength: "CPF incompleto"
            },
            endereco: {
                required: "Por favor, insira seu endereço",
                minlength: "Endereço muito curto"
            },
            cep: {
                required: "Por favor, insira seu CEP",
                minlength: "CEP incompleto"
            }
    },
    submitHandler: function(form) {
        alert('Formulário enviado com sucesso!');
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
        alert(`Por favor, corrija os ${camposIncorretos} campo(s) destacado(s)`);
    }
    })
})