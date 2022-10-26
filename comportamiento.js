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
          alert("Tiene que escribir su nombre")
          document.
          document.formulario.nombre.focus()
          return 0;

    }
    
    if (email.value === null || email.value===''){
          alert("Tiene que escribir su mail")
          document.formulario.email.focus()
          return 0;

    }
    if (asunto.value === null || asunto.value===''){
          alert("Tiene que escribir un asunto")
          document.formulario.asunto.focus()
          return 0;

   }
   if (mensaje.value === null || mensaje.value===''){
    mensajesError.push('Ingresa tu mensaje');
   }
    
    //error.innerHTML=  mensajesError.join(', ');
    //return false;
    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();

}