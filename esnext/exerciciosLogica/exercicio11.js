/*As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

let ano = 0

    anoBissexto = (ano) => ano % 4 === 0 && ano > 0 ? etapa2() : false;
    const etapa2 = () => ano % 100 === 0 ? etapa3() : false
    const etapa3 = () => ano % 400 === 0 ? etapa4() : false
    const etapa4 = () => true

console.log(anoBissexto(2024))