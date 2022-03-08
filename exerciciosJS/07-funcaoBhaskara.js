// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara

function Bhaskara(ax2, bx, c){
    let delta = (bx**2)-4*ax2*c
    if(delta < 0){
        console.log('Delta negativo!');
    }else{
        let x1 = (-bx + delta)/(2*ax2)
        let x2 = (-bx - delta)/(2*ax2)

        return resp = [x1, x2]
    }
}

console.log(Bhaskara(3,-15,12));
console.log(Bhaskara(9,-24,16));
