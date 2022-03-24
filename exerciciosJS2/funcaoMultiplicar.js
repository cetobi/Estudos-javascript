/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplicar(num1, num2) {
    let res = 0
    if(num1 >= 0 && num2 >= 0){
      for(let i=0; i<num2; i++){
        res += num1
      }
    }
    return res
  }
  
  console.log(multiplicar(5, 5))