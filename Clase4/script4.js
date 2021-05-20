// Para este desafio y para comenzar con el proyecto integrador, decidi tomar el siguiente ejemplo
// Calcular costo total de productos y/o servicios seleccionados por el usuario (Carrito de compras)
// Voy a comenzar desarrollando este ejemplo y de ser necesario lo voy a migrar por una idea un poco mas personalizada mas adelante.

var totalProductos;

function sumaDeProductos(prod1, prod2, prod3, prod4){
    totalProductos = prod1 + prod2 + prod3 + prod4;
    return totalProductos;
}

let precioProd1 = 500;
let precioProd2 = 700;
let precioProd3 = 1000;
let precioProd4 = 2000;

//Calculo de IVA por sobre el monto total
var precioTotal = sumaDeProductos(precioProd1, precioProd2, precioProd3, precioProd4);
//Calculo de cupon de descuento de un 30%
var descuento = precioTotal * 0.30;
var totalConDescuento = precioTotal - descuento;
console.log("El precio total es $: " + precioTotal);
console.log("El descuento aplicado es de $: " + descuento);
console.log("Precio final con descuento aplicado da un total de $: " + totalConDescuento);
