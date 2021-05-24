//Para incorporacion de objetos incluiremos una pequeña lista del carrito de compras a tener en consideracion
//Creacion de objetos literales
const producto1 = {
    nombre: "Estereo",
    precio: "6500"
}

const producto2 = {
    nombre: "Llantas",
    precio: "20000"
}

const producto3 = {
    nombre: "Parlantes",
    precio: "9000"
}
//Mostramos por consola los objetos creados
console.log(producto1, producto2, producto3);

//CLASES
class Electrodomesticos{
    constructor(producto, marca, modelo){
        this.producto = producto;
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarElectrodomesticos(){
        console.log(this.producto + " - " + this.marca + " - " + this.modelo);
    }
}

let miEstereo = new Electrodomesticos("Estereo", "Pioneer", "K11");
let miParlante = new Electrodomesticos("Parlantes", "Pioneer", "F456");
let miLlantas = new Electrodomesticos("Llantas", "Robber", "fury")
let miAntiNieblas = new Electrodomesticos("Anti Nieblas", "Cree", "LED");
miEstereo.mostrarElectrodomesticos();
miParlante.mostrarElectrodomesticos();
miLlantas.mostrarElectrodomesticos();
miAntiNieblas.mostrarElectrodomesticos();
