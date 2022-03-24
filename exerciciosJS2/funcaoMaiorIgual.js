//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorIgual(num1, num2){
    return num1 === num2 ? true : num1 > num2 ? true : false
  }
  
  console.log(maiorIgual(2, 2))
  console.log(maiorIgual(3, 2))
  console.log(maiorIgual(2, 3))
  console.log(maiorIgual(3, 'word'))