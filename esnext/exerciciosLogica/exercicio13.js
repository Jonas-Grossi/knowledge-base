/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const semana = 'Segunda'

switch (semana) {

    case 'Domingo' || 'Sabado':
        console.log('Fim de Semana')
        break

    case 'Segunda' || 'Terca' || 'Quarta' || 'Quinta' || 'Sexta':
        console.log('Dia Util')
            break

            default:
                console.log('Digite um dia correto')
}



