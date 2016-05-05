// Escribe aquí tu codigo Javascript
var inversion ={
	valor:null,
	tasa:null,
	periodo:null
}

for(var prop in inversion){
	inversion[prop] = prompt("Ingrese "+ prop);
}

var resultado = inversion.valor*Math.pow(1+inversion.tasa/100,inversion.periodo);

alert("La inversion es "+resultado.toFixed(2));