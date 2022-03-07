/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, juros, tempo){
    juros /= 100
    return capitalInicial*juros*tempo+capitalInicial
}

function jurosComposto(capitalInicial, juros, tempo){
    juros /= 100
    return capitalInicial*(1+juros)**tempo
}

console.log(jurosSimples(2000, 10, 2).toFixed(2))
console.log(jurosComposto(2000, 10, 2).toFixed(2))