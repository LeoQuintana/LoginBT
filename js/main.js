$(document).ready(function () {
	var credencial = {
		usuario: 'Leo Quintana',
		contraseña: '12345678',
	}
	$('#form').on('submit', function (e) {
		e.preventDefault();
		if ($('#inputUsuario').val() == credencial.usuario && $('#inputContraseña').val() == credencial.contraseña) {
			window.alert("Correcto, se le redireccionara a la pagina solicitada :)");
			window.location='index2.html';
		} else {
			window.alert("Contraseña o Usuario incorrecto");
		}
	})
	/*$('#form').on('submit', function (e) {
		e.preventDefault();
		if ($('#form') == credencial) {
			alert("si");
		} else {
			alert("noo");
		}
	})*/	
})
