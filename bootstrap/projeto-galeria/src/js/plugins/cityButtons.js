//importando jquery
import $ from 'jquery'
//importando core onde realiza os includes 
import { onLoadHtmlSuccess } from '../core/includes'
//constante para duração das imagens quando filtrar as imagens
const duration = 300
//funcao para filtrar as cidades
function filterByCity(city) {
    //cada wm-city que encontrar vai pegar vai fazer 
    //um each onde o primeiro parametro e um indice e o segundo o elemento
    $('[wm-city]').each(function (i, e) {
        //se isTarget for verdadeira a cidade sera exibida e se for falso sera escondida
        const isTarget = $(this).attr('wm-city') === city
        //quando for nulo vai mostrar todos    
        || city === null
        //se for verdadeiro
        if (isTarget) {
            //ajusta as imagens para nao ficar espacos em brancos 
            //quando for filtrado 
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            //se for falso esconde
            $(this).fadeOut(duration, () => {
                //ajustando a grid com display none escondendo
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    //set nao tem repeticao
    const cities = new Set
    //adicionando elemento no set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })
    //map transformando as cidades em um botao
    const btns = Array.from(cities).map(city => {
       // criando botao
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
            //click do botao chama a funcao filter para filtrar as cidades
        btn.click(e => filterByCity(city))
        //map possui retorno
        return btn
    })
    //botao que representa todas as cidades recebendo null
    const btnAll = $('<button>')
    //ativo por padrao para exibir as cidades no inicio
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
        //o click sera nulo para exibir todas imagens
    btnAll.click(e => filterByCity(null))
    //
    btns.push(btnAll)
    //grupo de botoes
    const btnGroup = $('<div>').addClass(['btn-group'])
    //adiciona todos butoes 
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}
//funcao para incluir os botoes se a pagina for carregada com sucesso
onLoadHtmlSuccess(function() {

    $('[wm-city-buttons]').cityButtons()
})
