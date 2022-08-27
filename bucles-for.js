for (let i = 0; i < 10; i++){
console.log(i)
}




let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for(let i = 0; i < lista.length; i++){
	console.log(lista[i])


}

let listas = [ 1000, 1000, 5000];
for (let i = 0; i < listas.length; i++){
	console.log(listas[i] * 2 )
}

//extructura for of

for( let valor of lista){
	console.log(valor)
}

//extruct forEach

lista.forEach(valor => {
	console.log(valor)
})

//Extructura  For..in

let persona = {
	nombre: "Gorka",
	apellido: "Villar",
	edad: 34,
	isDeveloper: true
}
//acceder a las propiedad del objeto con un for in 
for(let propiedad in persona){
	console.log(propiedad)
	console.log(persona)
	console.log(persona[propiedad])
	
}
//acceder a la valor de la propiedad nombre 
	console.log(persona.nombre)

	let prop = "edad";
	console.log(persona.prop) //porque la propiedad prop no existe en persona
	console.log(persona[prop])// entre corchetes

//	



