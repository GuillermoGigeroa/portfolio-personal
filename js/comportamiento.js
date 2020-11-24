var textoEasterEgg = "Muchas gracias por utilizar mi caja de mensajes";
var ultimaLetra = 0;
var oculto = false;

$(function() {
    cargar();
    $("#txtNombre").val("");
    $("#txtEmail").val("");
    $("#txtMensaje").val("");
    textToggler("#contacto");
    $("#contenidoContacto").hide();
    textToggler("#redes");
    $("#redesSociales").hide();
    textToggler("#datos");
    $("#contenedorDatos").hide();
    $(".cssload-thecube").fadeToggle(2000);
    window.setTimeout(cargar,2001);
    window.setTimeout(mostrarDebajo,2002);
});

function cargar(){
    $("#todo").fadeToggle(1000);
}

function mostrarDebajo(){
    $("#cajaAnimacion").css("margin-bottom","0");
}

$("#contacto").click(function(){
    textToggler("#contacto");
    $("#contenidoContacto").slideToggle(500);
});

$("#redes").click(function(){
    textToggler("#redes");
    $("#redesSociales").slideToggle(500);
});

$("#datos").click(function(){
    textToggler("#datos");
    $("#contenedorDatos").slideToggle(500);
});

$("#txtMensaje").keydown(function(){
    escribirSaludo();
});
$("#txtNombre").keydown(function(){
    escribirSaludo();
});
$("#txtEmail").keydown(function(){
    escribirSaludo();
});

function textToggler(nombre){
    if($(nombre).text() == "+"){
        $(nombre).text("-");
    }
    else{
        $(nombre).text("+");
    }
};

function escribirSaludo(){
    let texto = "";
    if(ultimaLetra != textoEasterEgg.length){
        for (i = 0; i <= ultimaLetra; i++){
            texto += textoEasterEgg[i];
            $("#easterEgg").text(texto);
        }
        ultimaLetra++;
    }
};