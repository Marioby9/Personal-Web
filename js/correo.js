//Enviar Correo
let cajaError = document.getElementById("cajaError");
let msjError = document.getElementById("msjError");
let bEnviar = document.getElementById("enviar");
let txtNombre = document.getElementById("txtNombre");
let txtTelefono= document.getElementById("txtTelefono");
let txtCorreo = document.getElementById("txtCorreo");
let txtAsunto = document.getElementById("txtAsunto");
let txtMensaje = document.getElementById("txtMensaje");

function vaciarCampos(){
    txtNombre.value = "";
    txtTelefono.value = "";
    txtCorreo.value = "";
    txtAsunto.value = "";
    txtMensaje.value = "";
}

function enviarCorreo(){
    let nombre = txtNombre.value;
    let telefono = txtTelefono.value;
    let correo = txtCorreo.value;
    let asunto = txtAsunto.value;
    let mensaje = txtMensaje.value;
    let error = "Error: ";
    let valido = true;

    if(nombre == "" || telefono == "" || correo == "" || asunto == "" || mensaje == ""){
        error += "Todos los campos deben estar rellenos";
        valido = false;
    }
    else{
        if(isNaN(telefono) || telefono.length != 9){
            error += "El telefono debe ser un numero de 9 cifras";
            valido = false;
        }
        if(valido === true && (correo.search(/@/) == -1 || correo.search(/\./) == -1)){
            error += "Formato de correo no válido";
            valido = false;
        }
 
    }

    if (valido === true){
        cajaError.style.display = "none";
    }
    else{
        cajaError.style.display = "flex";
        msjError.textContent = error;
        //vaciarCampos();
    }
    
}

bEnviar.addEventListener("click", enviarCorreo);