$(function() {
    cargar();
    $("#nombre").val("");
    $("#mensaje").val("");
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

$("#mensaje").on("click", function(){
    desactivarTriggers();
    activarSaludo();
});

$("#nombre").on("click", function(){
    desactivarTriggers();
    activarSaludo();
});

function desactivarTriggers(){
    $("#txtMensaje").off("click");
    $("#txtNombre").off("click");
};

function textToggler(nombre){
    if($(nombre).text() == "+"){
        $(nombre).text("-");
    }
    else{
        $(nombre).text("+");
    }
};

var textoEasterEgg = "Gracias por utilizar mi caja de mensajes";
var ultimaLetraEasterEgg = 0;
var saludoController;

function activarSaludo(){
    saludoController = setInterval(escribirSaludo,50);
}

function desactivarSaludo(){
    clearInterval(saludoController);
}

function escribirSaludo(){
    let texto = "";
    if(ultimaLetraEasterEgg != textoEasterEgg.length){
        for (i = 0; i <= ultimaLetraEasterEgg; i++){
            texto += textoEasterEgg[i];
            $("#easterEgg").text(texto);
        }
        ultimaLetraEasterEgg++;
    }
    else{
        desactivarSaludo();
        activarNombre();
    }
};

var textoNombre = "Ingresa aquí tu nombre.";
var ultimaLetraNombre = 0;
var nombreController;

function activarNombre(){
    nombreController = setInterval(escribirInstruccionesNombre,50);
}

function desactivarNombre(){
    clearInterval(nombreController);
}

function escribirInstruccionesNombre(){
    let texto = "";
    if(ultimaLetraNombre != textoNombre.length){
        for (i = 0; i <= ultimaLetraNombre; i++){
            texto += textoNombre[i];
            $("#nombre").attr("placeholder",texto);
        }
        ultimaLetraNombre++;
    }
    else{
        desactivarNombre();
        activarMensaje();
    }
};

var textoMensaje = "Aquí ingresa tu mensaje, y luego presiona contactar.";
var ultimaLetraMensaje = 0;
var mensajeController;

function activarMensaje(){
    mensajeController = setInterval(escribirInstruccionesMensaje,50);
}

function desactivarMensaje(){
    clearInterval(mensajeController);
}

function escribirInstruccionesMensaje(){
    let texto = "";
    if(ultimaLetraMensaje != textoMensaje.length){
        for (i = 0; i <= ultimaLetraMensaje; i++){
            texto += textoMensaje[i];
            $("#mensaje").attr("placeholder",texto);
        }   
        ultimaLetraMensaje++;
    }
    else{
        desactivarMensaje();
    }
};
