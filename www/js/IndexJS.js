$(document).ready(function(){


	$("#btnRegistrar").click(function(){
		alert("Si entra");
		$.post("../Service/AlumnoService.php",
			{
				Matricula:$("#matricula").val(),
				Nombre:$("#nombre").val(),
				ApellidoP:$("#apellidop").val(),
				ApellidoM:$("#apellidom").val(),
				Correo:$("#correo").val(),
				Carrera:$("#carrera").val(),
				Pass:$("#pass").val()
			},
			function(data){
				window.location="Index.html";
		});

	});


});

//Tarea como Procesar el Jason $.each
