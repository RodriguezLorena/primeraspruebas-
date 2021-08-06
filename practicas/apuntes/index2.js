// DADO UN ARRAY A = [1,4,3,9,2,1,7,9,5,4,6,7,8,1,4,6,7,3,5,8,9,9,4] 
//GENERAR UN ARREGLO CON EL COMPLEMENTO DE SU ENTERO.
// (por ejemplo, para 1 su complemento es 9, para 8 su complemento es 2)
// a esos complementos multiplicarlos por su mismo elemento, y luego multiplicarlos por 5
//, luego restarlos por  - 2  a cada indice; para devolver en un arreglo de 1 solo elemento la sumatoria 
// de todos esas operaciones
let A = [1,4,3,9,2,1,7,9,5,4,6,7,8,1,4,6,7,3,5,8,9,9,4]
.map((i) => 10 - i)
.map((i) => i * i)
.map((i) => i * 5)
.map((i)=> i - 2)
.reduce((a,b)  = a + b, 0)

// DADO UN ARRAY A let  A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4]  
//GENERAR EN EL ARREGLO  ORIGINAL EL COMPLEMENTO DE 100
// A ESE RESULTADO generar un arreglo el modulo de 7, luego sumarle 5, luego restarle 2, luego multiplicarlos x 2, luego sumarle todos esos elementos 
// devolver  un array de un elemento.  


 let A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4]
.map((i)=> 100 - i)
.map((i)=> i % 7)
.map((i)=> i +5)
.map((i)=> i - 2)
.map((i)=> i * 3)
.filter((i)=> i % 2 == 1);
console.log(A)



.reduce((inicio, valor)=> inicio + valor);
console.log(A);

/*let B= 0;
 A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4]
.map((i)=> 100 - i)
.map((i)=> i % 7).map((i)=> i +5)
.map((i)=> i - 2).map((i)=> i * 2)
.forEach((i)=>B = B +i);
console.log(B);*/
 

let A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4].length
console.log(A)


let A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4];
A.forEach((indice, valor) => {
    console.log(indice + valor)
    
});
console.log(A)
 //suma el valor mas la cantidad de indice

 let A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4];
 A.forEach((indice ) => 
     console.log(indice * indice)); //multiplica el valor de indice por su mismo valor.




let A = [1,41,3,29,2,14,7,9,5,84,63,71,8,1,4,6,97,3,5,8,9,9,4];
A.forEach((indice)=>console.log(100 - indice));
//devuelve el complemento del numero dado. 






