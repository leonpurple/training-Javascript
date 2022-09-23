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



