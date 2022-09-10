/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
let jurosSimples = 0
let jurosCompostos = 0
const montanteSimples = (capitalInicial, taxaDeJuros, tempDeAplicacao) => {

    return jurosSimples = (capitalInicial * taxaDeJuros * tempDeAplicacao)+capitalInicial



}
const montanteCompostos = (capitalInicial, taxaDeJuros, tempDeAplicacao) => {
    let soma = 1 + taxaDeJuros
    return jurosCompostos = (capitalInicial * (Math.pow(soma,tempDeAplicacao))).toFixed(2)


}




montanteSimples(1000, 0.025, 8)
montanteCompostos(1000, 0.025, 8)

console.log(jurosSimples)
console.log(jurosCompostos)