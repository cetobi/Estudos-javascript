/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

function criarVetor(vetor){
    let a = vetor.length
    while(a < 5){
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

let multVetor = (vetor, num) => {
	let res = []
	for(let i=0; i<vetor.length; i++){
		res.push(vetor[i]*num)
	}
	return res
}

let maiorCinco = (vetor, num) => {
	let res = []
	for(let i=0; i<vetor.length; i++){
		if(vetor[i]>5) {		
			res.push(vetor[i]*num)
		}
	}
	return res
}

let vetor1 = []
criarVetor(vetor1)
console.log(vetor1);

console.log(multVetor(vetor1, 3))
console.log(maiorCinco(vetor1, 3))