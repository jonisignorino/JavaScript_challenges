// A continuacion aplicaremos DOM a un ejercicio similar al visto en la clase
// Actualmente me encuentro trabajando en el HTML que quiero usar en mi proyecto final, por este motivo no lo puedo usar todavia

let primeraSeccion = document.getElementById("section-1");
console.log(primeraSeccion.innerHTML);
console.log(primeraSeccion.innerText);
primeraSeccion.style.color = "red";

let link = document.getElementById("youtube-link");
console.log(link.innerText);
link.style.background = "green";

function modificandoParrafos(){
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos.length);
    parrafos[0].style.background = "pink";
    parrafos[1].innerText = "Modificacion por JavaScript";
}

let titulo = document.createElement("title");
titulo.innerText = "Web Page Title";
primeraSeccion.appendChild(titulo);

let newButton = document.createElement("button");
newButton.innerText = "Prueba de innertext";
newButton.style.border = "8px solid red";
newButton.style.font = "bold 30px Calibri";
newButton.setAttribute("onclick", "titulo.parentNode.removeChild(tit)");
document.getElementById("section-2").appendChild(newButton);





