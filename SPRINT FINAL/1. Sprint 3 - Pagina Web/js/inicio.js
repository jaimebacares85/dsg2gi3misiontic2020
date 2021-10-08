function myfuncion(){
    var boton = document.getElementById("inicioadmi");
    alert(boton.innerHTML);
    var label = document.getElementById("inicione");
    alert(label.innerHTML);

    var detalleEnvio = {
        method:"POST",
        body:{
            "nombre":boton,
            "correo":label,
        }
    }

    fetch("http:localhost:3000/api/crear_nota", detalleEnvio).then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        if (respuesta.exito===true)
    })


}