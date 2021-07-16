// const personas = [
//     {name:"Mai", age:28},
//     {name:"Lore",age:5},
//     {name:"Pato", age:4},
//     {name:"Ani",age:20},
//     {name:"max",age: 29},
//     {name:"Mau", age: 27}];
  
  // El objetivo de la siguiente funcion es sumar
  // las edades de personas e imprimir solo los mayores a 20


//   function sumar(sumarEdades){
//       let suma= 0;
//       for (let i = 0; i < sumarEdades.length; i++) {

//           if (sumarEdades[i].age > 20) {
//               console.log(sumarEdades[i])
//           }
//         suma=suma + sumarEdades[i].age;  
//       }
//       console.log(suma)
//   }
//  sumar(personas);


/* la siegueinte funcion es para reconocer propiedades de 
los string, tenemos que consologuear solo los que llevan "M",
independiente de que tengan minuscula o mayuscula
 */

//  const personas = [
//     {name:"Mai", age:28},
//     {name:"Lore",age:5},
//     {name:"Pato", age:4},
//     {name:"Ani",age:20},
//     {name:"Max",age: 29},
//     {name:"Mau", age: 27}];
  
//   const otroarray = [{name:"John", age:48},
//   {name:"Lore",age:30}]
//   // El objetivo de la siguiente funcion es sumar
//   // las edades de personas e imprimir solo los mayores a 20
  
//   function resolver(personas){
//     let suma =0;
  
//     for(let i =0; i< personas.length; i++){
     
//       if(personas[i].age > 20){
//         console.log(personas[i])
//       }
//       suma = suma + personas[i].age;
    
//     }
  
//     console.log(suma)
//   }
  
//   resolver(personas)
//   resolver(otroarray)
//   

//      function devolverSiM(array){
   
//     for (let indice = 0; indice < array.length; indice++){
  
//       // // Primera opcion
//       // if(array[indice].name[0] === 'M' || array[indice].name[0] === 'm'){
//       //   console.log(array[indice])
//       // }
  
//       // // Segunda opcion
//       // if(array[indice].name.slice(0,1).toUpperCase() === 'M'){
//       //   console.log(array[indice])
//       // }
  
//       // // Tercera opcion
//       if(array[indice].name.slice(0,1).toLowerCase() === 'm'){
//          console.log(array[indice])
//       // }
  
//       // Cuarta opcion
//       if(array[indice].name[0].toLowerCase() === 'm'){
//           console.log(array[indice])
//       }
    
//     }
//   }
  
//   devolverSiM(personas)
//   devolverSiM(otroarray)



// //buscar metodos de array, typeOf, comparaciones, sumas en javascript, bucles, iteraciones 



//practicas Jueves:

const personas = [{
  name: "Pancho",
  genero: "masculino",
  profesion: "Abogado",
  esRica: false,
  ciudad: "virasoro",
  edad: 60
},
 {
  name: "Lindolfo",
  genero: "masculino",
  profesion: "Desconocido",
  esRica: false,
  ciudad: "virasoro",
  edad: 70
},
 {
  name: "Hernan",
  genero: "masculino",
  profesion: "Abogado",
  esRica: false, 
  cuidad: "posadas", 
  edad: 37
},
 {
  name: "Patricia",
  genero: "femenino",
  profesion: "Abogado",
  esRica: false,
  ciudad: "posadas",
  edad: 36
}]


// function retornaSegunParametros(arrayPersonas, generoQueQueremos, profesionQueQueremos){
//   let nuevoArray= [];
//   for(let i = 0; i < arrayPersonas.length; i++){
//     if(arrayPersonas[i].genero === generoQueQueremos && arrayPersonas[i].profesion === profesionQueQueremos){
//       nuevoArray.push(arrayPersonas[i])
//     }
//   }
//   return nuevoArray
// }

// console.log(retornaSegunParametros(personas,"femenino","Abogado")) // return patricia
// console.log(retornaSegunParametros(personas,"masculino","Abogado")) // 

var personasDeSantotome= [{name: "fulano", ciudad:"virasoro"}, {name: "fulano", ciudad:"posadas"}]
function retornarCiudad(personas, ciudad, edades){
  let city=[];
  for(let i= 0; i < personas.length; i++){
    if(personas[i].ciudad === ciudad && personas[i].edad <= edades){
      city.push(personas[i])
    }
  }
  return city
}

console.log(retornarCiudad(personas,"virasoro", 60));
console.log(retornarCiudad(personasDeSantotome, "posadas"));



/* primero coloco manualmente los objetos (en este caso "ciudad" y "edad", despues creo un var con un arreglo donde voy a almacenar en este caso
let city= [], dentro de la funcion, en este caso / funcion retornarCiudad(aca van los parametros){}/
despues creo un for (recorrrido del arreglo){agrego una codiconal (para que me ejecute el for, con los parametros que le di 
en mi variable retornarCiudad){}

}
*/