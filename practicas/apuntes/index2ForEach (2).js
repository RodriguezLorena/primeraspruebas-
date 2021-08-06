// ejercicios con ,forEach()
 
// 1 : dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] mostrar por consola todos los elementos
// usando forEach (SOLO FOREACH!!! )
matrizA = [1,2,3,4,5,6,7,7,73,4,6,6,74];
matrizA.forEach((indice) => console.log(indice));


// 2: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] mostrar por consola todos los elementos Y 
// DEVOLVER EL NUMERO DE ELEMENTOS!! (sin usar la propiedad .length)
matrizA = [1,2,3,4,5,6,7,7,73,4,6,6,74];
let suma=0;
matrizA.forEach((indice) => {console.log(indice); suma++});
console.log(suma)

// 3: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] devolver en un arreglo
// B= [] los numeros pares

B= [];
matrizA = [1,2,3,4,5,6,7,7,73,4,6,6,74];
matrizA.forEach((indice)=>{
    if(indice % 2== 0){
        B.push(indice)
    }
})
console.log(B);


// 4: dado un arreglo [1,2,3,4,5,6,7,7,73,4,6,6,74] devolver en un arreglo A los pares 
// y en un arreglo B los impares

matrizA = [1,2,3,4,5,6,7,7,73,4,6,6,74];
A= [];
B= [];
matrizA.forEach((indice) => {
    if(indice % 2 == 0){
        A.push(indice)
    }else if (indice % 2 == 1){
        B.push(indice)
    }
    
});
console.log(A)
console.log(B)

// 5 dado un arreglo [a,s,f,f,w,w,r,v,d,s,c,a,v,y,u,ut,e,r,] devolver en un 
// nuevo arreglo UPPER convertir todos los elementos en mayusculas. 

let UPPER= [];
 let matriz= ["a","s","f","f","w","w"];
matriz.forEach((valor) =>{UPPER.push(valor.toUpperCase())

})
console.log(UPPER);
    

