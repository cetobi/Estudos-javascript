/*
Crie uma função que recebe os comprimentos dos três lados de um 
triângulo e retorne sua classificação quanto ao tamanho de seus lados.
*/

let isNumber = (val) => {
    return typeof(val) === 'number'
}

function qualTriangulo(lado1, lado2, lado3) {
    if(isNumber(lado1) && isNumber(lado2)  && isNumber(lado3)){
        if(lado1 === lado2 && lado2 === lado3){
            console.log('Esse é um Triângulo Equilátero.');
        }
        else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
            console.log('Esse é um Triângulo Escaleno.');
        }
        else{
            console.log('Esse é um Triângulo Isósceles.');
        }
    }else{
        console.log('Informe valores validos!!!');
    }
}

qualTriangulo(2, 2, 2)
qualTriangulo(1, 3, 4)
qualTriangulo(4, 4, 5)
qualTriangulo(1, 2, 'a')
qualTriangulo(0, 0, 0)