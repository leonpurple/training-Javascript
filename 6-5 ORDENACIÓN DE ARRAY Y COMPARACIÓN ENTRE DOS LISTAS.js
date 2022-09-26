// 6.TRABAJANDO CON LISTAS
// 6-7 Ordenación de Array y comparación entre dos listas

//--------------//
//MÉTODO .sort()
//--------------//

// -> MËTODO .sort()--> método máseficiente para ordenar LISTAS
// -> .sort()-> MODIFICA EL ARRAY
// -> a .sort()-> le paso un funcion CALLBACK y esta  recibe dos parametros:
// uno es el() indice ANTERIOR ), y el otro ( indice POSTERIOR)

// -> si en  retorn indico -1 INVIERTE EL ORDEN 
// -> en esta funcion es obligatorio que retorne un numero:
// ( negativo ) ( positivo ) o ( cero )

const array = [20, 10, 50, 80, 40, 90, 70, 0, 60, 30]
//---
array.sort((a, b) => {
	return -1 //invierte el ORDEN
})
console.log(array)
// [ 30 , 60 , 70 , 90 , 40 , 80 , 50 , 10 , 20 ]

//---
array.sort((a, b) => {
	if (a < b) {  //quiero que a tenga un indice mayor que b
		return -1 //invierte el ORDEN
	} else if (a > b) {
		return +1
	} else { //a === b
		return 0 // si a === a b retorno un 0
	}
})
console.log(array)
// [0, 10, 20, 30, 40, 50, 60 ,70, 80, 90 ]

//---
//ORDENAR ÚNICAMENTE ARRAYS NUMÉRICOS
const arrayNumerico = [444, 333, 666, 222, 111, 555, 888]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)
// [ 111, 222, 333, 444, 555, 666, 888]

//---
//ORDENAR ÚNICAMENTE ARRAYS NUMÉRICOS
const arrayNumeric = [44, 33, 66, 22, 11, 55, 88]

arrayNumeric.sort((a, b) => b - a) // b - a
console.log(arrayNumeric)
// [ 88, 66, 55, 44, 33, 22, 11 ]

//---
const listaPersonas = [
	{ nombre: 'Tota', edad: 16 },
	{ nombre: 'Nico', edad: 22 },
	{ nombre: 'Naty', edad: 27 },
	{ nombre: 'Lola', edad: 17 },
	{ nombre: 'Joel', edad: 97 },
]

listaPersonas.sort((a, b) => {
	if (a.edad < b.edad) {
		return -1
	} else if(a.edad > b.edad) {
		return +1
	} else {
		return 0
	}
})
console.log(listaPersonas)
/* [
	{ nombre: 'Tota', edad: 16 },
	{ nombre: 'Lola', edad: 17 },
	{ nombre: 'Nico', edad: 22 },
	{ nombre: 'Naty', edad: 27 },
	{ nombre: 'Joel', edad: 97 },
] */

//---
//FORMA moderna corta seria 

listaPersonas.sort((a, b) => a.edad - b.edad )
console.log(listaPersonas)
/* [
	{ nombre: 'Tota', edad: 16 },
	{ nombre: 'Lola', edad: 17 },
	{ nombre: 'Nico', edad: 22 },
	{ nombre: 'Naty', edad: 27 },
	{ nombre: 'Joel', edad: 97 },
] */


//--------------//
//MÉTODO .every()
//--------------//


//Cómo puedo comparar listas
//el metodo every nos dice si TODOS los componentes de esta lista 
//cumplen una condicion

//EJEMPLO CON ARRAY DE NUMEROS
const arrayDeNumeros = [22, 11, -55,-33,44, 66]

result = arrayDeNumeros.every( valores => {
	if(typeof valores === 'number'){
		return true
	}else{
		return false
	}
})
console.log(result) //true  
//porque todos los valores son type = 'number' 


result = arrayDeNumeros.every( valores => {
	if(valores < 0){
		return true
	}else{
		return false
	}
})
console.log(result)//false 
//porque hay en valores hay numeros negativos

//---
//ahora SIMPLIFICADO de forma actual y moderna 

const resultado = arrayDeNumeros.every(valor => valor > 0)
console.log(resultado)//false 


//--------------------//
//COMPARACIÓN DE LISTA
//--------------------//

//las listas no se pueden comparar de esta manera por lo tanto el resultado da false 
const lista1 = [1, 2]
const lista2 = [1, 2]

console.log(lista1 == lista2) //false  ///devilmente typado
console.log(lista1 === lista2)//false  ///fuertemente mente typado


//funcion de apoyo ya conociendo el metodo .every()

const compararArray = (lista1, lista2) => {
	if(lista1.length !== lista2.length)return false
	const res = lista1.every((valor, i )=> valor === lista2[i]) 
	return res
}

console.log(compararArray(lista1, lista2))
const lista3 = [1,2,3,4]
console.log(compararArray(lista1, lista2))

