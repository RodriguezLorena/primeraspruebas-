let compras= "carrito ";

function hacerLaCompa(callback){
    setTimeout(function(){
        compras += " Milk"
        callback()
    }, 2000)
}

hacerLaCompa(function(){
    console.log(compras);

hacerLaCompa(function(){
    console.log(compras);

    hacerLaCompa(function(){
        console.log(compras);
    
        hacerLaCompa(function(){
            console.log(compras);
        })
    
    })
  })
});

//............................................


let desarrollo = new Promise(function(resolve, reject){
 
    setTimeout(()=>{
        const proyecto= "carrito"
        let aleatorio= Math.random()
        if(aleatorio < 0.4){
            resolve(proyecto)
        }else{
            reject("no se encuentra el producto")
        }
    }, 1500)
    
})

desarrollo
.then((proyecto)=> console.log(proyecto))
.catch((error)=> console.log(error))
.finally(()=> console.log("promesa finalizada"))

 
    
 
[22:35, 15/8/2021] Maxi: class Animal extends Cosa {
    constructor(name, habitad, reproduccion){
      super(name);
      this.habitad = habitad;
      this.reproduccion = reproduccion;
      this.caracteristicas = [];
    }
  
    getHabitad(){
      return this.habitad;
    }
  
    getReproduccion(){
      return this.reproduccion;
    }
  
    getCaracteristicas(){
      return this.caracteristicas
    }
  
    setCaracteristica(caracteristicas){
      this.caracteristicas = [...this.caracteristicas,...caracteristicas]
    }
  
  }
  [22:41, 15/8/2021] Maxi: https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous
  [22:38, 16/8/2021] Maxi: // Ejemplo de funcion con callback
  
  function sumar(x,y){
    console.log(x+y);
  }
  
  function calcular(callback){
    let x;
    let y;
    setTimeout(function(){
      x = 5;
      y = 10;
      callback(x,y);
    }, 1000);
  }
  
  calcular(sumar)
  
  //Ejemplo de promesas
  
  const nuevaPromesa = new Promise(function(resolve, reject){
    let err;
    setTimeout(function(){
      // consulta db
      resolve([1,2,3,4,5,6,7,8,9,10]);
    }, 1000);
    if(err){
      reject(err);
    }
  })
  
  nuevaPromesa // Esto simula consulta a base de datos;
  .then(function(resultado){
    // En el primer then se ejecuta si la promesa se resuelve
    console.log(resultado.reduce((a,b)=>a+b))
  }).catch(function(err){
    // En el catch se ejecuta si la promesa se rechaza
    console.log(err);
  })
  
  // Ejemplo de async await
  
  const algo = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve([1,2,3,4,5,6,7,8,9,10]);
    }, 5000);
  });
  
  const nuevoEvento = new Event("patoLore")
  
  nuevoEvento.addEventListener(() => {
    console.log("Esto se ejecuta cuando el evento se dispara")
  });
  
  
  async function consultaMasSuma(){
    try {
      const result = await algo
      console.log(result.reduce((a,b)=>a+b))
    } catch (error) {
      console.log(error)
    }
  }
  
  consultaMasSuma();