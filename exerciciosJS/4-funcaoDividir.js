/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
imprimir o resultado e o resto da divisão destes dois valores
*/

let Divisao = (dividendo, divisor) => {
    div = dividendo / divisor
    resto = dividendo % divisor

    console.log(`Resultado: ${div.toFixed(2)} \nResto da divisão: ${resto}`);
}

Divisao(30, 2)
Divisao(20, 3)
Divisao(25, 'a')