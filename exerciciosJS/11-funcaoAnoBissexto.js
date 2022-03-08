// elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function Bissexto(ano) {
    let quatro = ano % 4
    let cem = ano % 100
    let quatrocentos = ano % 400

    if(quatro === 0 && cem !== 0){
        return true
    }else if(quatrocentos === 0){
        return true
    }else{
        return false
    }
}

console.log(Bissexto(2015))
console.log(Bissexto(2019))
console.log(Bissexto(2022))
console.log(Bissexto(2024))
console.log(Bissexto(1988))
console.log(Bissexto(2044))