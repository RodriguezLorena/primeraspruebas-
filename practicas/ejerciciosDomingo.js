// Creamos una funcion rango que recibe 
function rango(inicio,fin){
    // iniciamos una array vacio
    let nuevoArray = [];
    // Creamos un for que recorra desde inicio hasta fin
    for(let numero = inicio; numero <= fin; numero++){
        // Ejecuta la sentencia qu agrega un elemento al nuevoArray
        // En este caso agregamos "i" que es un numero que se encuentra dentro del rango
        nuevoArray.push(numero)
    }
    // por ultimo, retornamos el array con los numeros agregados durante la ejecucion del for
    return nuevoArray

}

function rangoOtraManera(INICIO, FIN){
    let array = [];
    for (let i = 0; i <= FIN; i++) {
        if(i >= INICIO){
            array.push(i)
        }
    }
    return array
}

function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result
}

console.log(sum(rango(1,10)))



const persona = {
    nombre: "Juan Rodriguez",
    edad: 62,
    genero:"masculino",
    profesion:"cosntructor",
    educacion:" primaria",
    ciudad:" Monte Caseros",
    humano: true 
}

var personas = []

function crearPersona(nombre, edad, genero, profesion, educacion, ciudad, humano){
    return {
        nombre, 
        edad,
        genero,
        profesion,
        educacion,
        ciudad,
        humano
    }     
}
personas.push(crearPersona("Rodriguez, Patricia", 36, "F", "abogada", "universitaria", "Virasoro", true))
console.log(personas)

personas.push(crearPersona("Ayala, Lindolfo", 67, "M", "funcionario Publico", "secundario", "Virasoro", true))

personas.push(crearPersona("Ayala, Maiten", 28, "F", "Periodista", "universidad", "Posadas", true ))

personas.push(crearPersona("Ayala Aguirre, Ignacia Anahi Ibera", 20, "F", "estudiante", "universidad", "Posadas", true))

personas.push(crearPersona("Sanchez, Nicolas", 49, "B", "arquitecto", "posgrado", "Rio Gallegos", true))

console.log(personas)



function personasMenoresdeTreinta (persons){
    let arrayPersonsFilter = [];
    for(let i = 0; i < persons.length; i++){

        if(persons[i].edad < 30){
            arrayPersonsFilter.push(persons[i])
        }

    }

    return arrayPersonsFilter

}
console.log("jkhgsakjagsjkfgasjkgsasghjasgfjkgas")
console.log(personasMenoresdeTreinta(personas))



function seleccionarCiudad (pers, ciudad){
    let cityFilter = [];
    for(let i = 0; i < pers.length; i++){

        if(pers[i].ciudad === ciudad){
            cityFilter.push(pers[i])
        }
    }
    return cityFilter
}
console.log("jsjskdjsnddd")
console.log(seleccionarCiudad(personas, 'Posadas'))




function devolverNombre(nombre){
    let saludo= "hola" + nombre;
return saludo
} 

console.log (devolverNombre( "Lore"))

function saludo(nombre){
    let salu = "Hola " + nombre
   return salu
}
console.log(saludo("Msxi"))




function sumaDeDosNumeros(numeros, num){
    var N = num + numeros
    return N
}
console.log(sumaDeDosNumeros(25,50))



function coco( nombre, edad){
    if ( edad <=50 ){
        return nombre + " es Menor a 50 años"
    }
    return nombre + " es mayor a 50 años"
}

console.log(coco("Lindolfo", 36))



const brothers = [{name:"Mau"},{name:"Mai"},{name:"Lore"},{name:"Pato"},{name:"Ani"},{name:"Max"}]
const database = [{name:"Mai", age:28},{name:"Lore",age:5},{name:"Pato", age:4},{name:"Ani",age:20},{name:"Max",age: 29},{name:"Mau", age: 27}]

function recorrerHasta(){
  console.log(brothers)

  for(let i = 0; i < brothers.length; i++){
    // objetivo: colocar propiedad age en cada elemento de brothers

    for (let e = 0; e < database.length; e++) {

      if(database[e].name === brothers[i].name){
          brothers[i].edad = database[e].age;
        
      }

    }

  }

  console.log(brothers)

}



