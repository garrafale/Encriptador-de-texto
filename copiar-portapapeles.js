function copiarAlPortapapeles() {
	var contenido = document.getElementById('msj-result');	
	contenido.select();

	document.execCommand('copy');
	event.preventDefault();	
}

