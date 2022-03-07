/*
Bingo automatico

usar o metodo Ramdom para gerar uma matriz 3x3
//	//	//   //	para gerar numeros sorteados
fazer uma estrutura de controle para verificar se o numero ja foi sorteado
usar um vetor para guardar os numeros sorteados e ajudar na verificação

O programa só vai parar quando sortear todos os numeros da matriz
usar outro vetor para guardar os numeros sorteados que são iguais ao da matriz
*/

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarTabela(tabel){
    let a = tabel.length
    while(a < 9){
        let num = getInteiroAleatorioEntre(10, 99)
        a = tabel.length
        for(let i = 0; i <= a; i++){
            if(num === tabel[i]){
                break
            }
            else if(i === a){
                tabel.push(num)
            }
        }
    }
}

function imprimirTabela(tabel){
    for(let i = 0; i < 9; i++){
        if(i === 0 || i === 3 || i === 6){
            console.log(tabel[i], tabel[i+1], tabel[i+2]);
        }
    }
}

let tabela = []
criarTabela(tabela)

let numSorteados = []
let tabelaEspelho = []

let lengthNumSorteados = numSorteados.length
let lengthTabEspelho = tabelaEspelho.length

while(lengthTabEspelho < 9){
    let num = getInteiroAleatorioEntre(10, 99)
    lengthNumSorteados = numSorteados.length
    lengthTabEspelho = tabelaEspelho.length

    for(let i = 0; i <= lengthNumSorteados; i++){
        if(num === numSorteados[i]){
            break
        }
        else if(i === lengthNumSorteados){
            numSorteados.push(num)
            for(let j=0; j < 9; j++){
                if(num === tabela[j]){
                    tabelaEspelho.push(num)
                    break
                }
            }
        }
    }
}

console.log('Sua Tabela da Sorte');
imprimirTabela(tabela)

console.log('\nBINGO!!!\n');

console.log('Tabela com os números correspondentes');
imprimirTabela(tabelaEspelho)

console.log('\nNúmeros sorteados');
console.log(numSorteados);