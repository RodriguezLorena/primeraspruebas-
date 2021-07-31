// OBJETO STRING USANDO METODOS
// RESTRICCIÓN: NO PODER USAR FUNCIONES


// USAR CICLOS FOR Y CICLOS WHILE
// ejemplos de For:
// for (let i = 0; i < "AlgunaCadena".length; i++) {
//     console.log("ITERANDO ALGO: " + i );    
// }

// //ejemplo
// // condicion siempre comparar una variable
// let contador = 0
// while (contador <= 10 ) {
//     console.log("ITERANDO ALGO: " + i );
//     contador++;  
// }


// ejercicios 1:
// "dado un string A = "CUALQUIER TEXTO PUEDE IR ACÁ." como entrada (que siempre finaliza en un punto) , DEVOLVER LA LONGITUD DEL MISMO.
// NO SE PUEDE USAR EL MÉTODO .length | Pista, USAR EL CICLO WHILE ES EL ADECUADO. 





//ejercicios 2:
// Dado un string B = "CUALQUIER TEXTO PUEDE IR ACÁ." de entrada, (que siempre finaliza en un ";") contar la frecuencia  de una letra;
// | SI PUEDEN USAR EL MÉTODO .Length, .chartAt() | FOR. 


//     const B= "cualquier texto puede ir aca;"
//      ind= 0;

//      for( let i = 0; i < B.length; i++){
//          if(B.charAt(i) === "e"){ 
//          ind ++
//      }
//     }
//      console.log(ind)


// //ejercicio 3: Dado un String C = "CUALQUIER TEXTO PUEDE IR ACÁ." DEVOLVER 2 STRINGS, EN UNO DE ELLOS LAS VOCALES, Y EN EL OTRO LAS CONSONANTES
// // EJEMPLO: vocales = 'UAUIEEOUEEIAA' consonantes = 'CLQRTXTPRC' 
// // PERMITIDO método .length .chartAt | permitido ARRAY DE VOCALES ["A","E","I","O","U"] "AEIOU"

// let stringB= "cualquier texto puede ir aca." 
//  let conVocales= "";
//  let sinVocales= "";

//  for(let i= 0; i <= stringB.length; i++){
//    if(stringB.charAt(i) == "a"
//    || stringB.charAt(i) == "e"
//    || stringB.charAt(i) == "i"
//    || stringB.charAt(i) == "o"
//    || stringB.charAt(i) == "u"){
//     conVocales= conVocales + stringB.charAt(i)
//    }else{
//     sinVocales = sinVocales + stringB.charAt(i)
//   }
//  }
// console.log(conVocales);
// console.log(sinVocales);
// //Ejercicio 4: "UNA PERSONA FUE DESORDENADA EN LA VIDA Y ACUMULÓ EN UN STRING D = "AJASKDJ228312EJQD721312JWD823D" LETRAS Y NUMEROS
// // TIENEN LA DIFICIL TAREA DE SEPARAR LOS NUMEROS Y LETRAS EN DOS CADENAS.
// // PERMITIDO método .length .chartAt | PISTA, SE PUEDE PREGUNTAR SI typeOf() luego de un  parseInt()

let stringD="AJASKDJ228312EJQD721312JWD823D"
let enteros= " ";
let letras= " ";
let i= 0;
let auxilar;

while( i <= stringD.length){
auxilar= stringD.charAt(i);
    if(   auxilar !== "0"
       && auxilar !== "1"
       && auxilar !== "2"
       && auxilar !== "3"
       && auxilar !== "4"
       && auxilar !== "5"
       && auxilar !== "6"
       && auxilar !== "7"
       && auxilar !== "8"
       && auxilar !== "9"){
           letras= letras + auxilar;
    }else{ enteros = enteros + auxilar}
         i++
    }


console.log(letras);
console.log(enteros);

// let stringD= "AJASKDJ228312EJQD721312JWD823D"
// let separarIndices= stringD.split("");
// //console.log(separarIndices);

// let arrayNumeros=["1","2", "3", "4", "5", "6", "7", "8", "9"];
let enteros= [];
let letras =[];
//  for(let i= 0; i <= separarIndices.length; i++){
//      separarIndices.includes(arrayNumeros) 
//          enteros = enteros + separarIndices.includes(arrayNumeros)
// }
//      letras = letras + separarIndices}
//  


// console.log(letras);


let stringD= "AJASKDJ228312EJQD721312JWD823D"
let separarIndices= stringD.split("");
//console.log(separarIndices);

let arrayNumeros=["1","2", "3", "4", "5", "6", "7", "8", "9"];

for(let i=0; i <= separarIndices.length; i ++){
   
    for(let e=0; e <= arrayNumeros.length; e ++) {

if(separarIndices[i] !== arrayNumeros[e]){

}
    }

}

// // Ejercicio 5: Dado un texto: Z = "Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring()."
// // DEVOLVER LA CANTIDAD DE PALABRAS Y ADEMAS GENERAR UNA CADENA REVERSO.
// // PISTA: Las palabras se separan en un espacio o en un punto. 


 //const textoZ= "Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring()."
 //let i= 0;
//  let palabras= 0;
  
//  while(i <= textoZ.length){
//   if(textoZ.charAt(i) === " "){
//    palabras = palabras + 1;
//   }
//   i++;
//   }
//   console.log(palabras);


let textoZ= "las cadenas son utiles para almacenar datos";
let reverso= "";
for( let i= 0; i <= textoZ.length; i++){
    reverso= textoZ.charAt(i) + reverso;
}

console.log(reverso)


// const textoZDos= textoZ.split(" ") || (".")
//   console.log(textoZDos);

//  var cantidadDePalabras= textoZDos.length
//   console.log(cantidadDePalabras);
// // //  for(let i = 0 ; i < textoZDos.length; i++){
// // //     let texto= textoZDos[i]
// // //    let textoReverso = textoZDos.reverse();
// // //     if(texto === textoReverso){
// // //         arrayNuevo.push(textoZDos[i])
// // //     }
// // // }
// // //  console.log(arrayNuevo)

//  function stringInvertido(texto){
//   return texto.split(" ").reverse().join(" ");

//  }
//  console.log(stringInvertido(textoZ))

let i= 0;
while( i <= 10){

    i++
}