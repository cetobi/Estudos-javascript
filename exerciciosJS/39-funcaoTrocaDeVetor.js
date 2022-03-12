/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarVetor(vetor){
    let a = vetor.length
    while(a < 3){
        let num = getInteiroAleatorioEntre(0, 10)
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

function trocaVetor(v1, v2){
    if(v1.length === v2.length){
        let L = v1.length
        for(let i=0; i<L; i++){
            v1.push(v2[i])
            v2.push(v1[i])
        }
        for(let i=0; i<L; i++){
            v1.shift()
            v2.shift()
        }
        return [v1, v2]
    }else{
        return 'Vetores com tamanhos diferentes.'
    }
}

let vetorA = [], vetorB = []
criarVetor(vetorA)
criarVetor(vetorB)

console.log(vetorA)
console.log(vetorB)
console.log('\n');

console.log(trocaVetor(vetorA,vetorB))