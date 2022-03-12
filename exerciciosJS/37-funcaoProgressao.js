/*  Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos */

function pgAritmetica(n,a1,r) {
    let numeros = []
    let soma = 0
    for(let i=0; i<n; i++){
        numeros.push(a1)
        soma += a1
        a1 += r
    }
    return [numeros,'Soma: '+soma]
}

function pgGeometrica(n,a1,r) {
    //let num = a1*(r**(n-1))   //return num
    let numeros = []
    let soma = 0
    for(let i=0; i<n; i++){
        numeros.push(a1)
        soma += a1
        a1 *= r
    }
    return [numeros,'Soma: '+soma]
}

console.log(pgAritmetica(6,2,2))
console.log(pgAritmetica(6,7,9))
console.log('\n');

console.log(pgGeometrica(6,2,2))
console.log(pgGeometrica(6,7,9))