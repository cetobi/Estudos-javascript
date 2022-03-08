// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche.

function Cardapio(cod, qntd) {
    let valor
    switch(cod){
        case 100 :
            valor = qntd*3
            break
        case 200 :
            valor = qntd*4
            break
        case 300 :
            valor = qntd*5.5
            break
        case 400 :
            valor = qntd*7.5
            break
        case 500 :
            valor = qntd*3.5
            break
        case 600 :
            valor = qntd*2.8
            break
        default:
            console.log('Produto não existente.');
    }
    console.log(`R$ ${valor.toFixed(2)}`);
}

Cardapio(400, 3)
Cardapio(100, 2)
Cardapio(600, 5)
Cardapio(300, 4)