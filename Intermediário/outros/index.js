let height = 200;
let vetor = Math.floor(Math.random() * (21 + 1) + 1);
let resultado = 0;

// if(vetor > 3 && vetor <= 6){
//     height = 350;
// }else if(vetor > 6 && vetor < 9){
//     height = 450;
// }else{
//     height = 550;
// }

if(vetor > 3){
    height += 150;

    if(vetor > 6 && vetor < 9){
        height += Math.round((vetor / 3)) * 100;
    }else if(vetor >= 9){
        height += 100;
        height += Math.round((vetor / 3)) * 100;
    }
}

console.log("tamanho do vetor", vetor);
console.log("altura da div", height);
