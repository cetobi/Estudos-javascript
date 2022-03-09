 /*
 Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional
 */

let Convenio = (idade) => {
    let adicional = 0
    switch (true) {
        case idade <= 10:
            adicional = 80
            break
        case idade > 10 && idade <= 30:
            adicional = 50
            break
        case idade > 30 && idade <= 60:
            adicional = 95
            break
        case idade > 60:
            adicional = 130
            break
        default:
            console.log('Idade Inválida!');
    }
    adicional !== 0 ? console.log(`Valor convenio: ${adicional + 100}`) : null
}

 Convenio(5)
 Convenio(22)
 Convenio(55)
 Convenio(73)
 Convenio('a')