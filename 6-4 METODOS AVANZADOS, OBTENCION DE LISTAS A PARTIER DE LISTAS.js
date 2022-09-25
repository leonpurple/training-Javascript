//6-4 METODOS AVANZADOS, OBTENCION DE LISTAS A PARTIER DE LISTAS


// .map()  .filte()   .reduce()

const arrayCiudades  =  ['Barcelona', 'Madrid', 'Bilvao', 'Alicante','Zaragosa']
//con forEach recorro el array
arrayCiudades.forEach(element => {
	console.log(element) // Barcelona, Madrid, Bilvao, Alicante, Zaragoza
});

const city = arrayCiudades.forEach(element => {
	console.log(element) // Barcelona, Madrid, Bilvao, Alicante, Zaragoza
	return 4
});
console.log(city)//undefined

//obtener un nuevo array con .map() y ademas enumerar el indice a cada 
//ciudad empzando de 1 y no de cero 

const newArray = arrayCiudades.map((valor , indice)=>{
	return `${indice + 1} - ${valor}`
})
console.log(newArray)
//['1 - Barcelona', '2 - Madrid', '3 - Bilvao', '4 - alicante', '5 - Zaragoza' ]

//FORMA MODERNA OPTIMIZADA
//const newArray = arrayCiudades.map((valor, indeice)=> `${indice + 1} - ${valor}`)
console.log(newArray)

//---
//Método FILTER para filtrar elementos DE UN OBJETO 
//TRUE PARA LO QUE QUIERO OBTENER 
//FALSE PARA LO QUE NO QUIERO OBTENER 

const letras = [
	{nombre:'Borja', edad:16},
	{nombre:'Nico', edad:22},
	{nombre:'Natahly', edad:27},
	{nombre:'Lya', edad:17},
	{nombre:'Norman', edad:97},
]

/* const sonMayoresde21 = letras.filter(obj=>{
if(obj.edad > 21){
	return true
	}else{
	return false		
	}
}) */
//console.log(sonMayoresde21)
//[{nombre: 'Nico}, {nombre: 'Natahly', 'edad: 27', { nombre: 'Norman', edad: 97}}]
//forma optimizada

const sonMayoresde21 = letras.filter(obj=>obj.edad>21)
console.log(sonMayoresde21)
//[{nombre: 'Nico}, {nombre: 'Natahly', 'edad: 27', { nombre: 'Norman', edad: 97}}]

//AHORA QUIERO OBTENER TODAS LAS PERSONAS MENOS UNA PERSONA EJ:'Nico'
//le digo que me devuelava una true con todas las personas menos con nico !==

const listaSinNico = letras.filter(obj => obj.nombre !== 'Nico')
console.log(listaSinNico)
/* [
	{nombre:'Borja', edad:16},
	{nombre:'Natahly', edad:27},
	{nombre:'Lya', edad:17},
	{nombre:'Norman', edad:97},
] */

//metodo REDUCE SIRVE PARA OBTENER ALGO (UN VALOR, UN OBJ, UNA LISTA, ETC) A
//PARTIR DE UNA LISTA

//EJ:SUMAR TODAS LAS EDADES UTILIZANDO REDUCE
//ACEPTA 4 PARAMETROS 2 DE ELLOS SON OBLIGATORIOS

//OTRO EJEMPLO SUMA DE NUMEROS DE UN ARRAY LLAMADO VALORES

const valres = [ 2, 10, 8, 30, 50, 500]

const suma = valres.reduce((acumulado, cur, i, arrayActual) => {

	console.log(acumulado)
	console.log(cur)
	console.log(i)
	console.log(arrayActual)
	return acumulado + cur
})
console.log(suma)



