// Script para que solicita Nombre y apellido y a su vez lo imprime como alerta y en console.log
var primerNombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");
var nombreCompleto = primerNombre + " " + apellido;
alert ("Hola!" + " " + nombreCompleto + " " + "Como estas?");
console.log("Hola!" + " " + nombreCompleto + " " + "Como estas?");

// Script que solicita dos edades para luego imprimir la suma de las mismas
let primeraEdad = parseInt(prompt("Ingresa tu edad:"));
let segundaEdad = parseInt(prompt("Ingresa la edad de tu pareja"));
let sumaEdades = (primeraEdad + segundaEdad);
alert ("La suma de ambas edades da un total de" + " " + sumaEdades)



