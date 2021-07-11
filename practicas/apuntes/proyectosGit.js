// // // // prompt("cual es tu edad?");

// // //  //no me aparece el input (cosnultar)




// var temperature=(prompt("cual es temperatura?"));
// var temF = (temperature* 1.8) + 32;
// document.write("tu temperatura actual es: " + temperature + " y en farenheit es: " + temF)

// // //segundo proyecto salio. no le inicie con la funcion antes (var), y ocupe src, de otra manera para agrgar el script al html. 



// // income= prompt("¿cuanto es tu ingreso?");
// // cost= prompt("¿cual es el costo?");
// // taxation= prompt("¿cual es el % de impuestos?");

// // grossProfit = income - cost;
// // taxationFinal = grossProfit/100;
// // finalIncome = grossProfit + taxationFinal;

// // document.write("$" + finalIncome);

// // //proyecto 3, salio. busque solamente la guia para sacar porcentajes. 




var nombre = prompt("¿Cuál es tu nombre y apellido?");
var firstInitial= nombre.slice(0,1);

var secondInitialPosition = nombre.indexOf(" ") +1;
var secondInitial = nombre.slice(secondInitialPosition, secondInitialPosition+1);

document.write("tus Iniciales son:" + firstInitial.toUpperCase()+ secondInitial.toUpperCase());
