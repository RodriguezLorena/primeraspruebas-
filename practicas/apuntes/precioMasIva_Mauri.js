//crear una funcion dado un precio que le calcule el 21% 

          
           
           
            function total(precio, impuesto){
               
               impuesto = impuesto / 100
               impuesto = impuesto +1;
               
                return precio * impuesto 
     
                
            }
        console.log(total(500, 35));


        //var aleatoria= Math.random();
        
        

        function random() {
            return Math.round(Math.random()*(25 - 1)+ 1)
        }


function generarContraseña(longitud) {
    let contraseña= "";
    let ALFABETO = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
    for(var i = 0; i< longitud; i ++ ){
        random= Math.round(Math.random() * ALFABETO.length)
        contraseña += ALFABETO[random]
    }
return contraseña;
    
}
console.log(generarContraseña())