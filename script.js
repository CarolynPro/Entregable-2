function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("tel").value;
    const mensaje = document.getElementById("Mensaje").value;
    

    if (!nombre) { alert( "Ingrese campo Nombre" ); return false; }
    if( email.length == 0 ){ alert( "Ingrese campo Correo" ); return false; }
    if( celular == "" ){ alert( "Ingrese campo Celular" ); return false; }
    if( mensaje.length == 0 ){ alert( "Ingrese campo Describe los productos de interes" ); return false; }
    
    else{
        alert("Registro completo");
        return true;
    }
}
