// Escribe aquí tu codigo Javascript
var factura = {
	empresa : ["nombreEmpresa","direccionEmpresa","telefonoEmpresa","NIF_Empresa"],
	cliente:["nombreCliente","direccionCliente","telefonoCliente","NIF_Cliente"],
	lista: ["descripcion","precio","cantidad"],
	informaacion:["importeTotal","tipoIVA","formaPago"]
}

for (var i in factura){
	for(var k in factura[i]){
		document.write(factura[i][k] +": ");
		 factura[i][k] =prompt("INgrese " + factura[i][k]);
		 document.write(factura[i][k] + "<br>");
	}

}