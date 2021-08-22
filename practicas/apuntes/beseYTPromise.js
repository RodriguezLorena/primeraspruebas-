// Practicas Promise. J.A.N:

function temporizador(time){
    return new Promise(function(resolve){
        setTimeout(()=> resolve(), time)

    })
}

temporizador(2000)
.then(()=> console.log("Final"));



// Closures J.A.N

function funcion1(){
    var miVariable= 15;

    function funcionInterna(){
        console.log(miVariable);
    }
    return funcionInterna
}
var variableExterna= funcion1();
//console.log(variableExterna);

variableExterna();




function funcion2() {
    var miVariable=30;
    function funcionInterna(){
       console.log(miVariable);
    }
    funcionExterna(funcionInterna)
}

function funcionExterna(funcion){
    funcion();
}

funcion2();


function Esperar(mensaje){
    setTimeout(function(){
        console.log(mensaje);
    }, 2000)
}
 Esperar("esta es una funcion closure");



 //Bucles y Closures:

 for(var i = 1; i <= 5; i++){
     
     function miFuncion(){
        var x= i;
        setTimeout(function(){
        console.log(x);
    }, x * 1000);
  }
    miFuncion(); 
 }

 


 for(var i = 1; i <= 5; i++){

    (function(x){
        
        setTimeout(function(){
            console.log(x);
        }, x * 1000);
    }(i));

 }

