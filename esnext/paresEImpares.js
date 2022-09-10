const valores = ['1', '2', '3', '4', '5', '6']
console.log(`Array contem os valores: 
${valores} `)
pares = []
impares = []

function par(valores){
    if (valores % 2 === 0) {
        pares.push(valores)
    }
    else {
        impares.push(valores)
    }
}
valores.forEach(par)
console.log(`Valores pares:${pares}`)
console.log(`Valores impares:${impares}`)



