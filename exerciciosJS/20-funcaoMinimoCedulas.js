/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

var Exibir = (quantia, nota) => quantia > 0 ? console.log(`${quantia} nota(s) de R$ ${nota}. `) : null

function Cedulas(valor) {
    let i, div, cem, cinquenta, dez, cinco, um
    while (valor > 0.9) {
        switch (true) {
            case valor >= 100:
                div = valor / 100
                cem = Math.floor(div)
                i = cem * 100
                i !== 0 ? valor -= i : valor = i
                break
            case valor >= 50:
                div = valor / 50
                cinquenta = Math.floor(div)
                i = cinquenta * 50
                i !== 0 ? valor -= i : valor = i
                break
            case valor >= 10:
                div = valor / 10
                dez = Math.floor(div)
                i = dez * 10
                i !== 0 ? valor -= i : valor = i
                break
            case valor >= 5:
                div = valor / 5
                cinco = Math.floor(div)
                i = cinco * 5
                i !== 0 ? valor -= i : valor = i
                break
            case valor >= 1:
                div = valor / 1
                um = Math.floor(div)
                i = um * 1
                i !== 0 ? valor -= i : valor = i
                break
            default:
                console.log('Erro!');
        }
    }
    Exibir(cem, 100)
    Exibir(cinquenta, 50)
    Exibir(dez, 10)
    Exibir(cinco, 5)
    Exibir(um, 1)
}

Cedulas(2997)