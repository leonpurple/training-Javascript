//MÉTODOS DE CADENAS DE TEXTO
//STRING METHODS

let input = 'Escorpio'

let db = 'escorpio'

console.log(input === db)

//fitro toLowerCase() - toUpperCase()

console.log(input.toLowerCase())
console.log(input.toUpperCase())

//FORMAS DE CONCATENAR DOS CADENAS DE CARACTERES

let cadena_1 = "cara"
let cadena_2 = "culico"

console.log(cadena_1.concat(cadena_2))
console.log(cadena_1+ " " +cadena_2.toUpperCase())
console.log(`${cadena_2} ${cadena_1.toUpperCase()}`)

//Eliminar espacios al inicio y al final
let cadena_3 = "  helicoptero.   "
console.log(cadena_3.length)
//trim
console.log(cadena_3.trim().length)
console.log(cadena_3.trimStart().length)
console.log(cadena_3.trimEnd().length)

// Obtener el caracter que hay en cierta posicion 

let string_4 = "hola soy una cadena de cadena de craracteres" 

console.log(string_4.charAt(5))
console.log(string_4[5])


console.log(string_4.indexOf('soy'))
console.log(string_4.charAt(5))
console.log(string_4.lastIndexOf('cadena'))

//metodos de cadena de texto parte tres
//https://regexr.com

let string_5 = "hola soy una cadena de cadena de craracteres dos dos tres cuatro dos dos cinco" 
 console.log(string_5.match(/o/g))
 console.log(string_5.includes('dos'))
 
 //saber si un una cadena empieza con 
 console.log(string_5.endsWith('dos'))
 //saber si un una cadena termina con 
 console.log(string_5.startsWith('dos'))