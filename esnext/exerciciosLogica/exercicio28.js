/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

vetorInteiros = [1, 6, 5, 3, 8, 4, 7, 10, 77, 70, 72, 98, 99, 83]
vetorPares = []
vetorImpares = []
const paresEImpares = numero => numero % 2 ? vetorImpares.push(numero)  : vetorPares.push(numero)

vetorInteiros.forEach(paresEImpares)

console.log(`Valores Pares : ${vetorPares}`)
console.log(`Valores Impares : ${vetorImpares}`)