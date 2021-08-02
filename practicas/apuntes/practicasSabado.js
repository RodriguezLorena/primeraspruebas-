//ejercicio 1
// Recorrer un arreglo de numeros enteros y sumarlos en una variable N.
// A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// Prohibido usar un ciclo For.

var A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
var N = 0;


var i = 0;
while(i < A.length){
 
    N += A[i];
    
    i++
    }
console.log("LA SUMA TOTAL ES " + N);
                              //3860


/*var A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
var N = 0;
for (let i = 0; i < A.length; i++) {
     N += A[i];
}
console.log(N)*/



// ejercicio 2
// Recorrer un arreglo de numeros enteros, Si el entero es par, multiplicarlo por su mismo valor.
//  A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
//devolver el resultado de los enteros que cumplen con la condición en un nuevo array.

var A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4];
var numMultiplicados = [];

i= 0;
var sumador= 0;
while(i <= A.length){

    if(A[i] %2 == 0){
     sumador= A[i] * A[i]

        numMultiplicados.push(sumador);
        
    }

    i++}
console.log(numMultiplicados);




// ejercicio 3, Recorrer un arreglo de enteros, generar un nuevo arreglo
//A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
// con valores que sean raiz cuadradas con resultado entero,
// es decir USANDO LA FUNCIÓN Math.sqrt() si el resultado es entero, guardarlo en un nuevo arreglo,
// sino no hacer nada. 
var A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 
var raizCuadrada= [];
var i = 0;

while(i <= A.length){
 if(Math.sqrt(A[i]) % 1 == 0 )
        raizCuadrada.push(A[i])
    i++
}

console.log(raizCuadrada)

// ejercicio 4, dado un arreglo de enteros, eliminar del arreglo original todos los valores impares
//A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 

A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 

i=0;

while(i < A.length){

if(A[i]% 2 == 1){
    A.splice(i, 1)
}
   i++
}
console.log(A)
// elimino. 

// ejercicio 5, dado un arreglo de enteros, generar el reverso del arreglo 
//  PISTA: USAR DECREMENTO.
//A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 

var A = [1,2,34,54,6,242,23,4,5,6,4,2,1,4,5,6,7,3423,23,4,4]; 

var i = A.length -1;
invertir= [];

while(i >= 0){

 invertir.push(A[i]);
 i = i -1;
}
console.log(invertir);

//tuve que hacer un array nuevo para almacenar el array invertido. 