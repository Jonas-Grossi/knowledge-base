/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
const conceito = nota => {
    nota >= 0 && nota <= 4.9 ? console.log("Nota D ") :
        nota >= 5 && nota <= 6.9 ? console.log("Nota C ") :
            nota >= 7 && nota <= 8.9 ? console.log("Nota B ") :
            nota >= 9 && nota <= 10 ? console.log("Nota A ") : console.log("nota Invalida")

     


}

conceito(10)
conceito(0)
conceito(3.9)
conceito(8.8)
