/*
Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30
*/


let dinheiro = (numero) => {
    return numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

console.log(dinheiro(0.30000000000000004));
