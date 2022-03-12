// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarVetor(vetor){
    let a = vetor.length
    while(a < 20){
        let num = getInteiroAleatorioEntre(0, 99)
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

let mediaVetor = (vetor) => {
	let sum = 0
	for(let i=0; i<vetor.length; i++) {
		sum += vetor[i]
	}
	let media = sum / vetor.length
	return `Média do vetor é ${media.toFixed(2)}`
}

let vetor1 = []
criarVetor(vetor1)

console.log(vetor1);
console.log(mediaVetor(vetor1))