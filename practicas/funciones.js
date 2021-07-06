// //operadores de comparacion
//  //> , < , >= , <= // mayor que, menor que, mayor o igual, menor o igual.
// // == , === // igual que , igual estricto (strict)

// //flujo de control
// //if
// //if else
// //switch
// // operadores logicos
// //&& -> "and" "y"
// //|| -> "or" "o"
// //! -> "not" "no"

// // Bucles (Loops)
// //for , while
// // for (let i = 0 ; i < 10 ; i++ ){
//     //declaracion de la variable| exprecion condicional| incremento de la variable|
//     // console.log(i)
// //}

// function obtenerNumeroMayor(x,y){

//         if(x>y){
//             return x
//         }else{
//             return y
//         }
// }

// console.log(obtenerNumeroMayor(90,150))

//funcion que determine que una persona tenga o no 18 años

// function siEsMayor(edad) {

// if (edad >=18) { 
//     return true

    
// }else{
//     return false
// }
   
// }

// console.log(siEsMayor(56))
// console.log(siEsMayor(12))


//funcion que salude en english si el idioma que pasa como parametro es english, salude en portugues, si el idioma es portugues... en caso contrario, devolver el saludo en spanish.

function saludarSegunELidioma(idioma) {
    if (idioma === "English") {
        return "hi, how are yuo?"
        
    }else if (idioma === "portugues") {
        return "oi, como vai"
        
    } else {
        return "hola, como estas?"
        
    }
    
}
console.log(saludarSegunELidioma("English"))
console.log(saludarSegunELidioma("portugues"))
console.log(saludarSegunELidioma("frances"))

