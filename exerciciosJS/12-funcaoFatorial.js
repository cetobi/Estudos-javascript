//Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num){
    let fator = []
    if(num === 0){
        console.log('1');
    }else{
        let n = num+1
        for(let i=0; i<num; i++){
            n--
            fator.push(n)
        }
        var val = num
        for(let i=1; i<fator.length; i++){
            val *= fator[i]
        }
    }
    return val
}

console.log(fatorial(7));