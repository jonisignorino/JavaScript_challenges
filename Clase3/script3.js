//Algoritmo donde se solicita un numero y le suma los valores del 1 al 15 mostrando el resultado
let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = 1; i <= 15; i++) {
    let resultado = ingresarNumero + i;
    alert(ingresarNumero +" + "+ i +" = "+ resultado);
}

//Algoritmo que solicita un dato continuamente hasta que el usuario ingresa "Salir"
let entrada = prompt ("Ingresar un dato");
//Repetimos while hasta que el usuario ingresa "Salir"
while (entrada != "Salir") {
    alert("El usuario ingreso" + " " + entrada + " " + "(Ingresa Salir para finalizar)");
    entrada = prompt("Ingresar otro dato");
}

