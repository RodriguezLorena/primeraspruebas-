// // // //operadores de comparacion
// // //  //> , < , >= , <= // mayor que, menor que, mayor o igual, menor o igual.
// // // // == , === // igual que , igual estricto (strict)

// // // //flujo de control
// // // //if
// // // //if else
// // // //switch
// // // // operadores logicos
// // // //&& -> "and" "y"
// // // //|| -> "or" "o"
// // // //! -> "not" "no"

// // // // Bucles (Loops)
// // // //for , while
// // // // for (let i = 0 ; i < 10 ; i++ ){
// // //     //declaracion de la variable| exprecion condicional| incremento de la variable|
// // //     // console.log(i)
// // // //}

// // // function obtenerNumeroMayor(x,y){

// // //         if(x>y){
// // //             return x
// // //         }else{
// // //             return y
// // //         }
// // // }

// // // console.log(obtenerNumeroMayor(90,150))

// // //funcion que determine que una persona tenga o no 18 años

// // // function siEsMayor(edad) {

// // // if (edad >=18) { 
// // //     return true

    
// // // }else{
// // //     return false
// // // }
   
// // // }

// // // console.log(siEsMayor(56))
// // // console.log(siEsMayor(12))


// // //funcion que salude en english si el idioma que pasa como parametro es english, salude en portugues, si el idioma es portugues... en caso contrario, devolver el saludo en spanish.

// // function saludarSegunELidioma(idioma) {
// //     if (idioma === "English") {
// //         return "hi, how are yuo?"
        
// //     }else if (idioma === "portugues") {
// //         return "oi, como vai"
        
// //     } else {
// //         return "hola, como estas?"
        
// //     }
    
// // }
// // console.log(saludarSegunELidioma("English"))
// // console.log(saludarSegunELidioma("portugues"))
// // console.log(saludarSegunELidioma("frances"))







// // || o
// // && y
// // ! negacion

// // if // for

// // function  esPrimo(numeroPasadoEsPrimo) {
// //   // Es numero que es divisible por si mismo y por 1
// //   // devolver true si es primo, devolver false sino.
// // }

// function fizzBuzz(numero){
//     // Si "numero" es divisible entre 5, devuelve "fizz"
//     // Si "numero" es divisible entre 3, devuelve "buzz"
//     // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  
//     if(numero % 5 === 0 && numero % 3 === 0){
//       return "fizzbuzz"
//     }
  
//     if(numero % 5 === 0){
//       return "fizz"
//     }
    
//     if(numero % 3 === 0){
//       return  "buzz"
//     }
  
//   }
  
//   function estaEntreLaEdadDeJuLiYLaEdadDeHernan(numero){
//     // Devuelve true si el numero esta entre la edad Juli: 7 , la edad: 37, sino devuelve false.
//     if(numero >= 7 && numero <= 37){
//       return true
//     }else{
//       return false
//     }
//   }
  
//   // console.log(estaEntreLaEdadDeJuLiYLaEdadDeHernan(15)); // true
//   // console.log(estaEntreLaEdadDeJuLiYLaEdadDeHernan(100))
  
//   function devuelveTrueSiElNumeroEs10o20(numero){
//     if(numero === 10 || numero === 20){
//       return true
//     }
//     return false
//   }
  
//   // console.log(devuelveTrueSiElNumeroEs10o20(20));
//   // console.log(devuelveTrueSiElNumeroEs10o20(5));
  
  
//   function devuelveTrueSiElNumeroTieneTresDigitos(numero){
//     if(numero >= 100 && numero <= 999){
//       return true
//     }
//     return false
//   }
  
//   // console.log(devuelveTrueSiElNumeroTieneTresDigitos(9)) // false
//   // console.log(devuelveTrueSiElNumeroTieneTresDigitos(99))// false
//   // console.log(devuelveTrueSiElNumeroTieneTresDigitos(100))// true
//   // console.log(devuelveTrueSiElNumeroTieneTresDigitos(500))// true
//   // console.log(devuelveTrueSiElNumeroTieneTresDigitos(1000))// false
  
//   function devuelveTrueSi(primerNumero, segundoNumero){
//     // devuelve true  si los dos numeros son negativos
  
//     if(primerNumero < 0 && segundoNumero < 0){
//       return true
//     }
//     return false
  
//   }
  
//   // console.log(devuelveTrueSi(-34,42)); // false
//   // console.log(devuelveTrueSi(-3,-1)); // true
  
//   const pato = {
//     name: "Patricia",
//     age: 27,
//     genre: "female"
//   }
  
//   const hernan = {
//     name: "Hernan",
//     age: 37,
//     genre: "male"
//   }
  
//   const maxi = {
//     name: "Lindolfo",
//     age: 29,
//     genre: "male"
//   }
  
//   const lore = {
//     name: "Lorena",
//     age: 24,
//     genre: "female"
//   }
  
//   function envioEmailFiesta(objeto){
//     // Si es mujer y tiene más de 30 devuelve true
//     // Su es hombre y tiene menos de 30 devulve true
//     // Caso contrario devulve false
  
//     if(objeto.age > 30 && objeto.genre === "female"){
//       return true
//     }
//     if(objeto.age < 30 && objeto.genre === "male"){
//       return true
//     }  
  
