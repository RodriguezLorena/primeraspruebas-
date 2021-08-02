// // // //tengo que dar vacunar contra el covid a mayores de 30 años, 
// // // //pero menores de 50 años. y a niños de 12 a 15 años. Solo cupo femenino.



// // // // function imprimirsI(edad){
// // // //     if (edad >= >30 && edad <=50) {
// // // //         return "vacunemos"
// // // //     }else if ( edad >=12 && edad <= 15){
// // // //         return "vacunemosNiños"
// // // //     }else {
// // // //         return "No cumple con el requisito"
// // // //     }
// // // // }

// // // // for ( let edad = 0; edad <= 120; edad++) {
// // // //     console.log(imprimirsI(edad))
// // // // } 


 
// // //  //quiero que me imprima 5 veces una plabra con un valor numero al lado.   

// // // var imprimir= function(veces, palabra, valor){
// // //     for (i= 1; i <= veces; i++){
// // //         console.log(palabra + valor);
// // //     }

// // // } 
// // // imprimir(4, "hola, como estas?", 23);


// // // // var meses=["ene", "feb", "mar", "abr", "may", "jun", "agos", "sep", "oct", "nov", "dic"];
// // // //     for(let i = 0; i < meses.length; i++){
// // // //         if(meses[i] === "dic"){ 
// // // //             return console.log(meses[i], "feliz cumpleaños")

// // // //         }
        
// // // //         if(i === meses.length -1){
// // // //             console.log("no existe el mes");
// // // //         }

    
// // // // }

// //     //si mamá es menor a 40 años, imprimr "si", de lo contrario, imprimir "no"

// //      function Mom(nameMom, ageMom){
// //          if (ageMom <= 40){
// //          return nameMom + " si"
// //      }
// //          return nameMom + " no"

// //      }
// //      console.log(Mom("Feliza", 57));

// // //quiero que me suene la alarma a las 05
// //      var horas= [1, 2, 3, 4, 5, 6, 7, 8];
// //      for (let i = 0; i < horas.length; i++) {
// //       if (horas[i]=== 5){
// //           console.log(horas[i], "sonar alarma")
// //       }
    
// //      }
// //      console.log(horas)

// //     //¿como hago si quiero que me imprima todo, y a las 5, me diga "sonar alarma";
// //     // quiero que imprima todos los horas y que en la hora 5, me salga el string "sonar alarma"




// // var horas=[1, 2, 3, 4, 5, 6, 7];
// // for (let i = 0; i < horas.length; i++){
// //     if(horas === horas && horas[i] === 5){
// //         console.log(horas ," sonar alarma")
// //     }
// // }

// //metodo filter: retorna los elementos del arreglo que cumplen con la condicion dada
// // en este caso (sobrinas), quiero que me retorne los nombres que tengan menos o hasta 5 letras. 

//  //var sobrinas=["Juliana", "Lucia"];
//  //var result=sobrinas.filter(sobrinas => sobrinas.length <=5);

// // console.log(result);



// const personas = [{
//     name: "Pancho",
//     genero: "masculino",
//     profesion: "Abogado",
//     esRica: false,
//     ciudad: "virasoro",
//     edad: 60,
//     nacionalidad: "Paraguay",
    
//   },
//    {
//     name: "Lindolfo",
//     genero: "masculino",
//     profesion: "Desconocido",
//     esRica: false,
//     ciudad: "virasoro",
//     edad: 70,
//     nacionalidad: "Argentina"
//   },
//    {
//     name: "Hernan",
//     genero: "masculino",
//     profesion: "Abogado",
//     esRica: false, 
//     cuidad: "posadas", 
//     edad: 37,
//     nacionalidad:"Brasil"
//   },
//    {
//     name: "Patricia",
//     genero: "femenino",
//     profesion: "Abogado",
//     esRica: false,
//     ciudad: "posadas",
//     edad: 36, 
//     nacionalidad: "Argentina"
//   }]


//   //coloco manualmente la propiedad del objeto personas(objeto = personas. propiedad= nacionalidad).
//  //declaro una funcion (function nombreDeLaFuncion y los (parametros))
// //   function retornarNacionalidad(arrayFuncional, isFrom){
      
// //     //creo una variable (var o let), con un arreglo vacio [], donde almaceno los datos nuevos.
// //     let national=[];

// //     for(let i = 0; i < arrayFuncional.length; i++){
// //         if(arrayFuncional[i].nacionalidad === isFrom){
// //                                                      //arryFuncional es un parametro que despues a futuro va a ser un arreglo.
// //             national.push(arrayFuncional[i])
// //         }
// //     }
// //     return national
// //   }
// //   console.log(retornarNacionalidad(personas, "Brasil"));
  

// //filtrar los objetos mayores a 50 años.

// // function personasMayores(edad){
// //     let age=[];
// //     for (let i = 0; i <edad.length; i++){
// //         if(edad[i].edad >=50){
// //             age.push(edad[i])

// //         }
// //     }
// //     return age
// // }

// // console.log(personasMayores(personas));


// //quiero solo a las personas de genero femenino que vivan en Posadas.

// // function retornarPosadasFemenino(arraynuevo, generoF, cuidadF){
// //     var mujer=[];
// //     for( let i = 0; i < arraynuevo.length; i++){
// //         if(arraynuevo[i].genero === generoF && arraynuevo[i].ciudad === cuidadF){

