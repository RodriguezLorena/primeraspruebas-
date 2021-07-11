//tengo que dar vacunar contra el covid a mayores de 30 años, 
//pero menores de 50 años. y a niños de 12 a 15 años. Solo cupo femenino.



function imprimirsI(edad){
    if (edad >= 30 && edad <=50) {
        return "vacunemos"
    }else if ( edad >=12 && edad <= 15){
        return "vacunemosNiños"
    }else {
        return "No cumple con el requisito"
    }
}

for ( let edad = 0; edad <= 120; edad++) {
    console.log(imprimirsI(edad))
} 



