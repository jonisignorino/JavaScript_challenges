// Para la primer entrega del proyecto final voy a trabajar unir la mayor cantidad de funcionalidades que fuimos viendo
// En esta instancia no tengo del todo claro como me gustaria que funcione mi carrito de compras y espero poder ir mejorandolo con futuras iteraciones.
// A continuacion empleo ejemplos para utilizar en el simulador

//Solicitud al usuario de los detalles de su producto y concatenacion de resultados
var producto1 = prompt("Ingrese el nombre de su prodcuto");
var precio1 = parseInt(prompt("Ingrese el precio"));
var cantidad1 = parseInt(prompt("Ingrese la cantidad que desea comprar"));
var listaCompleta = producto1 + " " + producto2 + " " + producto3;
alert( "El detalle total del producto ingresado es: " + listaCompleta);
console.log( "El detalle total del producto ingresado es: " + listaCompleta);

//Creacion de objetos

const producto1 = {
    nombre: "Celular",
    precio: "65000"
}

const producto2 = {
    nombre: "Television",
    precio: "50000"
}

const producto3 = {
    nombre: "Laptop",
    precio: "90000"
}

const producto4 = {
    nombre: "MousePad",
    precio: "5000"
}

const producto5 = {
    nombre: "Soporte",
    precio: "3000"
}

console.log(producto1, producto2, producto3, producto4, producto5);

class tecnologia{
    constructor(producto, marca, modelo, precio){
        this.producto = producto;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    mostrarproductosTecnologia(){
        console.log(this.producto + " - " + this.marca + " - " + this.modelo);
    }
}

let miAuriculares = new tecnologia("Auriculares", "Samsung", "Buds Live", 15000);
let miSmartWatch = new tecnologia("SmartWatch", "Apple", "AppleWatch", 25000);
let miLaptop = new tecnologia("Laptop", "Apple", "MackBook Pro", 200000);
let miTeclado = new tecnologia("Teclado", "Hyperx", "Origins", 20000);
let miMouse = new tecnologia("Mouse", "Logitech", "MX3", 18000);
miAuriculares.mostrarproductosTecnologia();
miSmartWatch.mostrarproductosTecnologia();
miLaptop.mostrarproductosTecnologia();
miTeclado.mostrarproductosTecnologia();

var listaTecnologia = miAuriculares + miSmartWatch + miLaptop + miTeclado + miMouse;
alert( "El detalle de tu lista completa es: " + listaTecnologia);
console.log( "El detalle de tu lista completa es: " + listaTecnologia);









