[Ecma International](https://www.ecma-international.org/)

[EcmaScript compatibility table](https://kangax.github.io/compat-table/es6/)

[plataforma de js exercices](https://www.w3resource.com/javascript-exercises/)

---

## pluggins para desarrollar en js

---
### ES6 Code Snippets
This extension contains code snippets for JavaScript in ES6 syntax for Vs Code editor (supports both JavaScript and TypeScript).

---
### Prettier ( shift + alt + F )

Formatter for Visual Studio Code
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
JavaScript · TypeScript · Flow · JSX · JSON
CSS · SCSS · Less
HTML · Vue · Angular HANDLEBARS · Ember · Glimmer
GraphQL · Markdown · YAML

---

### Bracket Pair Colorization

a VS Code extension that gives you a simple command to quickly toggle the global “Bracket Pair Colorization” setting added in VS Code v1.60.

---
### Indent-Rainbow
A simple extension to make indentation more readable

---

### Quokka.js
Visual Studio Code Extension
Quokka.js is a developer productivity tool for rapid JavaScript / TypeScript prototyping. Runtime values are updated and displayed in your ID


---

### live Server

Launch a local development server with live reload feature for static & dynamic pages.

---
### node

---

[node.js](nodejs.org) 

``node -v``

``npm -v``

---
# 1.Introducción a JavaScript

- Introducción al curso

- Node y NPM

- Primer proyecto Node

- Ejecución y comentarios

# 2.Sintaxis, variables y palabras reservadas de JS

- Tipado en JS y tipos primitivos

- Declaración de variables y escritura dinámica

- Notación en JavaScript

- Listas, Objetos y Fechas en JS

# 3.Estructuras de control

- Bifurcaciones if else y switch

- Comparaciones en JS

- Bucles for y while

- Formas de controlar los bucles con continue y break

- Etiquetas en los bucles

# 4.Cadenas de texto

- Tipos de declaracion de strings y cuando utilizarlos

- Metodos mas comunes de los strings

- Manipulación de cadenas de texto

- Expresiones regulares y metodos de busqueda de cadenas
  
# 5.Números en JavaScript

- Numbers y precisión en JS

- Operaciones y redondeo

- Métodos de numbers y límites en JS

```
Enunciado del ejercicio:

Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript 
``` 
  
# 6.Trabajando con listas

- Listas y métodos de mutacion de listas
```javascript	
	//'c'omo trabajar con listas (arrays, arreglos, vectores)

let var1 = 111
let array = [1002, "hola", false, {id: 5}, null, undefined, var1]

console.log(array)

//Acceder a los valores de un array a traves z de su posicion
//array[indice] => 0, 1, 2, 3, 4, 5, .....

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])


// Metodos para introducir elementos de un array a atraves de su posicion

//AL FINAL DEL ARRAY METODO .push()
array.push('helicopteros_CSS')
array.push('CSS','HTML','JSON','QUOKKA')

//METODO PARA AGRAGAR ELEMENTO AL PRINCIPIO  .shift()
array.unshift('CCOCCUN')

console.log(array)

console.log(array[7])

//MÉTODOS PARA ELIMINAR LOS VALORES EN ARRAYS --> 
//.pop() ---> .shift()


//elimina valores al final
array.pop()
console.log(array)

//elimina  Valores al principio
array.shift()
console.log(array)

//Método para eliminar, modificar o añadir valores en nuestro array
//.splice(x, y, z)
const array_1 = ['A','B','C','D','E','F','G','H']

console.log(array_1)
array_1.splice(3, 5)
console.log(array_1)

//agrega valores con splice 

array_1.splice(2, 0, "222")
console.log(array_1)
array_1.splice(3, 0, "OTOÑO", 'VERANO')
console.log(array_1)


//MODIFICAR VALORES
array_1.splice(2, 1, 'PRIMAVERA')
console.log(array_1)





```
- 6-2.Concatenación y obtención de fragmentos de listas

```javascript
	

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

```
- Métodos de iteración en listas TEMA 6/3

```javascript
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
```
- Métodos avanzados, obtención de listas a partir de listas
- Ordenación de listas y comparación entre dos listas
- Identificar si existe un valor en un array y objetos iterables

```
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

```

# 7.Trabajando con Sets y Objetos

- Trabajando con Sets

- Objetos en JavaScript

- Fechas en JavaScript

- Uso de la consola en JavaScript
  
# 8.Introducción a las funciones

- Introducción a las funciones en JavaScript

- Funciones de tipo flecha y anónimas

- Carga y sobrecarga de funciones

- Funciones asíncronas y promesas

- Funciones generadoras  
  
# 9.Gestión de errores

- Errores en JavaScript

- Gestión de logs en NodeJS
  
# 10.Módulos en JavaScript

- Módulos y su utilización con CommonJS

- Utilizando módulos con ES6

- Librerías en Node y NPM y su utilización

- Librerías interesantes

# 11.POO en JavaScript

- Introducción a la Programación Orientada a Objetos

- Creación y uso de clases en JavaScript

- Ámbito de las clases, métodos y atributos públicos, privados y protegidos

- Getters y Setters en objetos

- Herencia y Polimorfismo

- Por qué no se habla de Interfaces en JavaScript y alternativas

# 12.Depuración de código

- Introducción a la Depuración en VSCode

# 13.Configuracion y uso de ESLint

- Qué es el linting y ESLint

- Fichero de configuración ESLint

- Instalación y creación de ficheros de configuración personalizados

- Reglas temporales y scrips para ejecución de ESLint en nuestro código
  
# 14.Gestión de eventos

- Introducción a HTML con JS

- Utilización de librerías de terceros

- Manejo de eventos en JavaScript

- Eventos personalizados

- JQuery

- Alertas y Dialogos en pantalla

# 15.Persistencia de datos en navegador

- Persistencia de datos en navegador
  
# 16.Aplicando Drag & Drop

- Drag and Drop con JavaScript
  
# 17.Usando Geolocalización

- Inicialización de Mapas en HTML

- Geolocalización