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
var llamada = parseInt(prompt("Ingrese numero"));
var j=0;
for(var k in contacto){
	if(contacto[k].telefono === llamada){
		alert( contacto[k].nombre + " te está llamando...");
	}else{
		j++;
	}	
}
if(j==n){
	alert( llamada + " quiere comunicarse contigo..");
}
	
