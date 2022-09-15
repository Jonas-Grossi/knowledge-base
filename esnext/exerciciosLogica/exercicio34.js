/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const compara = (string1, string2) => {
    array1 = []
    array2 = []

    for (const caracter1 of string1) {
        let temp1 = caracter1.toLowerCase()
        array1.push(temp1)

    }
    for (const caracter2 of string2) {
        let temp2 = caracter2.toLowerCase()
        if (array1.includes(temp2) == false) {
            console.log(false)
            break

        } else if (string2.toLowerCase().substr(-1) == temp2) {
            
            console.log(true)
        }


        array2.push(temp2)
        

    }
   
     console.log(
         `Array 1: ${array1} 
 Array 2: ${array2}`)
 
}

compara('AbcSD', 'AcbcSD')




