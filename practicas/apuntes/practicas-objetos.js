//  let celular = new Object();  //opcion 1
//  celular.marca= "Motorola";
//  celular.color= "Dorado";
//  celular.año= 2018;
//  celular.servidor= ["Personal", "claro", "movistar"];

// console.log(celular.servidor);

//  let celular= {             //opcion 2
//      marca: "Motorola",
//     color: "Dorado",
//      año: 2018,
//      servidor: "personal"
// };

// console.log(celular.año);
// console.log(celular.marca);
// console.log(celular.color);
// console.log(celular.servidor);
// console.log(celular);

// class Celular {
//   constructor(marca, año, color, servidor) {
//     this.marca = marca;
//     this.año = año;
//     this.color = color;
//     this.servidor = servidor;
//   }
//   verificar() {
//     return "el color actual es " + this.color;
//   }
// }

// let g5 = new Celular("motorola", 2018, "dorado", "Personal");
// let g6 = new Celular("Sony", 2020, "negro", "Claro");

// g6.verificar();

// console.log(g5);
// console.log(g6);

// class Entidad {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   retornarNombre() {
//     return this.nombre;
//   }
// }

// class Profesor extends Entidad {
//   constructor(nombre, materias, horasCatedra, alumnos) {
//     super(nombre);
//     this.materias = materias;
//     this.horasCatedra = horasCatedra;
//     this.cantidadDeAlumnos = alumnos;
//   }
//   verificarMateria() {
//     return "El Profesor tiene a cargo la materia " + this.materias;
//   }
//   aumentarHoras() {
//     return "se le aumenta " + this.horasCatedra * 1 + "hs. más";
//   }
//   reducirHoras() {
//     return null;
//   }
// }

// let profesorUno = new Profesor("Ayala Mauricio", "programacion 1", 2, 100);
// console.log(profesorUno.verificarMateria());
// profesorUno.aumentarHoras();
// console.log(profesorUno.retornarNombre());

// class Alumnos extends Entidad {
//   constructor(nombre, edad, id, carrera, materias) {
//     super(nombre);
//     this.edad = edad;
//     this.id = id;
//     this.carrera = carrera;
//     this.materias = materias;
//   }
//   presentarAlumno() {
//     return (
//       "Mi nombre es " +
//       this.nombre +
//       "tengo " +
//       this.edad +
//       " años. Curso la carrera de " +
//       this.carrera
//     );
//   }

//   seleccionarMateria(i) {
//     return "estoy cursando actualmente la materia de: " + this.materias[i];
//   }
//   mostrarId() {
//     return "mi numero de usuario es " + this.id;
//   }
// }

// let alumnoUno = new Alumnos(
//   "Rodriguez Lorena",
//   32,
//   "123456789",
//   "Programación",
//   ["javascript", "html", "CSS", "C++"]
// );
// console.log(alumnoUno.presentarAlumno());
// alumnoUno.seleccionarMateria();
// alumnoUno.mostrarId();

// class Materias extends Entidad {
//   constructor(nombre, dias, hours, profesor) {
//     super(nombre);
//     this.dias = dias;
//     this.horasDiarias = hours;
//     this.profesorACargo = profesor;
//   }
//   seleccionarMateria() {
//     return (
//       "Este semestre se dara especial atencion a la materia " + this.nombre
//     );
//   }

//   AumentarHoras() {
//     return "se aumentara " + this.horasDiarias / 3 + "hs mas por dia";
//   }
//   verificarDias(i) {
//     return (
//       "la primer clase se llevara a cabo el día " +
//       this.dias[i] +
//       " estara a cargo del Profesor " +
//       this.profesorACargo
//     );
//   }
// }

// let materiaNueva = new Materias(
//   "Java",
//   ["martes", "jueves"],
//   3,
//   "Ayala Lindolfo"
// );

// class Escuela extends Entidad {
//   constructor(nombre, ciudad, direccion, extenciones) {
//     super(nombre);
//     this.ciudad = ciudad;
//     this.direccion = direccion;
//     this.extenciones = extenciones;
//   }
//   presentarEscuela() {
//     return (
//       "somos el Instituto tecnologico " +
//       this.nombre +
//       " de la ciudad de " +
//       this.ciudad +
//       " ubicada en: " +
//       this.direccion
//     );
//   }

