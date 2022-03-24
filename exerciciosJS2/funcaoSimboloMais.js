/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(num) {
    let str = ''
    for (let i = 0; i < num; i++) {
      str += '+'
    }  
    return str
  }
  
  console.log(simboloMais(3))
  console.log(simboloMais(6))