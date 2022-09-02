//funcao para criar o objeto que vai conter a tag e a classe que seram chamadas por outras fncoes
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem

}
//funcao para criar as barreiras 
function Barreira(reversa = false) {

    this.elemento = novoElemento('div', 'barreira')
    //criando elementos atraves do js
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    //set atribui um valor
    this.setAltura = altura => corpo.style.height = `${altura}px`


}

//const b = new Barreira(true)
//b.setAltura(200)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)
function PardeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')
   //instancia  os corpos inferior e superior do cano sen uma reversa e a outra nao
   this.inferior = new Barreira(false)    
   this.superior = new Barreira(true)
    
    //acrescenta na area de jogo
      this.elemento.appendChild(this.superior.elemento) 
    this.elemento.appendChild(this.inferior.elemento)
    //funcao para sortear    
    this.sortearAbertura = () => {
        //altura da barreira recebendo valores randomicos
        const alturaSuperior = Math.random() * (altura - abertura)
        //altura inferior sempre vai se adaptar para ter a mesma abertura de passagem do passaro
        const alturaInferior = altura - abertura - alturaSuperior
       //passando novos valores para barreiras
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)

    }
    //get obtem informacoes e retorna valor 
    //getX recebe o valor convertido em inteiro da primeira posicao 
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    //usamos set para definir valores
    this.setX = x => this.elemento.style.left = `${x}px`
    //pega a largura da tela do jogo
    this.getLargura = () => this.elemento.clientWidth
    //funcao para sortear a abertura
    this.sortearAbertura()
    this.setX(x)

}

//const b = new PardeBarreiras(700, 200, 400)
//document.querySelector('[wm-flappy').appendChild(b.elemento)
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        //instanciando as barreiras
        new PardeBarreiras(altura, abertura, largura),
        new PardeBarreiras(altura, abertura, largura + espaco),
        new PardeBarreiras(altura, abertura, largura + espaco * 2),
        new PardeBarreiras(altura, abertura, largura + espaco * 3)


    ]


    const deslocamento = 3

    this.animar = () => {
        //funcao para realizar o movimento das barreiras
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da area do jogo voltar para o inicio
            if (par.getX() < -par.getLargura()) {

                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            //contar os pontos quando o passaro cruzar o meio
            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouMeio) notificarPonto()
        })

    }
}

function Passaro(alturaJogo) {
    let voando = false
    //tag e atributo
    this.elemento = novoElemento('img', 'passaro')
    //caminho da imagem
    this.elemento.src = 'imgs/passaro.png'
    
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`
   //voar ao apertar qualquer botao e cair quando soltar
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false
//funcao para animar 
    this.animar = () => {
        //recebendo a posicao em pix + a nova prosicao ao apertar o botao ou nao
        const novoY = this.getY() + (voando ? 8 : -5)
        //altura maxima que o passaro pode voar
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        //condicao para o passaro nao ultrapassar os limites da tela
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)

        } else {
            this.setY(novoY)
        }




    }
    
    this.setY(alturaJogo / 2)
}



function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizaPontos = pontos => {
        this.elemento.innerHTML = pontos


    }
    this.atualizaPontos(0)


}
function estaoSobrepostos(elementoA, elementoB){
const a = elementoA.getBoundingClientRect()
const b = elementoB.getBoundingClientRect()
const horizontal = a.left + a.width >= b.left
 && b.left + b.width >= a.left
const vertical = a.top + a.height >= b.top
&& b.top + b.height >= a.top
return horizontal && vertical

}
function colidiu(passaro, barreiras){
let colidiu = false
barreiras.pares.forEach(parDeBarreiras=>{

if(!colidiu){

    const superior = parDeBarreiras.superior.elemento
    const inferior = parDeBarreiras.inferior.elemento
    colidiu = estaoSobrepostos(passaro.elemento,inferior) 
    || estaoSobrepostos(passaro.elemento,superior)
}

})
return colidiu


}

function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizaPontos(++pontos)

    )
    const passaro = new Passaro(altura)
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    this.start = () => {
        //loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro,barreiras)){
                clearInterval(temporizador)
            }

        }, 20)


    }

}
new FlappyBird().start()