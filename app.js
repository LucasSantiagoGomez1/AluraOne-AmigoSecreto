// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value;
    
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function alertaDeError(){
    alert("Ingrese un nombre valido")
}