//     return false
//   }
  
  
//   const nombreDelaFuncionaaaaaaaaa = (parametro) => {}
//   // Array
//               //    0    1        2           3     4            5                         6
//   // const arreglo = [1,"Hola",{ name: "Maxi"}, true,false, function nombreDelaFuncion(){}, [1,2]]
//   // .length Nos dice la extension del array(O nmumero de elementos en el arreglo)
//   // .push Es un meyodo de array para insertar elementos al final del mismo.
//   // .unshit Agrega elemento al principio del arreglo/array
//   // const clientes = [{
//   //   name: "Patricia",
//   //   age: 27,
//   //   genre: "female"
//   // },{
//   //   name: "Hernan",
//   //   age: 37,
//   //   genre: "male"
//   // },{
//   //   name: "Lindolfo",
//   //   age: 29,
//   //   genre: "male"
//   // },{
//   //   name: "Lorena",
//   //   age: 24,
//   //   genre: "female"
//   // }]
//   // {{{}}}
  
//   // // console.log(clientes.length) // Nos devuelve la cantidad de elementos en el array
  
//   // clientes.push({
//   //   name: "Maiten",
//   //   age: 20,
//   //   genre: "female"
//   // })
//   // // console.log(clientes.length)
//   // // console.log(clientes[4])
//   // console.log(clientes[0])
  
//   // clientes.unshift({
//   //     name: "Mauri",
//   //     age: 12,
//   //     genre: "male"
//   // })
  
  
  
//   // console.log(clientes[0])
//   // console.log(clientes[0])
  
//   // let friends = ["Patricia", "Lorena", "Anahi", "Maiten", "Mauricio","Juliana", "Lucy"];
  
//   // console.log("Amigos de Max: ", friends);
  
//   // function eliminarAmigo(amigo){
//   //   let amigosPosta = [];
//   //   for (let i = 0; i < friends.length; i++) {
//   //     if(friends[i] !== amigo){
//   //       amigosPosta.push(friends[i])
//   //     }
//   //   }
//   //   friends = amigosPosta;
//   // }
  
//   // eliminarAmigo("Mauricio");
//   // console.log("Amigos de Max: ", friends);
  
//   // let carrito = [];
  
//   // console.log(carrito)
  
//   // function agregarAlCarrito(producto){
//   //   carrito.push(producto)
//   // }
  
//   // function vaciarCarrito(){
//   //   carrito = []
//   // }
  
//   // function obtenerTotal(){
//   //   let total = 0;
//   //   for (let i = 0; i < carrito.length; i++) {
//   //     total += carrito[i].precio
//   //   }
  
//   //   return total
//   // }
  
//   // agregarAlCarrito({
//   //   producto: "Yerba",
//   //   precio: 1000
//   // })
  
//   // console.log(carrito)
  
//   // agregarAlCarrito({
//   //   producto: "Agua",
//   //   precio: 10
//   // })
  
//   // console.log(carrito)
//   // const total = obtenerTotal();
//   // console.log(total)
  
//   // vaciarCarrito();
  
//   // console.log(carrito)
  
//   // const otroTotal = obtenerTotal();
//   // console.log(otroTotal)

// //mini carrito de pedidos de clientes de Morena.
// // [] {} condicionales, operadores, funciones
// // inicializar un carrito.

const morena={
  name: "Morena",
  precio: 450
}

const pizzaNapolitana={
  name: "Pizza Napolitana",
  precio: 500
}

const milanesa= {
  name: "Milanesa Especial",
  precio: 600
}

const papasFritas={
  name: "Papas Gratinadas",
  precio: 350
}
let productos= [papasFritas, pizzaNapolitana, milanesa, morena];
let cliente= {
  name:"fulano de tal",
  carrito : [],
  total: 0
}

// console.log(productos)

function mostrarCarta(product){
  console.log("Esta es la carta de Morena");
  console.log(product)
}
mostrarCarta(productos)

function agregarAlCarritoDeCliente(usuario, productoNuevo) {
    usuario.carrito.push(productoNuevo)
    calcularTotal(usuario)
}
//aca ejecutamos agregarAlCarritoDeCliente
console.log("#### Primera ejecucion ####")
agregarAlCarritoDeCliente(cliente, milanesa)
agregarAlCarritoDeCliente(cliente, milanesa)
console.log("#### Segunda ejecucion ####")
agregarAlCarritoDeCliente(cliente, pizzaNapolitana)
console.log("#### Tercera ejecucion ####")
agregarAlCarritoDeCliente(cliente,papasFritas )


// cliente.total//acceder a propiedades por notacion de punto(poner .)
// cliente["total"]//tambien funciona (abrindo corchetes [] mas comillas dentro)


function calcularTotal(client) {
  let totalAuxiliar = 0;
  for (let i = 0; i < client.carrito.length; i++) {

    totalAuxiliar = totalAuxiliar + client.carrito[i].precio

  }
  client.total = totalAuxiliar
  console.log(client);

}
// calcularTotal(cliente)

function eliminarDelCarrito(usuario, productoAEliminar){
    let carritoAuxiliar = [];
    let noOcurrioElCambio = true;
    for (let i =0; i < usuario.carrito.length; i++) {

        if(noOcurrioElCambio === true && usuario.carrito[i].name === productoAEliminar.name){
            noOcurrioElCambio= false;
        }else{
            carritoAuxiliar.push(usuario.carrito[i])
        }
    }
    cliente.carrito = carritoAuxiliar;
    calcularTotal(cliente)
}

console.log("#### Cuarta ejecucion ####")
eliminarDelCarrito(cliente,milanesa)



