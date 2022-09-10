/*Faça um algoritmo que calcule o fatorial de um número.*/

const fatorial = (valor) => valor === 0 ? 1 : valor * fatorial(valor - 1) 
console.log(fatorial(5))