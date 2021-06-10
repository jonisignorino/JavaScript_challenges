//Script para demostrar el uso de eventos siguiendo ejemplo de la clase

function capturarEventos(){
    let nombre = prompt("Ingresa tu edad");
    let fecha = new Date();
    alert("Hola " + nombre + " Te informo que tu edad es: " + fecha);
}

// Eventos de Mouse
let primerBoton = document.getElementById("botonHtml");
primerBoton.onclick = () => {capturarEventos()};

primerBoton.onmouseover = () => {console.log("Evento generado al pasar el raton por encima del boton")};

//Eventos de teclado
let primerCampo = document.getElementById("dni");
campo1.onkeypress = () => {console.log("KeyPress")};
campo1.onkeydown = () => {console.log("KeyDown")};

//Evento de ventana
window.onload = function(){
    alert("Ventana Cargada Correctamente");
}