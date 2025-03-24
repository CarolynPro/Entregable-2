function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("tel").value;
    const mensaje = document.getElementById("Mensaje").value;
    

    if (!nombre) { alert( "Ingrese campo Nombre" ); return false; }
    if( email.length == 0 ){ alert( "Ingrese campo Correo" ); return false; }
    if( celular == "" ){ alert( "Ingrese campo Teléfono" ); return false; }
    if( mensaje.length == 0 ){ alert( "Ingrese campo Correo" ); return false; }
    
    else{
        alert("Registro completo");
        return true;
    }
}
