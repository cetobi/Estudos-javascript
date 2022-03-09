//  Criar uma função para calcular o valor a ser pago de anuidade de uma associação

let Anuidade = (mes, valor) => {
    if(mes > 0 && mes < 13){
        let tempo = mes - 1
        return (valor * ((1+(5/100))**tempo)).toFixed(2)
    } else {
        return 'Mês Inválido!'
    }
}

console.log(Anuidade(10, 50))