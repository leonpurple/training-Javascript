//6-3 MÉTODOS DE ITERACIÓN EN LISTAS

//ITERERAR LOS VALORES EN UNA LISTA 

const array = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto']
//forma antigua de recorrer un array y menos eficiente
for (let i = 0; i < array.length; i++){
	console.log(array[i])
}



const arrayEstaciones = ['otoño', 'primavera', 'verano', 'invierno']
//forma moderna ES6 (metodo forEach con callback)
arrayEstaciones.forEach(valor => {
	console.log(valor)
})

//ejemplo de forEach para sumar valores de un array
let suma = 0
const sumarValores = [ 100, 900, 8000 , 1000]
sumarValores.forEach(valor =>{
	suma += valor
	console.log(suma)
})
console.log(suma)

//buscar un valor dentro de una lista
//.find()
//quiero encontrar el elemento 900 deforma correcta pero poco eficiente 

const variable = sumarValores.find(valor => {
	if(valor === 1000) {
	return true
	}
})
console.log(variable)
//cobra mas sentido cuando tengo una lista de objetos

const listaObjetos = [
	{'nombre':'Soe','edad':'14'},
	{'nombre':'Joel','edad':'13'},
	{'nombre':'Cruz','edad':'27'},
	{'nombre':'Paz','edad':'33'}
]
/* const objeto = listaObjetos.find(o => {
	if(o.nombre === 'Cruz'){                     //forma larga 
	return true
	}
})
console.log(objeto.edad) */
//--- 
/* const objeto = listaObjetos.find(o => {       // forma media 
	return o.nombre === 'Cruz'
})
console.log(objeto.edad) */
//---
const objeto = listaObjetos.find(o =>  o.nombre === 'Cruz' //forma moderna 
)
console.log(objeto.edad)
//---
const {edad} = listaObjetos.find(o => o.nombre === 'Cruz')// otra manera moderna 
console.log(objeto.edad)

//indico en tre llaves edad porque es parte del objeto y = le paso todo el metodo 