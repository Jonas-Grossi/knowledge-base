/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

const bhaskara = (a, b, c) => {
    
    console.log(`a função é: ${a}x² + ${b}x + ${c}   `)
return calculo1(a,b,c)


}

calculo1 = (a,b,c) => {
   
    let delta = 0

    delta = Math.pow(b,2) - 4 * a * c
    console.log("valor de delta é "+ delta)
    if (delta < 0) {
        console.log('O delta é negativo!')

    } else return calculo2(delta,a,b)



}
calculo2 = (delta,a,b) => {
   
    let resultado1, resultado2

    resultado1 = (-b + Math.sqrt(delta)) / (2 * a)
    resultado2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`O resultado para x' = ${resultado1.toFixed(2)} e para x'' = ${resultado2.toFixed(2)}`)


}



bhaskara(3, 2, -12)