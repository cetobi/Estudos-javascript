/*
Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

function pontos(lista) {
    let pontos = lista.split(',')
    let maiorPontuacao = 0
    let menorPontuacao = pontos[0]
    let rodada = 1
    for(let i=0; i < pontos.length; i++){
        if(pontos[i+1] > pontos[i]){
            maiorPontuacao++
        }
        if(pontos[i] < menorPontuacao){
            menorPontuacao = pontos[i]
            rodada = i+1
        }
    }
    return [maiorPontuacao, rodada]
}

let a = '1,2,3,4,5,6'
let b = '2,3,7,5,1,9'
let c = '4,3,1,7,9,2'

console.log(pontos(a))
console.log(pontos(b))
console.log(pontos(c))