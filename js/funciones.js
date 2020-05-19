function accionBoton()
{
    var textoNombre = $("nombre").value;
    var textoMail = $("mail").value;
    var textoMensaje = $("mensaje").value;
    if (textoNombre == "")
    {
        alert("No se ha ingresado ningún nombre.");
        return;
    }
    if (textoMail == "")
    {
        alert("No se ha ingresado ningún mail.");
        return;
    }
    if (textoMensaje == "")
    {
        alert("No se ha escrito ningún mensaje");
        return;
    }
    var textoCompleto = textoNombre+'\n'+textoMail+'\n'+textoMensaje;
    var textoCompleto = "Se ha ingresado correctamente:"+'\n';
    textoCompleto += "Nombre: "+textoNombre+'\n';
    textoCompleto += "Mail: "+textoMail+'\n';
    textoCompleto += "Mensaje: "+textoMensaje+'\n'+'\n';
    textoCompleto += "Esta función todavía está en desarrollo."+'\n'+"Muchas gracias por su colaboración.";
    alert(textoCompleto);
}
$(document).ready(function(){
    $(".btn").click(function(){
        accionBoton();
    });   
});
