

//----------//
// TEMA 6-6 //
//----------//
//identificar si existe un valor en un array y objetos iterables

//---------//
// .some() //
//---------//

const arrayNum = [ 100, 101, 102, 105, -2]

const  res = arrayNum.some(valor => valor < 500) 
const res2 = arrayNum.some(valor => valor > 500) 
const res3 = arrayNum.some(valor => valor < -10) 

console.log(res, res2, res3)//true  //false //false

//me puede interesar saber si en el array hay valor que exista
const res4 = arrayNum.some(val => val === 100)
const res5 = arrayNum.some(val => val === 200)
const res6 = arrayNum.some(val => val === -2)
console.log(res4, res5, res6) //true false true

//ejemplo con objeto nombreEdad

const nombreEdad = [
	{nombre:'Borja',   edad:16},
	{nombre:'Nico',    edad:22},
	{nombre:'Natahly', edad:27},
	{nombre:'Lya',     edad:17},
	{nombre:'Norman',  edad:97},
]

const resObj  = nombreEdad.some(valor => valor.nombre === 'Nico')
const resObj2 = nombreEdad.some(persona => persona.nombre === 'Nico')
const resObj3 = nombreEdad.some(persona => persona.nombre === 'Juan')//false
//false por que juan no existe en nombreEdad

console.log(resObj, resObj2, resObj3)//true  //true //false

//---------------//
// MÉTODO .from()//
//---------------//

//Cómo obtener una lista a partir de un objeto iterable
const str = 'Hello WORLd'
console.log(str[6]) //W

//---
const st = 'Amor'
const st_array = Array.from(st)
console.log(st_array) //['A','m','o','r']

//---
const set = new Set([2, 3, 'hola', 4])
const ar_set = Array.from(set)
console.log(ar_set)//[ 2, 3,'hola',4]


//---
//const keys = array.keys()
//console.log(keys)

//const ar_keys = Array.from(keys)
//console.log(ar_keys)