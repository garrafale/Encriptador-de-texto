var btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click",function(event) {
	event.preventDefault();
	var contenido = document.getElementById('msj-orig');
	contenido.select();

	var textoOriginal = contenido.value;

	var reemplazo = textoOriginal.replace(/enter/g,"e");

	var reemplazado = [/imes/g,/ai/g,/ober/g,/ufat/g]

	var reemplazante = ["i", "a", "o", "u"]

	for (var j = 0; j < reemplazado.length; j++) {

		var reemplazosTodos = reemplazo.replace(reemplazado[j],reemplazante[j]);

		var reemplazo = reemplazosTodos;

	}

	document.formResult.resultFinal.value = reemplazo;

});