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



class Celular{
    constructor(marca, año, color, servidor){ 
    this.marca = marca;
    this.año = año;
    this.color = color;
    this.servidor = servidor;
    }
    verificar(){
        return "el color actual es " + this.color 
    }
};
    

let g5 = new Celular("motorola", 2018, "dorado", "Personal");
let g6 = new Celular("Sony", 2020, "negro", "Claro");

g6.verificar();

console.log(g5);
console.log(g6);

    
  
class Profesor{
    constructor(nombre, materias,hours,alumnos){ 
    this.nombre= nombre;
    this.cargo = materias;
    this.horasCatedra = hours;
    this.cantidadDeAlumnos = alumnos;
    }
    verificarMateria(){
        return "El Profesor tiene a cargo la materia " + this.cargo 
    }

    seleccionarProfesor(){
        return "El profesor a cargo sera " + this.nombre
    }
    aumentarHoras(){
        return "se le aumenta " + this.horasCatedra *1 + "hs."
    }
};

let profesorUno= new Profesor("Ayala Mauricio", "programacion 1", 2 , 100)
profesorUno.verificarMateria()
profesorUno.seleccionarProfesor()
profesorUno.aumentarHoras()



class Alumnos{
    constructor(nombre, edad, id, carrera, materias){ 
    this.nombre= nombre;
    this.edad= edad;
    this.id = id;
    this.carrera = carrera;
    this.materias = materias;
    }
    presentarAlumno(){
        return "Mi nombre es " + this.nombre + "tengo " + this.edad + "curso la carrera de" + this.carrera
    }

    seleccionarMateria(){
        return "estoy cursando actualmente la materia de: " + this.materias[0]
    }
    mostrarId(){
        return "mi numero de usuario es " + this.id
    }
};

let alumnoUno= new Alumnos("Rodriguez Lorena", 32 , "123456789", "Programación", ["javascript", "html", "CSS", "C++"])
alumnoUno.presentarAlumno();
alumnoUno.seleccionarMateria();
alumnoUno.mostrarId();


class Materias{
    constructor(nombre, dias, hours, profesor){ 
    this.nombre= nombre;
    this.dias= dias;
    this.horasDiarias = hours;
    this.profesorACargo = profesor;

    }
    seleccionarMateria(){
        return "Este semestre se dara especial atencion a la materia " + this.nombre
    }

    AumentarHoras(){
        return "se aumentara "  + this.horasDiarias /3 + "hs mas por dia"
    }
    verificarDias(){
        return "la primer clase se llevara a cabo el día " + this.dias[0] + " estara a cargo del Profesor " + this.profesorACargo
    }
};

let materiaNueva= new Materias("Java", ["martes", "jueves"] , 3, "Ayala Lindolfo")


class Escuela{
    constructor(nombre, ciudad, direccion, extenciones){ 
    this.nombre = nombre;
    this.ciudad= ciudad;
    this.direccion = direccion;
    this.extenciones = extenciones;

}
presentarEscuela(){
    return "somos el Instituto tecnologico " + this.nombre + " de la ciudad de " + this.ciudad + " ubicada en: " + this.direccion

}
   
identificarExtencion(){
    return "Hemos inaugurado la nueva extencion en: " + this.extenciones[2]
}
    }


let nuevaEscuela= new Escuela("AcademyAM", "Resistencia Chaco", "Santa Fe-1239", ["Corrientes", "Posadas ", "Virasoro", "Santo Tome", "Tucuman", "Cordoba Cap", "Santa Fe", "Salta"]);    

