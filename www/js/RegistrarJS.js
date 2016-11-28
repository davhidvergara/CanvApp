$(document).ready(function(){


	$("#btnRegistrar").click(function(){
		alert("Si entra");
		$.post("../Service/AlumnoService.php",
			{
				matricula:$("#matricula").val(),
				nombre:$("#nombre").val(),
				apellidop:$("#apellidop").val(),
				Apellidom:$("#apellidom").val(),
				correo:$("#correo").val(),
				carrera:$("#carrera").val(),
				pass:$("#pass").val()
			},
			function(data){
				window.location="Canva.html";
		});
  });

});
