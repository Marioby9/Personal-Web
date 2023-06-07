let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("presion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

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

