/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const contador = (inicio, fim) => {
    let temp
    if (inicio > fim) {
        temp = fim - 1
        while (temp < inicio) {
            if (!(temp % 2) == 0) console.log(temp)
            temp++
    
        }
        
    } else {
        temp = inicio + 1
        while (temp < fim) {
            if (!(temp % 2) == 0) console.log(temp)
            temp++
    
        }
    }
    
}

contador(3, 13)