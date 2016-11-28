$(document).ready(function(){
	 $("#login").click(function(){
		  username=$("#nombre").val();
		  password=$("#password").val();
		  $.ajax({
		   type: "POST",
		   url: "../Service/DAO/Login.php",
			data: "name="+username+"&pwd="+password,
		   success: function(html){
  			if(html=='true')    {
    			 //$("#add_err").html("right username or password");
    			 window.location="Canva.php";
    			}
    		else    {
    			alert("Usuario o contraseña incorrecta");
    			}
  		   }
		  });
		return false;
	});
});
