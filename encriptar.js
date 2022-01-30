var btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function(event) {
	event.preventDefault();
	var contenido = document.getElementById('msj-orig');
	contenido.select();

	var textoOriginal = contenido.value;

	var reemplazo = textoOriginal.replace(/e/g,"enter");

	var reemplazado = [/i/g, /a/g, /o/g, /u/g]

	var reemplazante = ["imes","ai","ober","ufat"]

	for (var j = 0; j < reemplazado.length; j++) {

		var reemplazosTodos = reemplazo.replace(reemplazado[j],reemplazante[j]);

		var reemplazo = reemplazosTodos;

	}

    document.formResult.resultFinal.value = reemplazo;

});

console.log((1+1)%2)