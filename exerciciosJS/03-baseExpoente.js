/*
Crie uma função que recebe dois parâmetros, base e expoente, 
e retorne a base elevada ao expoente.
*/

let baseExpoente = (base, expoente) => {
    return Math.pow(base, expoente)
}

function expoente(val1, val2) {
    return val1**val2
}

console.log(baseExpoente(4, 56));
console.log(expoente(4, 56));
