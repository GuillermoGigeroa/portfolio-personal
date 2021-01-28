$(function() {
    $("#nombre").val("");
    $("#mensaje").val("");
    textToggler("#contacto");
    $("#contenidoContacto").hide();
    textToggler("#redes");
    $("#redesSociales").hide();
    textToggler("#datos");
    $("#contenedorDatos").hide();
});

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

var textoEasterEgg = "Gracias por utilizar mi caja de mensajes. Si no quieres contactar por WhatsApp, mi email se encuentra más abajo.";
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

$("#contactar").click(function(){
    var mensaje = $("#mensaje").val();
    var link = "https://api.whatsapp.com/send?phone=541169221781";
    if(mensaje == ""){
        mensaje = "Hola, he visto tu web y quiero hablar contigo."
        link = link + "&text=" + mensaje;
        window.open(link, "_blank");
    }
    else{
        link = link + "&text=" + mensaje;
        window.open(link, "_blank");
    }
})
