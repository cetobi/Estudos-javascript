/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaDaSemana(dia){
    switch (dia){
        case 1: case 7:
            console.log('Fim de Semana.');
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia Útil.');
            break
        default:
            console.log('Dia Inválido.');
    }
}

diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(4)
diaDaSemana('dia')