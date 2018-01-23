$(document).ready(function () {
	var credencial = {
		usuario: 'LeoQuintana',
		contraseña: '12345678',
	}
	$('#form').on('submit', function (e) {
		console.log();
		e.preventDefault();
		if ($('#inputUsuario').val() == credencial.usuario && $('#inputContraseña').val() == credencial.contraseña) {
			window.alert("si");
		} else {
			window.alert("no");
		}
	})	
})
