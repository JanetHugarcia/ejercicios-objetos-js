// Escribe aquí tu codigo Javascript
var bomba = {
	pagoxlitro:2.00,
	cantidad:50,
	llevado:null,
	disponible: function(){
		return  this.cantidad - this.llevado
	},
	costo:function(){
		return this.llevado*this.pagoxlitro
	}

}
while(bomba.cantidad>=0){
	bomba.llevado = parseFloat(prompt("GASOLINERA\nGasolina disponible: "+ bomba.cantidad +"L" + "\nCosto por litro: "+ bomba.pagoxlitro.toFixed(2)+"\n¿Cuántos litros llevará?"));
	alert("costo : " + bomba.costo().toFixed(2) + "\n" + "disponible : "+bomba.disponible()+ "L" + "\nGRACIAS POR SU COMPRA");
	bomba.cantidad=bomba.disponible();

	if(bomba.cantidad==0){
		alert("Ya no hay litros disponibles");
		break;
	}
}





