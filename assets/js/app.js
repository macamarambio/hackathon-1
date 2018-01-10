$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 2000
    });
});

$('.btn-sign').click(function(){
    	/*if($('#Email').val() === ""){
    		alert("Ingesa tu Email");
    	}if($('#Password').val() === ""){
    		alert("Ingresa tu contraseña");
    	}else{
    		console.log("hola");
    	}*/
    		window.location.href="UserLoggedIn.html";
    });