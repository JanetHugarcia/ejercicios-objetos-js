// Escribe aquí tu codigo Javascript
var factura = {
	empresa : ["nombreEmpresa","direccionEmpresa","telefonoEmpresa","NIF_Empresa"],
	//cliente:["nombreCliente","direccionCliente","telefonoCliente","NIF_Cliente"],
	lista: ["descripcion","precio","cantidad"]
	//informaacion:["importeTotal","tipoIVA","formaPago"],
	
}
// lista: [{
// 		descripcion: "",
// 		precio: 0.0,
// 		cantidad:0
// 	}]
function calc(){
	return factura.lista[1]*factura[2][2];
}
for (var i in factura){
	for(var k in factura[i]){
		document.write(factura[i][k] +": ");
		 factura[i][k] =(prompt("INgrese " + factura[i][k]));
		 document.write(factura[i][k] + "<br>");
		 if(factura.lista)
	}

}
document.write(parseInt(factura.lista[1])*parseInt(factura.lista[]));