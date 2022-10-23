var nombre = document.getElementById('nombre')
var email = document.getElementById('email')
var asunto = document.getElementById('asunto')
var mensaje = document.getElementById('mensaje')
var error = document.getElementById('error')
error.style.color = 'red';
function enviarFormulario(){

    console.log("Enviando formulario...")

    var mensajesError = [];
    if (nombre.value === null || nombre.value===''){
         mensajesError.push('Ingresa tu nombre');
    }
    
    if (email.value === null || email.value===''){
         mensajesError.push('Ingresa tu email');
    }
    if (asunto.value === null || asunto.value===''){
         mensajesError.push('Ingresa tu asunto');
   }
   if (mensaje.value === null || mensaje.value===''){
    mensajesError.push('Ingresa tu mensaje');
   }

    error.innerHTML=  mensajesError.join(', ');


    return false;
}