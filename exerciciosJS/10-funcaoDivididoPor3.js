/* 
Crie uma função que verifica se um número inteiro passado como parêmetro é 
divisível por 3 e retorne true ou false.
*/

function divPor3(num) {
    let resto = num%3
    if(resto === 0){
        return true
    }else{
        return false
    }
}

console.log(divPor3(15))
console.log(divPor3(10))