/* 
Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses valores. 
*/


let isNumber = (val) => {
    return typeof(val) === 'number'
}

function doisValores(num1, num2) {
    if(isNumber(num1) && isNumber(num2)){
        sum = num1+num2
        sub = num1-num2
        mult = num1*num2
        div = num1/num2
        
        console.log(`Soma: ${sum} \nSubtração: ${sub} \nMultiplicação: ${mult} \nDivisão: ${div.toFixed(2)}`);    
    } else {
        console.log('Número  Invalido!!!');
    }
}

doisValores(5, 7)