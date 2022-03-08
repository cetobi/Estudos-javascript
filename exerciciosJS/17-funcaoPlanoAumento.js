/*
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
*/

function Promocao(plano, salario) {
    let novoSalario = 0
    switch(plano){
        case 'A':
            novoSalario = salario*0.1+salario
            console.log(`Seu novo salário é ${novoSalario}`)
            break
        case 'B':
            novoSalario = salario*0.15+salario
            console.log(`Seu novo salário é ${novoSalario}`)
            break
        case 'C':
            novoSalario = salario*0.2+salario
            console.log(`Seu novo salário é ${novoSalario}`)
            break
        default:
            console.log('Plano Inválido!');
    }
}

Promocao('A', 2500)
Promocao('B', 2500)
Promocao('C', 2500)
Promocao('D', 2500)