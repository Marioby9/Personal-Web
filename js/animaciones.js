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

//Funciones para filtrar los proyectos del portfolio
const bTodos = document.getElementById("bTodos");
const bJava = document.getElementById("bJava");
const bPython = document.getElementById("bPython");
const bWeb = document.getElementById("bWeb");

const proyectos = Array.from(document.getElementsByClassName("proyecto"));

function mostrarProyectos(categoria) {
    proyectos.forEach(proyecto => {
        if (categoria === "Todos" || proyecto.id === categoria) {
            proyecto.style.display = "block";
        } else {
            proyecto.style.display = "none";
        }
    });
}

bTodos.addEventListener("click", () => mostrarProyectos("Todos"));
bJava.addEventListener("click", () => mostrarProyectos("Java"));
bPython.addEventListener("click", () => mostrarProyectos("Python"));
bWeb.addEventListener("click", () => mostrarProyectos("Web"));






