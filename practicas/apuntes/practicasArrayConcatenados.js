//let lore (//parametor)=> //cuerpo
  //nombre 
var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
var Array= Array.filter((valor)=>valor % 2== 1).map((valor)=> valor + valor).filter((valor)=> valor %  2==0);
console.log(Array);


var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
var Array= Array.filter((valor)=>valor % 2== 1)
console.log(Array); /* otener los numeros impares*/


var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
var Array= Array.map((valor) => Math.round(valor / 3));
console.log(Array); /*necesito usar math.round*/ 


var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.pop();
console.log(Array);
//952

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.push("hola");
console.log(Array);

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.reverse();
console.log(Array);

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
var numChicos= Array.slice(2,10);
console.log(numChicos);


var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.splice(2,0,"hola")
console.log(Array);

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.splice(14, 2)
console.log(Array);

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array= Array.toString();
console.log(Array)

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];
Array.unshift("hola", "estos son numeros");
console.log(Array);

var Array= [1,2,3,4,5,6,7,8,9,10,12,15,25,38,546,567,679,809,952];