//   identificarExtencion(i) {
//     return "Hemos inaugurado la nueva extencion en: " + this.extenciones[i];
//   }
// }

// let nuevaEscuela = new Escuela(
//   "AcademyAM",
//   "Resistencia Chaco",
//   "Santa Fe-1239",
//   [
//     "Corrientes",
//     "Posadas ",
//     "Virasoro",
//     "Santo Tome",
//     "Tucuman",
//     "Cordoba Cap",
//     "Santa Fe",
//     "Salta",
//   ]
// );

// class EscPrivada extends Escuela {
//   constructor(nombre, ciudad, direccion, extenciones) {
//     super(nombre, ciudad, direccion, extenciones);
//   }
//   anunciarClasesDeIngles() {
//     console.log("clase de Ingles Lunes");
//   }
// }
// const Ivo = new EscPrivada("Ivo", "Virasoro", "San Martin", "Resistencia");
// const Comercio = new Escuela(
//   "Colegio Velez",
//   "Virasoro",
//   "Lisandro de la Torre",
//   "Santo Tome"
// );

// Ivo.anunciarClasesDeIngles();
// console.log(Comercio.retornarNombre());

//-------------------------------------------------------------------------------

class PersonalZoo{
  constructor(nombreDelPersonal,edad,id,sector){
    this.nombreDelPersonal= nombreDelPersonal;
    this.edad= edad;
    this.id=id;
    this.sector=sector
  }
  retornarNombreDelPers(){
    return this.nombreDelPersonal
  }
  retornarEdad(){
    return this.edad
  }
  retornarId(){
    return this.id
  }
  retornarsector(){
    return this.sector
  }
}

class Animal {
  constructor(nombre, piel, sonido, genero, raza, color) {
    this.nombre = nombre;
    this.piel = piel;
    this.sonido = sonido;
    this.genero = genero;
    this.raza = raza;
    this.color = color;
  }
  retornarNombre() {
    return this.nombre;
  }
  retornarPiel() {
    return this.piel;
  }
  emitirSonido() {
    return this.sonido;
  }
  identificarGenero() {
    return this.genero;
  }
  verificarRaza() {
    return this.raza;
  }
}

class Cat extends Animal {
  constructor(nombre, piel, sonido, genero, raza, color) {
    super(nombre, piel, sonido, genero, raza, color);
  }
}

let Angora = new Cat(
  "Garfield",
  "pelo largo",
  "Miau",
  "Macho",
  "Angora",
  "Naranja"
);
let Egipsio = new Cat(
  "Peluza",
  "pelo corto",
  "Miau-Miau",
  "Hembra",
  "Egipsia",
  "blanco y marrón"
);
// console.log(Angora.retornarNombre());
// console.log(Egipsio.retornarPiel());

class Dog extends Animal {
  constructor(nombre, piel, sonido, genero, raza, color) {
    super(nombre, piel, sonido, genero, raza, color);
  }
}

let Aragon = new Dog("Aragon", "pelos", "Guau", "Macho", "Labrador", "Canela");
let Morena = new Dog(
  "Morena",
  "pelos",
  "Guauuu",
  "Hembra",
  "Labrador",
  "Negro"
);
let Adolf = new Dog(
  "Adolf",
  "pelos",
  "Guauguau",
  "Macho",
  "Callejero",
  "Blanco"
);

// console.log(Aragon.emitirSonido());
// console.log(Morena.verificarRaza());
// console.log(Adolf.identificarGenero());




class AnimalesDelZoo extends Animal {
  constructor(
    nombre,
    piel,
    sonido,
    genero,
    raza,
    color,
    edadDelAnimal,
    personalaCargo,
    añosEnLaInst,
    origen
  ) {
    super(nombre, piel, sonido, genero, raza, color);
    this.edadDelAnimal = edadDelAnimal;
    this.personalaCargo = personalaCargo;
    this.añosEnLaInst = añosEnLaInst;
    this.origen = origen
  }
  retornarPersonal() {
    return this.personalaCargo;
  }
  sumarAños() {
    return this.edadDelAnimal + this.añosEnLaInst;
  }
  verOrigen(){
    return this.origen
  }
}

