// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20]

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


let vetor = []
criarVetor(vetor)

let a = vetor.length
let qntd = 0
let numIntervalo = []
for(let i=0; i<a; i++){
    if(vetor[i] > 9 && vetor[i] < 21){
        numIntervalo.push(vetor[i])
        qntd++
    }
}
console.log(vetor);
console.log(`Quantidade: ${qntd}
Números do Intervalo
${numIntervalo}`)