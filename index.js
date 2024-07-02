// const prompt = require("prompt-sync")({sigint:true});

// #### 6-A #### //

let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]; // ref. todos.
let somaNotas = 0;
let maiorNota = notas[0]; // ref. B
let notasAcimaMedia = 0 // ref. C
let notasAbaixoMedia = 0 // ref. D
// let somaNotas = +0;

// function sumNotas(arrey){                          // Função para somar as notas percorrendo o arrey notas //
//     for(i = 0; i < arrey.length;i++){
//         somaNotas += +arrey[i];
//     }
//     console.log(somaNotas);
// }

// sumNotas(notas);

// #### 6-B #### //


// function achaMaiorNota(arrey){
//     for(i = 0; i < arrey.lenght; i++){
//         if(arrey[i] > maiorNota){
//             maiorNota = arrey[i];
//         }
//     }
//     console.log("A maior nota é: "+maiorNota);
// }

// achaMaiorNota(notas);


// #### 6-C #### //

// function contarNotasAcimaMedia(arrey){
//     for(i = 0; i < arrey.length; i++){
//         if(arrey[i] >= 6) {
//             notasAcimaMedia++
//         }
//     }
//     console.log(notasAcimaMedia);
// }

// contarNotasAcimaMedia(notas);

// #### 6-D #### //

// function incluirNotaEImprimir(arrey){
//     arrey.push(8.0);
//     for ( i = 0; i < notas.length; i++){
//         console.log(notas[i]);
//     }
// }

// incluirNotaEImprimir(notas);

// #### 6-E #### //

// function contarNotasAbaixoMedia(arrey){
//     for(i = 0; i < arrey.length; i++){
//         if(arrey[i] < 6) {
//             notasAbaixoMedia++
//         }
//     }
//     console.log(notasAbaixoMedia);
// }

// contarNotasAbaixoMedia(notas);