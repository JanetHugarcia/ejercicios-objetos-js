// Escribe aquí tu codigo Javascript
var factura = {
	empresa : ["nombreEmpresa","direccionEmpresa","telefonoEmpresa","NIF_Empresa"],
	cliente:["nombreCliente","direccionCliente","telefonoCliente","NIF_Cliente"],
	lista: ["descripcion","precio","cantidad"],
	informacion:["formaPago"]
	
}
// lista: [{
// 		descripcion: "",
// 		precio: 0.0,
// 		cantidad:0
// 	}]

for (var i in factura){
	for(var k in factura[i]){
		document.write(factura[i][k] +": ");
		 factura[i][k] =(prompt("INgrese " + factura[i][k]));
		 document.write(factura[i][k] + "<br>");
	}

}
document.write("Importe total: " +parseInt(factura.lista[1])*parseInt(factura.lista[2]*(1.18)));