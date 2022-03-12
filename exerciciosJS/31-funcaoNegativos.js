// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarVetor(vetor){
    let a = vetor.length
    while(a < 20){
        let num = getInteiroAleatorioEntre(-50, 50)
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

let Negativos = (vetor) => {
	let neg = 0
	for(let i=0; i<vetor.length; i++){
		vetor[i]<0 ? neg++ : null
	}
	return `Quantidade de negativos do vetor: ${neg}`
}

let vetor1 = []
criarVetor(vetor1)

console.log(vetor1);
console.log(Negativos(vetor1))