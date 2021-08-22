/*1. crear una función que recibe como parametro 2 numeros a y b, retornar el mayor; en el caso de que sean iguales
retornar el mensaje "A Y B SON IGUALES"*/
function num(a, b) {
  if (a === b) {
    return " son iguales";
  }
  if (a > b) {
    return "El numero " + a + " es mayor a  " + b;
  } else {
    return b + " es mayor a " + a;
  }
}

//console.log(num(60, 60));
console.log(num(10, 35));
//console.log(num(30, 40 ));

/*2.UTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS 
INTRODUCIDOS HASTA INTRODUCIR  UN NUMERO NEGATIVO, Y DE AHÍ 
MOSTRAR EL RESULTADO (USAR PROMPT,parseInt y ejecutarlo en el navegador)*/
let a = parseInt(prompt("ingrese un numero"));
let acumulador = 0;
let contador = 0;

while (a >= 0) {
  acumulador = acumulador + a;
  contador++;

  a = parseInt(prompt("ingrese un numero"));
}

console.log("la suma es igual a " + acumulador);
console.log("el promedio es " + acumulador / acumulador);

/*3. Hacer una funcion que recibe como parametro un min y un max, siendo min y max enteros, 
retornar todos los numeros que están entre esos parametros.
Por ejemplo min: 2 , max: 10, deben retornar: 3 4 5 6 7 8 9*/

function entreNum(min, max) {
  let num = [];
  for (let i = min; i <= max; i++) {
    if (i > min && i < max) {
      num.push(i);
    }
  }
  return num;
}
console.log(entreNum(10, 35));

/*4. Hacer una funcion que devuelva todos los numeros impares 
entre dos numeros enteros. 
ejemplo, entre 1 y 10: se debe retornar: 3,5,7,9*/

function numerosImpares(uno, dos) {
  let imp = [];
  for (let i = uno; i <= dos; i++) {
    if (i % 2 == 1) {
      imp.push(i);
    }
  }
  return imp;
}

console.log(numerosImpares(1, 10));

let num1 = parseInt(prompt("ingrese un numero inicial "));
let num2 = parseInt(prompt("ingrese un numero final "));
let auxiliar;

if (num1 > num2) {
  auxiliar = num1;
  num1 = num2;
  num2 = auxiliar;
}
for (var i = num1; i <= num2; i++) {
  if (i % 2 == 1) {
    console.log(i + " ");
  }
}

/*5. realizar una funcion que recibe un numero entero y devuelve en un 
array todos los numeros divisores de ese numero.*/
function divisor(num) {
  let divisores = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      divisores.push(i);
    }
  }
  return divisores;
}
console.log(divisor(15));

let num = 15;
let divisores = [];
for (let i = 0; i < num; i++) {
  if (num % i == 0) {
    divisores.push(i);
  }
}
console.log(divisores);
/*6, dado un array de numeros enteros, devolver la suma y la media */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;

for (let i = 0; i < num.length; i++) {
  suma += num[i];
}
console.log(suma);
var media = suma / num.length;
console.log(media);

/*7. realizar un programa que nos devuelva la tabla de multiplicar de un numero 
(multiplicar el numero hasta 10)*/

function tablaDeMultiplicar(num) {
  for (i = 0; i <= 10; i++);
  console.log(" 1 x " + num + " es igual " + num * 1);
}

tablaDeMultiplicar(1);
tablaDeMultiplicar(2);
tablaDeMultiplicar(3);

/*8. realizar una función que guarde los datos en un array (cualquier tipo de dato es valido)*/
let dato = prompt("ingrese datos");
let acumulador = [];
let contador = 0;
while (dato >= 0) {
  acumulador.push(dato);

  contador++;
  dato = prompt("ingrese datos");
}

console.log(acumulador);

function guardarDatos() {
  let pregunta = prompt("ingrese datos");
  let acumulador = [];

  while (pregunta != " ") {
    acumulador.push(pregunta);

    pregunta = prompt("ingrese datos");
  }

  return acumulador;
}
guardarDatos();
