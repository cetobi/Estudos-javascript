

function pontos(lista) {
    let pontos = lista.split(',')
    let maiorPontuacao = 0
    let menorPontuacao = 0
    for(let i=0; i < pontos.length; i++){
        for(let j in pontos){
            if(pontos[i] > pontos[j]){
                maiorPontuacao++
            }
            else if(pontos[i] < pontos[j]){
                menorPontuacao++
            }
        }
    }


    return [maiorPontuacao, menorPontuacao]
}

let b = '1,2,3,4,5,6'

console.log(pontos(b))