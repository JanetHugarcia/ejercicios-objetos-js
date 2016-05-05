// Escribe aquí tu codigo Javascript
var circulo = {
	radio:null,
	area: function(){
		return (Math.PI*Math.pow(this.radio,2))
	},
	longitud:function(){
		return 2*this.radio*Math.PI
	}
}
circulo.radio = parseInt(prompt("Ingrese radio"));

alert("CIRCULO\nEl area : " + circulo.area().toFixed(2) + "\n" +
	"La longitud es : " +circulo.longitud().toFixed(2));

