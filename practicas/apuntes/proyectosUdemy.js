alert("Bienvenidos a Morena Resto Bar!");
prompt("Ingrese su numero de cliente");

// var hs= 3;
// var seg= hs * 3600
// console.log("hay " +seg + " segundos, en " + hs + " horas");


//  var gradosCelcius = 35;
//  var fahrenheit = gradosCelcius * 9/5 +32;
//  console.log("hay " + fahrenheit + " fahrenheit en " + gradosCelcius + " grados celcius");

// function convertidor(gradosCelcius){
//     var fahrenheit = gradosCelcius * 9/5 +32;
//     return fahrenheit;
// }
// console.log(convertidor(35));


var usuario = "morenaVirasoro2";
switch (usuario){
    case "morenaVirasoro1":
        console.log("Accedio a su cuenta VIP");
        break;
    case "morenaVirasoro2" :
        console.log("accedio a su cuenta");
        break;
default:
    console.log("su usurio no esta registrado");
    break;     
}
