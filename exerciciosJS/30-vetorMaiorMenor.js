// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

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


let numeros = []
criarVetor(numeros)

let a = numeros.length
let menor = numeros[0]
let maior = numeros[0]
for(let i=0; i<a; i++){
    if(numeros[i]<menor){
        menor = numeros[i]
    }
    if(numeros[i]>maior){
        maior = numeros[i]
    }
}
console.log(numeros);
console.log(`Maior número: ${maior} \nMenor número: ${menor}`)