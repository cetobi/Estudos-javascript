/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

/*let texto1 = 'Bolo'
let texto2 = 'Lobo'

console.log(texto1.charCodeAt(0));


function stringIgual(txt1, txt2) {
    txt1 = txt1.toLowerCase()
    txt2 = txt2.toLowerCase()

    txt1 = txt1.split('')
    txt2 = txt2.split('')
    
    if(txt1.length >= txt2.length){
        for(let i=0; i<txt2.length; i++){
            for(let j in txt1){
                j === txt2[i] ? igual++ : null
            }
        }
    }else{

    }
}

stringIgual(texto1, texto2)*/

function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))