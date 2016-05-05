// Escribe aquí tu codigo Javascript
var cuatrimestre ={
	"primer":["enero","febrero","marzo","abril"],
	"segundo" :["mayo","junio","julio","agosto"],
	"tercer":["setiembre","octubre","noviembre","diciembre"]
}
var mes = prompt("CUATRIMESTRE\nIngrese mes:").toLowerCase();
for(var prop in cuatrimestre){
	for(var i in cuatrimestre[prop]){
		if(mes===cuatrimestre[prop][i]){
			alert(prop + " Cuatrimestre")
		}
		//document.write(cuatrimestre[prop]+"<br>");
	}
	//document.write("<br>");
}


