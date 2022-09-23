//casos muy especiales - breack , continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i= 0; i< lista.length; i++){

	if(lista[i]===3){
		continue;
	}
	let j = 50;
	const k = 100;

	console.log(lista[i])


	console.log(k)
	console.log(i)
	console.log(j)

	if(lista[i]> 5){
		break;
	}
	console.log(k);
	console.log(i);
	console.log(j);


}

//Cual es el ambito de un bucle

console.log(k);
console.log(i);
console.log(j);