// Escribe aquí tu codigo Javascript
var contacto = [];

var n=parseInt(prompt("Ingrese numero de contactos:"));

for(var i=1;i<=n;i++){
	var persona = {} ;
	persona.nombre=prompt("Ingrese nombre");
	persona.telefono = parseInt(prompt("Ingrese telefono"));
	//document.write(persona.nombre + " " + persona.telefono);
	contacto.push(persona);
}
var llamada = prompt("Ingrese numero");

for(var k in contacto){
	document.write(contacto[k] + " " + contacto);
}

