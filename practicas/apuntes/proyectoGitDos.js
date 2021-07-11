// // // // //Arrays: tipo de datos para almacenar secuencias de valores. Se escribe una lista de valores, entre corchetes, separados por comas.

// // // // var listaDeUtiles=["lapiz", "cuaderno", "tijera", "carpeta"];
// // // // listaDeUtiles[3]= "cuadernillo";

// // // // console.log(listaDeUtiles);

// // // // var compras=["braed", "water", "sugar"];
// // // // compras[3]= "milk";
// // // // console.log(compras);

// // var compras= [
// //              ["yerba", 300],
// //              ["tea", 50],
// //              ["milk", 100],
// // ];
// // console.log(compras[0][1])

// // // bill= 50
// // // taxImpu = 0.1
// // // friends= 5

// const restaurantBill = (bill) => {
//     const tax= bill * 0.1
//     const total = bill + tax;
//     return "$" +(total / 5);
// }
// console.log(restaurantBill(50));
// // function nombreFuncion() { }
// // () => { }

// // const precioHelado = (precioHelado) => {
// //     if (precioHelado < 15) {
// //         return ("compremos")

// //     } else {
// //       return ("no compremos")
// //     }
// // }
// // console.log(precioHelado(18))

// // for (var number = 1; number <= 100; number++) {
// //     if (number % 3 === 0 && number % 5 === 0) {
// //         console.log("fizzBuzz");
// //     } else if (number % 3 === 0) {
// //         console.log("fizz");
// //     } else if (number % 5 === 0) {
// //         console.log("buzz");
// //     }else {
// //         console.log(number);
// //     }
// // }

var tableSize = 8;
var designing = "";

for (var row = 1; row <= tableSize; row++){
  for (var column = 1; column <= tableSize; column++){
    if ((column + row) % 2 === 0) {
      designing += " ";
    } else {
      designing += "#";
    }
  }
  designing += "\n"
}

console.log(designing);

