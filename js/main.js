$(document).ready(function () {
	var credencial = {
		usuario: 'Leo Quintana',
		contraseña: '12345678',
	}
	$('#form').on('submit', function (e) {
		e.preventDefault();
		credencial.usuario = $('#inputUsuario').val();
		credencial.contraseña = $('#inputContraseña').val();
	})
})