// //           mujer.push(arraynuevo[i])
// //         }
// //     }
// //     return mujer
// // }
// // console.log(retornarPosadasFemenino(personas, "femenino", "posadas"))


// /*para agregar un nuevo objeto a el array de bajo de todo el array, ocupo .push. 
//  */

// personas.push({name: "Juliana",
// genero: "Femenino",
// profesion: "Estudiante",
// esRica: true,
// ciudad: "virasoro",
// edad: 7,
// nacionalidad: "Argentina"})

// //console.log(personas);

// /* para agregar un objeto arriba ocupo .unshift*/ 
// personas.unshift({name: "Lucia",
// genero: "femenino",
// profesion: "Desconocido",
// esRica: true,
// ciudad: "virasoro",
// edad: 2,
// nacionalidad: "Argentina"})

// // console.log(personas);

// // console.log(personas.length); //cuantas elementos tengo?
// // console.log(personas[0]); // cual es el elemento [i]?


// /*eliminar un elemento del arreglo*/

// personas.pop(); //pop, elimina solamente el ultimo elemento. 
// console.log(personas);



// //loguiar unicamemente los objetos con el nombre que inicien con L.
// // el metodo slice me identifica o toma un parte del array, indicado por el indice de inicio y un indice final (lo corta)

// //  function devolverL(letra){
// //     for(let i= 0; i < letra.length; i++){
// //       console.log(letra[i].name.slice(0,1))
// //         if(letra[i].name.slice(0,1).toLowerCase() === "l"){
// //             console.log(letra[i])
// //         }
// //         //console.log(letra[i].name.slice(0,1))
// //     }
// // }
// //  devolverL(personas);




// //primero itera los for y despues lo compara para encontrar coincidencias. si las encuentra, lo ejecuta.

// const dollars=[{name:"Hernan", cash: 500}, {name:"Patricia", cash: 600}]

//  function agregarPropiedad() {
     
//    for (let i = 0; i < personas.length; i++) {
//      //console.log("for exterior", i)                      
//      for (let e = 0; e < dollars.length; e++) {
//       //console.log("for interior", e)
//        if (dollars[e].name === personas[i].name) {
//          personas[i].dollar = dollars[e].cash;
//        }
//      }
//    }
//    console.log(personas);
//  }
//  agregarPropiedad();



// creamos un objeto que se llame Blog, que tenga propiedades... una propiedad va a ser "posts". esos "posts", van a ser objetos. y esos objetos van a tener propiedades, que van a tener titulos, body, fecha, autor, comentarios.
// otra propiedad del objeto Blog, va a ser autores.
//una condicion es que solo los que se encuentran en el array autores, van a poder crear posts. 


// const Blog = {
//   autores: [],
//   posts: [],
//   titulo: " ",
// };

// function agragarTitulo(titulo) {
//   Blog.titulo = titulo;
// }
// agragarTitulo("Mi Blog");
// console.log(Blog);

// function agregarAutores(autor) {
//   Blog.autores.push(autor);
// }
// agregarAutores("Frigerio");
// agregarAutores("kaska");
// console.log(Blog);

// function verificar(autores) {
//   for (let i = 0; i < Blog.autores.length; i++) {
//     if (Blog.autores[i] === autores) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(verificar("kaska"));

// function crearPosts(titulo, body, autor){
//   if(verificar(autor)){ 
//     //console.log(autor, "puede crear posts" + agregarObjetosAposts)
//    agregarObjetosAposts(titulo, autor, body)
//   }
//   console.log(autor, "no puede crear Posts")

// }
// crearPosts(null, null, "max")
// crearPosts("my first title", "jahjshhss", "Frigerio")



// //devolver un objeto. creamos un objeto .... (¿por que no desbloquea los parametros de la funcion agragarObjetosAposts)
// function agregarObjetosAposts(titleDePosts, autorDePosts, body){
//   Blog.posts.push({titleDePosts, autorDePosts, body });
// }
// //agregarObjetosAposts({titulo: "my first title", autorDePosts: "Frigerio", body: " "});
// console.log(Blog);



// // let compraRealizada = false;

// // function niño(adicional){
// //   if(compraRealizada === true){
// //     return adicional= 10;
// //   }else{
// //     return adicional = 5
// //   }
  
// // }
// // console.log("darle al niño si compro"(false))



// function num(number){
//   return number * number;
// } 
// console.log(num(5*5))



var car= ["Ford", "Seat", "Mercedes", "BMW", "Audi"];

console.log(car[2]);

car[3]= "Fiat";
console.log(car);

car[4]= ["1", "2", "3"];
 console.log(car);


 var dias=["Lunes", "Martes", "Miercoles", "jueves", "Viernes"];

 /*var eliminado= dias.shift();
 console.log(dias); 

 var eliminadofinal= dias.pop();
 console.log(dias);


 var agregar = dias.push("sabado");
 console.log(dias); */

 /*var eliminarAlgo= dias.splice(2, 1);

 console.log(dias);

var añadir = dias.splice(2, 0, "Miercoles");

console.log(dias); */


var añadirAlgoMas= dias.splice(3, 0, "tomar agua");
console.log(dias);



var cambiar= dias.splice(4, 1, "inicio de finde semana");
console.log(dias);