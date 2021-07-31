//crear un array de este texto, colocar los palindromos en un arreglo.
//metodos de arreglo split y reverse
// en el if preguntar si reverse es verdadero sino, no pasa nada.



// const  text  = "Algo menem abba itati fuego colina"

// const separar = text.split(" ")
// console.log(separar);



//  let pasaLaCondicion=[];

//  for(let i =0; separar.length -1; i++ ){
//     if(separar[i].split(" ").reverse() === separar[i].length){
//         pasaLaCondicion.push(separar[i])
//      }
//   }
//  console.log(pasaLaCondicion)



// const texDos = ["Algo", "menem", "abba", "itati", "fuego", "colina"]

// function obtenerPalindromos(){

//     for( let i =0 ; i < separar.length -1; i++){

//         for( let x = 0; x < texDos.length -1; x ++){

//             if (texDos[x].reverse === separar[i]){
//                 pasaLaCondicion.push(texDos[x].split)

//             }
//         }
//     }
    
// }
// console.log(pasaLaCondicion)



const  text  = "Algo menem abba itati fuego colina"

const separar = text.split(" ");
console.log(separar)
const palindromos= text.split(" ").reverse();
console.log(palindromos)

let siPasa=[]



    for( let i =0; i < separar.length -1; i++){
        if(separar[i].search(" ")){
            siPasa.push(separar[i])
        }
    }

console.log(siPasa)


const array= ["lorena", "menem", "itati"]

//crear una variable que tenga un array vacio, por ej. let extraer palindromo = []

let extraerPalindromo=[];

for(let i = 0 ; i < array.length; i++){
    let nombre = array[i]
    let nombreReverso = nombre.split("").reverse().join("");
    if(nombre === nombreReverso){
        extraerPalindromo.push(array[i])
    }
}
console.log(extraerPalindromo)


//TAREA: buscar algoritmo de  busqueda lineal
// buscar algoritmo de busqueda centinela
//buscar algoritmo de busqueda binaria
// conceptos 


