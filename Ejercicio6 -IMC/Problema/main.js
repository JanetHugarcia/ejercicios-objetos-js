// Escribe aquí tu codigo Javascript
var persona ={
	peso : 0.0,
	altura: 0.0,
	imc: function(){
		return this.peso/(Math.pow(this.altura,2))
	}
};
persona.peso = parseFloat(prompt("Ingrese peso: "));
persona.altura=parseFloat(prompt("Ingrese altura: "));

alert("IMC\nSu indice de masa corporal es: "+persona.imc().toFixed(2));