let yaguareteAdulto = new AnimalesDelZoo(
  "kira",
  "pelos",
  "rugido",
  "Hembra",
  "Panthera Onca-Felino",
  "variable, entre amarillo y bayo fuerte",
  5,
  "Lima Gustavo",
  1
);
// console.log(yaguareteAdulto.sumarAños());
// console.log(yaguareteAdulto.verificarRaza());
// console.log(yaguareteAdulto.retornarNombre());


let Guacamayo= new AnimalesDelZoo(
 "zavana",
 "plumas", 
 "Garrir", 
 "Hembra", 
 "Anodorhynchus hyacinthinus",
 "azul",
  5, 
 "Santino Lucas",
  1,
 "Isla de Trinidiad");

// console.log(Guacamayo.retornarNombre());  
// console.log(Guacamayo.verOrigen());
// console.log(Guacamayo.emitirSonido());
// console.log(Guacamayo.retornarPersonal());
// console.log(Guacamayo.verificarRaza());  



class AnimalesRescatados extends PersonalZoo{
  constructor(nombre, origen, tratamiento, condicionActual, nombreDelPersonal, edad, id, sector ){
    super(nombreDelPersonal, edad, id, sector)
    this.nombre = nombre;
    this.origen = origen;
    this.tratamiento = tratamiento;
    this.condicionActual= condicionActual;

  }

  retornarNombre(){
    return this.nombre
  }
  retornarOrigen(){
    return this.origen
  }
  verCondicion(){
    return this.condicionActual
  }
  verTratamientos(){
    return this.tratamiento
  }
}
 let piton= new AnimalesRescatados("Snake", "Africa", "hidratacion", "Estable", "Julio Asame", 27, 1763, "serpentario")

//  console.log(piton.retornarNombre());
//  console.log(piton.verCondicion());
//  console.log(piton.verTratamientos());
//  console.log(piton.retornarOrigen());

//  console.log(piton.retornarsector());



class Mamifero extends AnimalesDelZoo{
  constructor(
    cantidadDePreñez,
    instanciaMedica,
    nombre,
    piel,
    sonido,
    genero,
    raza,
    color,
    edadDelAnimal,
    personalaCargo,
    añosEnLaInst,
    origen){
    super(nombre,
      piel,
      sonido,
      genero,
      raza,
      color,
      edadDelAnimal,
      personalaCargo,
      añosEnLaInst,
      origen);
      this.cantidadDePreñez= cantidadDePreñez;
      this.instanciaMedica= instanciaMedica;
  }
verificarFuncionalidadDelAnimal(){
  if(this.genero === "Hembra" && this.cantidadDePreñez <= 5){ 
  return this.nombre + " apto para mas fertilidad"
}else if(this.genero === "Hembra" && this.cantidadDePreñez >5){
  return this.nombre + " no es apto"
}else{
  return this.nombre + " No cumple la condicon"
}
}
darAltaMadica(){
  if(this.instanciaMedica <= 10){
    return this.nombre + " Continua en Evalucion"
  }else{
    return "Animal apto para devolucion"
  }
}

}

let caballoI= new Mamifero(2, 0, "Caballo 0", "pelos", "Relinche", "Hembra", "Real Ingles", "blanco", 3, "Pilar Pedro", 1, "España" )
let caballoF = new Mamifero(6, 3, "Caballo 1", "pelos", "Relinche", "Hembra", "arabe", "Marron", 12, "Alejandro Arce", 4, "Dubai");
let caballoM= new Mamifero(null, 12, "Caballo 2", "pelos", "Relinche", "Macho", "cuarto de milla", "negro", 9, "Lucas Aguirre", 4, "Brasil");

// console.log(caballoF.verificarFuncionalidadDelAnimal());
// console.log(caballoM.verificarFuncionalidadDelAnimal());
// console.log(caballoI.verificarFuncionalidadDelAnimal());
// console.log(caballoI.darAltaMadica());
// console.log(caballoM.darAltaMadica());
// console.log(caballoF.darAltaMadica());


module.exports= {
  Mamifero
}


module.exports= {
  PersonalZoo
}