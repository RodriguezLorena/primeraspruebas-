//primer ejercicio

// function numDigits(num){
//     // Aqui va tu codigo
//     return(num.toString().length);
//   }
  
// console.log(numDigits(345))

//   //segundo Eejcicio

//   function object(text, num, numReal){

  
//     const obj = { 
//      texto: text,
//      numeroEnetero: num, 
//      numeroReal: numReal}
    
//   //   // no debe modificar el return
//   return obj;
//  }
//  console.log(object())


//  // tercer ejercicio

//   const arreglo = [
//     {"elem1": object()}, 
//     {"elem2": object()}, 
//     {"elem3": object()}, 
//     {"elem4": object()}, 
//     {"elem5": object()}, 
//     {"elem6": object()}, 
//     {"elem7": object()}, 
//     {"elem8": object()}, 
//     {"elem9": object()}, 
//     {"elem10": object()},
//     {"edad": object()}
//   ];
  
//   console.log(arreglo);

//   // cuarto ejercio
  
//   function hasName(obj){
//     // Aqui va tu codigo
//     if(obj[""]=== obj){
//       return true
//     }

//   return false
  
//   }
// console.log(hasName([]))


// // quinto ejercicio

// function hasAge(obj){
//   // Aqui va tu codigo
//   if(obj === "edad"){
//     return true
//   }
//   return false
// }
// console.log(hasAge("hshs"));


// //sexto ejercicio


// function hasPhone(obj){
//   // Aqui va tu codigo
//   if(obj === "telefono"){
//     return true
//   }
// return false
// }
// console.log(hasPhone("jdnddsddsld"));


// // septimo ejercicio




//Practicas con Mau:

//recibimos un array de texto
//["ayala, "


//quiero que generen un nuevo elemento de las palabras que cumplen la condicion, aparte de que tengan una "u" sean menor a 5.
//hacer dos arreglos. uno que cumplan la condicion y otro que no cumplen la condicion. 

//metodo split y el metodo search(son propios de los strign)


const text = "En el caso de la compañía farmacéutica norteamericana, que en alianza con la empresa de biotecnología alemana BioNTech desarrollaron la primera vacuna de ARN mensajero en ser aplicada en los brazos de millones de personas por primera vez en la historia de la ciencia, desde Pfizer reiteraron que su formulación funciona contra la mutación Delta e incluso agregaron que planean estudiar una fórmula pensada y dirigida contra esta variación del SARS-CoV-2. Informaron que lanzarán ensayo"

const array= text.split(" ");
console.log(array);

let arrayUno= [];
let arrayDos= [];

for (i= 0; i < array.length -1; i ++){
  if (array[i].search("u") >=0 && array[i].length <= 5){
    arrayUno.push(array[i])
    
  }else {
    arrayDos.push(array[i])
  }
  
}
console.log(arrayUno )
console.log(arrayDos )








