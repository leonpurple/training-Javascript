//7-1 TRABAJANDO CON SET

//CONJUNTOS - SET EN INGLÉS

//----------//
//   SETS   //
//----------//

//LOS SET SON UNA ESPECIES DE LISTAS PERO QUE SE COMPORTAN DE MANERA DIFERENTE 
//SON UN TIPO DE OBJETO JUNTO CON MAP FUERON INTEGRADOS EN 2016 A ETMASCRIPT 6

//EJEMPLO: 

const array = [1, 20, 3, 4, 20, 1, 'hola', 'hola']
const miSet = new Set(array)//le podemos pasar un objeto iterable

console.log(array)//[1, 20, 3, 4, 2, 1, 'hola', 'hola']
console.log(miSet)//Set {1, 20, 3, 4, 'hola'}
//definición de array : es un conjunto ordenado de valores y objetos
//definición de Set : es un conjunto NO ordenado de valores unicos
//los set nunca nos permiten valores que ya existen 

//LAS PRINCIPAL FUNCION DE LOS SET O CONJUNTOS ES PROTEJER
//Y TRABAJAR SOBRE VALORES DE BASE DE DATOS

// .add() --> añade valores
miSet.add(9)
miSet.add(99)
console.log(miSet)// Set{ 1, 20, 3, 4, 'hola', 9, 99 }

// .delete()--> elimina elementos del set
miSet.delete('hola')
console.log(miSet)//Set { 1, 20, 3, 4, 9, 99}

// .has()--> contiene //si dentro mi array existe 
console.log(miSet.has(1000))//false
console.log(miSet.has(99))//true

// .clear()--> borra todo el set
//miSet.clear()
// console.log(miSet)

// .size()
console.log(miSet.size) // 6  --> tamaño de mi set //cantidad de elementos

miSet.forEach(valor => {
	console.log(valor)// 1, 20, 3, 4, 9, 99
})
//opcion uno (con el objeto Iterator a travez del metodo values)
const it_miSet = miSet.values()
console.log(it_miSet)//{[Iterator]}

//option dos 
//volver a convertir este set a un array (con el factor de propagacion)  ... 
const ar_miSet = [ ...miSet]
console.log(ar_miSet)// [ 1, 20, 3, 4, 9, 99 ]
// de esta manera nos aseguramos que tenemos un array con elementos UNICOS
// de los cuales podemos acceder sin problemas a travez de los []

//


