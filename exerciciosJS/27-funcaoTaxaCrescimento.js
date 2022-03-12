/*  Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function Crescimento(altura1, taxa1, altura2, taxa2){
    let ano = 0
    if(altura1 === altura2){
        if(taxa1 > taxa2){
            return 'Criança 1 ultrapassara a altura da Segunda em 1 ano.'
        }
        else if(taxa1 < taxa2){
            return 'Criança 2 ultrapassara a altura da Primeira em 1 ano.'
        }else{
            return 'Nenhuma criança irá ultrapassar a outra.'
        }
    }
    else if(altura1<altura2){
        if (taxa1 > taxa2) {
            while (altura1 < altura2) {
                altura1 += taxa1
                altura2 += taxa2
                ano++
            }
            return `Criança 1 ultrapassara a altura da Segunda em ${ano} anos.`
        }else{
            return 'Criança 1 não irá ultrapassar a Segunda.'
        }
    }else{
        if (taxa1 < taxa2) {
            while (altura1 > altura2) {
                altura1 += taxa1
                altura2 += taxa2
                ano++
            }
            return `Criança 2 ultrapassara a altura da Primeira em ${ano} anos.`
        }else{
            return 'Criança 2 não irá ultrapassar a Primeira.'
        }
    }
}

console.log(Crescimento(15,2,15,2))
console.log(Crescimento(13,1,13,2))
console.log(Crescimento(14,2,12,3))
console.log(Crescimento(10,3,16,1))
console.log(Crescimento(11,2,16,3))
