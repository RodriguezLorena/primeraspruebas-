/// IMPORTANTE NO TOCAR ///
function Persona(nombre,pais){
  nombre = prompt("inserte un nombre");
  this.nombre = nombre;
  pais = prompt("inserte Pais");
  this.pais = pais
}

const A = [] // arreglo de objetos que sirve como espacio fisico para guardar las personas

/// IMPORTANTE NO TOCAR ///




// PARTE UNA: REALIZAR VALIDACIÓN DE DATOS // 
let cargarDatos = parseInt(prompt("inserte la cantidad de personas que UD va a cargar"))
let num= 0;
 while(typeof(cargarDatos) == "string"){
   alert("error vuelva a cargar el campo, ud cargo un string")

     
 }

for (let i = 0; i < cargarDatos; i++) {
  alert("Va a cargar " + "la persona con id n°: " + i)
  A.push(new Persona());
  
}
// var vacio= " ";
// var caracteres= ["ª;!,·,$,%,&,/,(,),?,?"];
// var num = [0,1,2,3,4,5,6,7,8,9];
//  while (Persona == vacio || Persona == caracteres || Persona == num) {
   
//  }

// var validarNombre= function(){
// var error= [];

//   if(Persona(nombre) == "" || Persona(nombre) == "ª;!,·,$,%,&,/,(,),?,?"){
//     error.push("error, vuelva a cargar los datos ");
//   }if(Persona(pais) == "" || Persona(pais) == "ª;!,·,$,%,&,/,(,),?,?"){
//     error.push("error vuelva acargar los datos ")
//   } 
// }



// RECORRER LOS OBJETOS MOSTRANDO TODAS LAS PERSONAS CARGADAS EN EL ARREGLO
// A[] CON SU CORRESPONDIENTE PAIS 
A.forEach(valor => { console.log(valor)
  
});