$(document).ready(function () {
	var credencial = {
		usuario: 'Leo Quintana',
		contraseña: '12345678',
	}
	var users = {
		usuario: '',
		contraseña: '',
	} 
	$('#form').on('submit', function (e) {
		e.preventDefault();
		users.usuario = $('#inputUsuario').val();
		users.contraseña = $('#inputContraseña').val();
		console.log(credencial);
		console.log(users);
	})
	$('#form').on('submit', function (e) {
		e.preventDefault();
		if (users.usuario == credencial.usuario && users.contraseña == credencial.contraseña) {
			alert("Correcto, se le redireccionara a la pagina solicitada :)");
			location='index2.html';
		} else {
			alert("Contraseña o Usuario incorrecto ja ja");
		}
	})
})


