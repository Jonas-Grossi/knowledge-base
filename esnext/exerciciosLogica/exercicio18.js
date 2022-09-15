/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
let cont100 = 0, cont50 = 0, cont10 = 0, cont5 = 0, cont1 = 0

const troco = nota => {
    if ((nota >= 100)) {
        cont100++
        nota = nota - 100
        return troco(nota)

    } else if ((nota >= 50)) {
         cont50++
        nota = nota - 50

        return troco(nota)

    } else if ((nota >= 10)) {
        cont10++
        nota = nota - 10

        return troco(nota)

    } else if ((nota >= 1)) {
        nota = nota - 1
        cont1++
        return troco(nota)

    }
    

}

troco(112)
console.log (`O troco será:
${cont100} nota(s) de R$ 100.
${cont50} nota(s) de R$ 50. 
${cont10} nota(s) de R$ 10. 
${cont5} nota(s) de R$ 5. 
${cont1} nota(s) de R$ 1.`)






