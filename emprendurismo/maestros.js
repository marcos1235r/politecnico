let mostrador=document.getElementById("mostrador");
let seleccionar=document.getElementById("seleccion");
let ImagenSeleccionada=document.getElementById("img");
let descripcion=document.getElementById("descripcion");

function cargar(item){
    quitarBordes()
    mostrador.style.width="83%";
    seleccionar.style.width="40%";
    
    seleccionar.style.opacity="1";
    
    ImagenSeleccionada.src=item.getElementsByTagName("img")[0].src;
    descripcion.innerHTML=item.getElementsByTagName("p")[0].innerHTML;
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

