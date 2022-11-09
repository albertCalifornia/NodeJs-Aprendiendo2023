//*           OBJETOS
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
console.log(gato);

//*              Acceder a los valores
//* Notación de punto:
console.log(gato.nombre)
console.log(gato.duerme)
console.log(gato.enemigos[0]);

//*  Notación de corchetes (nos servirá para recorrerlo):
console.log(gato['nombre'])
console.log(gato['edad'])
console.log(gato["enemigos"][0]);

//*              CRUD (propiedades)
//* Crear (create)
gato.color = 'Azul'

//* Actualizar (update)
gato.edad = 12

//*  Eliminar (delete)
delete gato.duerme

console.table(gato);

//*    hasOwnProperty ( devuelve true o false si se encuentra la propiedad o no.)

console.log(gato.hasOwnProperty("nombre"))
console.log(gato.hasOwnProperty("salud"))

if(gato.hasOwnProperty("nombre")){
    gato.nombre = "flojo"
}

console.log(gato);



//*   Objetos anidados

const objGato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos:["Cobarde", "Timido","Pegajoso"],
        favoritos: {
          comida:{
            frio: "salmon",
            caliente:"pollo"
          }  
        }
    }

}

console.log(objGato)

const mapaGato = objGato.enemigos.map(mascota => `Enemigos ${mascota}`)
console.log(mapaGato);

console.log(objGato.otros.favoritos.comida.frio)
console.log(objGato.otros.amigos[1]);
console.log(objGato.otros.amigos);
console.table(objGato.otros.amigos);

//*  Propiedades
const amigos = ["Cobarde", "Timido","Pegajoso"]
console.log(amigos.length)


//******************************   Métodos/Funciones ***********************************
const objGatoss = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros", "gallinas"],
    comer: function(alimento){
        console.log("gatito comiendo " + alimento)
    },
    comerDos(alimentoDos){
        console.log("gato esta comiendo " + alimentoDos)
    },

    comerTres(alimentoTres){
        console.log(`
           ${objGatoss.nombre} esta comiendo ${alimentoTres}
        `);

        console.log(`
        ${this.nombre} esta comiendo ${alimentoTres}
     `);

    },
    
    mostrarEnemigos() {
       return this.enemigos.forEach((item) => console.log(item));
   },


}
objGatoss.comer("Carne")
objGatoss.comerDos('Pescadito')
objGatoss.comerTres('Pollo')

objGatoss.mostrarEnemigos()

//*   this: Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando.

// console.log(objGatoss.comer("pez"));

//* * Recorrer un objeto:  La instrucción for-in itera sobre todas las propiedades enumerables de un objeto. formula >  for (const ....  in  Objeto){ }.


const gato2 = {
    nombre2: "Valiente",
    duerme2: true,
    edad2: 14,
    enemigos2: ["agua2", "perros2", "caballo2"],
};

for (const propiedades in gato2) {
    console.log(gato2[propiedades]);
}

for (const vmMemoria in gato2){
    console.log(gato2[vmMemoria])
    console.table(gato2[vmMemoria]);
}

//*  Object.values() : devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

console.log(Object.values(gato2));
Object.values(gato2).forEach((item) => console.log(item));

//*  Destructuring Objects / usar alias para no chocar con variables constante que se repiten
//* formula >  const {} = objeto

const {nombre2, duerme2, edad2, enemigos2} = gato2
console.log(nombre2, duerme2, edad2, enemigos2)

const {nombre2: aliasNombre2} = gato2;
console.log(aliasNombre2);