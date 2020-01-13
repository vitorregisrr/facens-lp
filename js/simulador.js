(function () {
    'use strict';

    var counterUp = window.counterUp["default"];
    let ctx = document.getElementById('sim-chart');

    if (ctx) {
        const simulador = {
            data: {
                curso: {
                    nome: '',
                    descricao: '',
                    valor_mensal: '',
                    valor_salario: '',
                    fonte_salario: ''
                },

                form: {
                    email: '',
                    nome: '',
                    curso: '',
                }
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

            populateGetters: () => {
                $('[data-getter="valor-mensal"]').text('R$ ' + numeral(simulador.data.curso.valor_mensal).format('R$ 0,0').replace(/,/g, '.') + ',00')
                $('[data-getter="valor-salario"]').text('R$ ' + numeral(simulador.data.curso.valor_salario).format('R$ 0,0').replace(/,/g, '.') + ',00')
                $('[data-getter="fonte-salario"]').text(simulador.data.curso.fonte_salario);
                $('[data-getter="pessoa-nome"]').text(simulador.data.usuario);
                $('[data-getter="curso-nome"]').text(simulador.data.curso.nome);
                $('[data-getter="curso-desc"]').text(simulador.data.curso.descricao);
            },

            setChart: () => {
                // Gráfico
                ctx = ctx.getContext('2d');
                let simChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Mensalidade', 'Salário'],
                        datasets: [{
                            data: [simulador.data.curso.valor_mensal, simulador.data.curso.valor_salario],
                            backgroundColor: [
                                '#CF6767',
                                '#5FBEB9',
                            ]
                        }]
                    },
                    options: {
                        animation: {
                            easeing: 'easeInCubic',
                            duration: '2500'
                        },

                        layout: {
                            padding: {
                                left: 8
                            }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    label += tooltipItem.yLabel;

                                    return 'R$ ' + numeral(label).format('R$ 0,0').replace(/,/g, '.') + ',00'
                                }
                            }
                        },

                        legend: {
                            display: false
                        },

                        scales: {
                            yAxes: [{
                                ticks: {
                                    display: false,
                                },

                                gridLines: {
                                    color: 'rgba(100, 100, 100, .9)',
                                    zeroLineColor: 'rgba(100, 100, 100, 0)',
                                    drawBorder: false
                                }
                            }],

                            xAxes: [{
                                display: false
                            }]
                        }
                    }
                });
            },

            close: () => {
                $('#home-banner').removeClass('hidden');
                $('#simulador').removeClass('active');
            },

            fetchCurso: () => {
                simulador.data.curso = {
                    nome: 'Especialização em gestão de Energia e eficiência energética',
                    descricao: 'O setor de energia tem recebido altos investimentos graças à demanda de mercado. De olho também para energias renováveis, como a eólica, profissionais deste campo são cada vez mais desejados pelo mercado, segundo as consultorias Hays, Asap e Talenses. O resultado desta procura são os salários que justificam o seu investimento neste curso (confira no gráfico).',
                    valor_mensal: '569',
                    valor_salario: '11000',
                    fonte_salario: 'Revista Exame'
                }

                $('#sim-step-1').hide();
                $('#sim-step-2').fadeIn(300);

                simulador.populateGetters();
                simulador.setChart();

                $('.counter').each(function (ignore, counter) {
                    counterUp(counter, {
                        duration: 1000,
                        delay: 16
                    });
                });

                // $.ajax({
                //     url: '/api/getCurso',
                //     data: simulador.data.form,
                //     success: (data) => {
                //         simulador.data.curso = data.curso;

                //         $('#sim-step-1').hide();
                //         $('#sim-step-2').fadeIn(300);

                //         simulador.populateGetters();
                //         simulador.setChart();

                //         $('.counter').each(function (ignore, counter) {
                //             counterUp(counter, {
                //                 duration: 1000,
                //                 delay: 16
                //             });
                //         });
                //     },
                // });
            },
        }

        // Form validation
        const form = $('#sim-form')
        form.validate({
            ignore: "",
            rules: {
                nome: {
                    required: true
                },
                email: {

                    required: true,
                    email: true
                },

                curso: {
                    valueNotEquals: "false"
                }
            },

            messages: {
                email: {
                    required: 'Por favor, insira um e-mail válido!',
                    email: 'Por favor, insira um e-mail válido!'
                },

                nome: {
                    required: 'Por favor, digite seu nome completo!'
                },

                curso: {
                    valueNotEquals: 'Por favor, selecione um curso!'
                }
            }
        });

        const sendForm = () => {
            if (form.valid()) {
                simulador.data.form.nome = $('#sim-nome').val();
                simulador.data.form.curso = $('#sim-curso-select').val();
                simulador.data.form.email = $('#sim-sim-email').val();
                simulador.fetchCurso();
            };
            return false;
        }

        // Abre de acordo com a os parametros da URL
        var url = new URL(window.location.href);
        if (url.searchParams.get("simulador") === 'open') {
            simulador.open();
        }

        // Listeners
        $('#sim-form [data-action="submit"]').click(sendForm);
        $('[data-toggle="simulador"').click(simulador.open);
    }
})();