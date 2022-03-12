/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/


function getInteiroAleatorioEntre(min, max) {
    const numero = Math.random() * (max - min) + min
    return numero
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

let Notas = (vetor) => {
	let conceitos = []
	for(let i=0; i<vetor.length; i++){
		switch(true) {
			case vetor[i] >= 0 && vetor[i] < 5:
				conceitos.push('D')
				break
			case vetor[i] >= 5 && vetor[i] < 7:
				conceitos.push('C')
				break
			case vetor[i] >= 7 && vetor[i] < 9:
				conceitos.push('B')
				break
			case vetor[i] >= 9 && vetor[i] <= 10:
				conceitos.push('A')
				break
			default:
				null
		}
	}
	return conceitos
}

let mostrar = (a) => {
	for(let i=0; i<a.length;  i++){
		console.log(a[i].toFixed(2))
	}
}

let vetor1 = []
criarVetor(vetor1)

mostrar(vetor1)
console.log(Notas(vetor1))