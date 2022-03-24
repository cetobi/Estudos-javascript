/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo*/

function estaEntre(num, min, max, inclusivo = false) {
    if(inclusivo){
        return num === min || num === max ? true : num > min && num < max
    }else{
        return num > min && num < max
    }
}
  
  console.log(estaEntre(5,1,10))
  console.log(estaEntre(5,1,10,true))
  console.log(estaEntre(9,9,10,true))
  console.log(estaEntre(9,9,10))