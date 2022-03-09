// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.

let Media = (cod, n1, n2, n3) => {
    let media = ((4*n1)+(3*n2)+(3*n3))/10
    
    console.log(`Código do Aluno: ${cod}
    Nota 1: ${n1}
    Nota 2: ${n2}
    Nota 3: ${n3}
    Média: ${media.toFixed(2)}
    Status: ${media<5 ? 'REPROVADO!' : 'APROVADO!'}`)
}

Media(01,9,5.7,8.3)
Media(02,6.5,3.5,4.2)