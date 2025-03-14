// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
amigos = [];

function asignarTextoID(ID, texto) {
    ID.innerHTML = texto;
    return;
}

//función para activar el boton añadir con la tecla enter
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar que el formulario se envíe
        agregarAmigo();
    }
});

function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value.trim();
    if (amigoAgregado === "") {
        alert("Error: El campo de nombre no puede estar vacío.");
        return;
    }
    //compara si el valor agregado es o contiene un numero
    if (/\d/.test(amigoAgregado)) {
        alert("Error: El nombre no puede contener números.");
        limpiarCaja()
        return;
    }
    else{
        amigos.push(amigoAgregado)
        limpiarCaja()
    }
    asignarTextoID(document.getElementById("listaAmigos"),amigos);
}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("Error: No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo seleccionado
    let amigoSeleccionado = amigos[amigoAleatorio];

    // Mostrar el resultado en pantalla
    asignarTextoID(document.getElementById("resultado"),`El amigo secreto sorteado es: ${amigoSeleccionado}`);

    asignarTextoID(document.getElementById("listaAmigos"),'');

}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}
