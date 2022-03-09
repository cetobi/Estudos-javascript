//  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarVetor(vetor){
    let a = vetor.length
    while(a < 20){
        let num = getInteiroAleatorioEntre(10, 99)
        a = vetor.length
        for(let i = 0; i <= a; i++){
            if(num === vetor[i]){
                break
            }
            else if(i === a){
                vetor.push(num)
            }
        }
    }
}

function imparPar(vetor){
    let impar=0, par=0
    let a = vetor.length
    for(let i=0; i<a; i++){
        let resto = vetor[i]%2
        resto === 0 ? par++ : impar++
    }
    return `Par: ${par} \nImpar: ${impar}`
}

let numeros = []
criarVetor(numeros)
console.log(numeros);
console.log(imparPar(numeros))