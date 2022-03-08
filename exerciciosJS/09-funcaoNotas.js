/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno.
*/

function Nota(num) {
    if(num < 38){
        console.log(`Reprovado!!! Nota: ${num}`);
    }
    else{
       let resto = num%5
       if(resto <= 3) {
           while(num%5 !== 0){
               num++
           }
       }
       console.log(`Aprovado!!! Nota: ${num}`);
    }
}

Nota(90)
Nota(38)
Nota(23)
Nota(59)
Nota(79)
