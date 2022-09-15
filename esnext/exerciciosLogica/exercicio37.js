/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/
let aritmeticArray = []
let geometricArray = []


const geometric = (n,a1,r) =>{
    geometricArray.unshift(a1)
    let temp =a1
    for(let i = 1;i<n;i++){
        temp =temp*r
        geometricArray.push(temp)

        
    }
    console.log(`Os primeiros ${n} termos da PG é: ${geometricArray}`)
//variavel soma recebe a funcao reduce 
const soma = geometricArray.reduce((soma,numero) =>soma+numero)
console.log("A soma dos termos é: "+soma)

}



const aritmetic = (n,a1,r) =>{
    aritmeticArray.unshift(a1)
    let temp =a1
    for(let i = 1;i<n;i++){
        temp =temp+r
        aritmeticArray.push(temp)

        
    }
    console.log(`Os primeiros ${n} termos da PA é: ${aritmeticArray}`)
//variavel soma recebe a funcao reduce 
const soma = aritmeticArray.reduce((soma,numero) =>soma+numero)
console.log("A soma dos termos é: "+soma)

}

aritmetic(5,2,2)
geometric(5,2,2)