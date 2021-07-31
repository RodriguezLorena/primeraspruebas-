//ejercicio 5 es separar numeros y letras de un string y generar 2 strings separados 

let D = "1AOSD404IFV8404OAAA4";
let letras = "";
let enteros = "";
let numero = ["0","1","2","3","4","5","6","7","8","9"];
let aux;

for (let i = 0; i < D.length; i++) {
       aux = D.charAt(i);

       if(numero.includes(aux)){
           enteros = enteros + aux;
       }else{
        letras = letras + aux;
       }
    
}
console.log(letras);
console.log(enteros);

// sol 2 
let D = "1AOSD404IFV8404OAAA4";
let letras = "";
let enteros = "";
let numero = "0123456789"
let aux;

for (let i = 0; i < D.length; i++) {
       aux = D.charAt(i);

       if(numero.includes(aux)){
           enteros = enteros + aux;
       }else{
        letras = letras + aux;
       }
    
}
console.log(letras);
console.log(enteros);

//sol 3 
let D = "1AOSD404IFV8404OAAA4";
let letras = "";
let enteros = "";
let aux;

for (let i = 0; i < D.length; i++) {
       aux = D.charAt(i);

       if( "0123456789".includes(aux)){
           enteros = enteros + aux;
       }else{
        letras = letras + aux;
       }
    
}
console.log(letras);
console.log(enteros);


//sol 3 
let D = "1AOSD404IFV8404OAAA4";
let letras = "";
let enteros = "";
let aux;
let i = 0
while (i < D.length) {
       aux = D.charAt(i);

       if( "0123456789".includes(aux)){
           enteros = enteros + aux;
       }else{
        letras = letras + aux;
       }
       i++
}
console.log(letras);
console.log(enteros);

// modificarlo para caracteres especiales ademas usar while 

let D = "1AOSD&&///404!!IFV$$$8404OAAA4";
let enteros= "0123456789";
let numeros= "";
let letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let mayusculas= "";
let caracteres= [];
let i= D.length - 1; 
let auxiliar; 

while(i >= 0){
auxiliar = D.charAt(i);
 
 if(enteros.includes(auxiliar)){
     numeros = numeros+ auxiliar
 }else if(letras.includes(auxiliar)){
     mayusculas = mayusculas+ auxiliar
 }else{
       caracteres.push(auxiliar);
 }

  i= i -1
}

console.log(numeros);
console.log(mayusculas);
console.log(caracteres);