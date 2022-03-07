//Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos.

function Frutas(fruta){
    switch (fruta){
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.');
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.');
            break
        default:
            console.log('Digite apenas "maçã", "kiwi" ou "melancia"!');
    }
}

Frutas('kiwi')
Frutas('melancia')
Frutas('maçã')
Frutas('café')