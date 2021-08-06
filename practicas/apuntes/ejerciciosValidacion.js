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



for (let i = 0; i < cargarDatos; i++) {
  alert("Va a cargar " + "la persona con id n°: " + i)
  A.push(new Persona());
  
}


// RECORRER LOS OBJETOS MOSTRANDO TODAS LAS PERSONAS CARGADAS EN EL ARREGLO
// A[] CON SU CORRESPONDIENTE PAIS 

