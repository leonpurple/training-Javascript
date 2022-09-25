

//Cómo unir  dos listas concat(listas2) O CON FACTOR DE PROPAGACIÓN [...]

const lista1 = ['A', 'B', 'C',]
const lista2 = ['1', '2', '3']


const lista3 = lista1.concat(lista2)
console.log(lista3)

//[ 'A', 'B', 'C', '1', '2', '3' ]

//concat crea un nuevo array 
//pero no midifica los usasdos lista1 y lista2

//------------------------------//
//FACTOR DE PROPAGACIÓN//
//NUEVA FORMA DE UNIR DOS LISTAS U OBJETOS [...]

//como unir dos listas con FACTOR DE PROPAGACIÓN 

const otraLista3 = [...lista1, ...lista2]
console.log(otraLista3)//[ 'A', 'B', 'C', '1', '2', '3' ]

//NO ES PROPAGACION DE FACTOR  NO CONFUNDIR CONCEPTO
//EL FACTOR DE PROPAGACION ES UTILIZADO EN TODOS LOS FRAMEWORKS MODERNOS
const otralista3 = [lista1, lista2]
console.log(otralista3)//[ ['A','B','C'], ['1','2','3'] ]

//Método .slice()

//Cómo obtener una lista a partier de otra .slice()
const arraySlice = ['lunes', 'martes', 'miércoles', 1, 2, 3, 'jueves', 'viernes']
//EL METODO SLICE NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(arraySlice.slice(0))
console.log(arraySlice.slice(2, 5))

//de atras adealnte
const arraySlice_2 = arraySlice_2.slice(2, -2)
console.log(arraySlice_2)





