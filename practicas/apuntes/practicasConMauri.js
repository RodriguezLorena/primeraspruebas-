// const A = "El Vaticano pidió este martes una “negociación seria” en Venezuela, “que de respuestas a las verdaderas necesidades” de la población, En el marco de 77 asamblea anual de Fedecámaras, el obispo auxiliar de Caracas Ricardo Barreto leyó una carta enviada por el cardenal Pietro Parolin, secretario de Estado de la Santa Sede."
// // Buscar cantidad de "o" que hay en un texto.
// // Restricción: contar mayusculas y minusculas
// // push a nuevo arreglo guardando los indices de cada o.


// let cambiarFormato = A.toLocaleLowerCase();
// console.log(cambiarFormato)

//  let indicesO= [];
// // for(let i = 0; i < cambiarFormato.length; i++){
// //     if (cambiarFormato.charAt(i)=== "o"){
// //          indicesO.push(i);
// //     }
// // }
// // console.log(indicesO)



// let i = 0;
// while(cambiarFormato.charAt(i) !== ".") {
//     if (cambiarFormato.charAt(i) == "o"){
//         indicesO.push(i);
//     }
//     i++
// }
// console.log(indicesO)

// // chartAt: toma letra por letra. 

// // let string = "mauri";
// // let reverso = '';

// // for (let i = 0; i < string.length; i++) {
// //      reverso =  string.charAt(i) + reverso;
// //       console.log(reverso); 
// // }
// //  console.log(reverso);


// let reverso= "";
 
// for (let i= 0; i <A.length; i ++){
//     reverso= A.charAt(i) + reverso;
    
// }
// console.log(reverso);
// //console.log(i);


// // reverso= "";
// // i= 0
// // console.log(i)
// // while(i <= A.length){
// //     reverso = A.charAt(i) + reverso;
// //     i ++
// // }
// // console.log(reverso);


// //reverso sin las vocales. 
// //metodo search... //metodo includer
// // tenemos que devolver el reverso sin vocales. 

// // const A = "El Vaticano pidió este martes una “negociación seria” en Venezuela, “que de respuestas a las verdaderas necesidades” de la población, En el marco de 77 asamblea anual de Fedecámaras, el obispo auxiliar de Caracas Ricardo Barreto leyó una carta enviada por el cardenal Pietro Parolin, secretario de Estado de la Santa Sede."

// // let cambiarFormato = A.toLocaleLowerCase();

// // const vocales = eliminarVocales(cambiarFormato);

// // function eliminarVocales( string){
// //     let sinVocales = string.search("a", "e", "i", "o", "u")
// // }
 

// // reverso= reverso.replace("a", "*")
// //  console.log(reverso)

// // function eliminar(string){
// //     for (let i = 0; i < string.length; i ++) {
// //      (reverso= reverso.replace("a", "/"));
         
// //      }
// //      console.log(reverso)   
// //     }

// // console.log(eliminar(reverso))



// let reversoSinVocales = "";
// for (let i = 0; i <= reverso.length; i++) {
//     if (reverso.charAt(i) != "a" 
//     && reverso.charAt(i) != "e" 
//     && reverso.charAt(i) != "i" 
//     && reverso.charAt(i) != "o" 
//     && reverso.charAt(i) != "u") {
//         reversoSinVocales = reversoSinVocales + reverso.charAt(i);
//     }
    
// }
// console.log(reversoSinVocales)


/* Dado un arreglo de enteros, ejemplo: [12,355,45,14,21,32,10,9,45,1024] . 
Generar 2 nuevos arreglos con aquellos números que cumplen la condición de ser divisibles por 2 y 3. 
Es decir, generar un arreglo con los divisibles por 2 y otro arreglo con los divisibles por 3.
Puede ser que un número cumpla con las 2 condiciones, en ese caso guardarlos en los 2 arreglos. */


// const  enteros= [12,355,45,14,21,32,10,9,45,1024]
// let arrayUno=[];
// let arrayDos=[];


// for( i = 0; i < enteros.length; i ++){
//      if (enteros[i]% 2 == 0){
//          arrayUno.push(enteros[i])
//     }if (enteros[i]% 3 == 0){
//         arrayDos.push(enteros[i])
//     }
// } 
     
//         console.log(arrayUno);
//         console.log(arrayDos);



//         /* sumar en una variable todos los numeros pares de un array*/ 

    
//         const  enterosDos= [12,355,45,14,21,32,10,9,45,1024];
//         var sumar = 0;
//         for(i=0; i <enterosDos.length; i ++){
//             if(enterosDos[i] %2== 0){
//                 sumar = sumar + enterosDos[i]
//             }
//         }
//         console.log(sumar)




//         //sumar los numeros que sean divisibles por 2 o por 5 ||
//         const  enterosTres= [12,355,45,14,21,32,10,9,45,1024]
//         sumar=0;

//         for(i=0; i< enterosTres.length; i ++){
//          if(enterosTres[i]% 2== 0 || enterosTres[i]% 5 == 0){
//              sumar= sumar + enterosTres[i]
//          }
//         }
//         console.log(sumar)


        /* == Es igual a == b
           === Es estrictamente igual a === b
           != Es distinto a != b
           !== Es estrictamente distinto a !== b
           <, <=, >, >=   Menor, menor o igual, mayor, mayor o igual  a <=b
           && Operador and (y) a && b
           || Operador or (o)  a || b
           ! Operador not (no) !a      */

    // Biblioteca Math o clase Math 

// generar un DADO

// function random() {
//     return Math.round(Math.random() * (2000 - 1) + 1);
//   }


// // UTILIZAR UN CICLO WHILE PARA GENERAR UN DADO de 6 caras. 
// let aleatorio= random();
// let dado = 1; 
// let i = 1;
// while(i <=aleatorio){
//     if(dado == 6){
//         dado = 1;
//     }

//     i++;
//     dado = dado + 1;
// }

// console.log("el resultado del dado es : " + dado);       


           // EJERCICIO: CREANDO Contraseñas 

// Dado un array ALFABETO = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
//  Generar Contraseña tomando como indice un numero random que oscile entre 0 y 25. 
// Para ello se deberar crear una FUNCION que retorne la nueva contraseña, pasando como parametro un numero que será el largo del string(longitud de la contraseña)

    


