/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const vetorInteiros = [-1, 2, -2, 5, -4, -10, 6, 8, 4, 9, 5, 2, 3, 14, 45, -7, -11]
contNegativo = 0

function numerosNegativos(valor) {
   if (valor < 0) {
      // console.log(valor)
        contNegativo++
    }
}

vetorInteiros.forEach(numerosNegativos)
console.log(contNegativo)