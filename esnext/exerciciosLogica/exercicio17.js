/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano | Aumento
A     |   10%
B     |   15%
C     |   20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function novoSalario(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            console.log (salarioAtual +(salarioAtual * (10/100)))
            break
        case 'B':
            console.log (salarioAtual + (salarioAtual * (15/100)))
            break
        case 'C':
            console.log (salarioAtual + (salarioAtual * (20/100)))
            break
        default:
            console.log('Plano invalido!')

    }

}

novoSalario('C',1000)