/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(valor, num) {
    let vetor = []
    for(let i=0; i<num; i++){
      vetor.push(valor)
    }
    return vetor
  }
  
  console.log(repetir(7, 5))
  console.log(repetir('word', 3))
  console.log(repetir([1,2], 2))
  console.log(repetir({idade: 10}, 3))