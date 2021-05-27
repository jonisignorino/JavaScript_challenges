//Para este desafio voy a utilizar un array como lista
var listaCarrito = ["Parlantes", "Reproductor", "Pantalla", "Television", "Monitor"];
console.log(listaCarrito[0]);
console.log(listaCarrito[2]);
console.log("Longitud de la lista: " + listaCarrito.length);
for (let i = 0; i < listaCarrito.length; i++) {
    console.log(listaCarrito[i]);
}

//Adicionalmente tambien incorporo un Array de objetos
const primerProducto = {
    id: 1,
    producto: "Parlante Bluetooth",
    marca: "JBL",
    precio: 7500,
    cantidad: 2
}

const segundoProducto = {
    id: 2,
    producto: "Pantalla",
    marca: "Samsung",
    precio: 10500,
    cantidad: 1
}

const listaDeMiCarrito = [];
function agregarMiListaCarrito() {
    listaDeMiCarrito.push(primerProducto, segundoProducto);
}
function verListaCarrito() {
    let total = 0;
    for (elemento of listaDeMiCarrito) {
        console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
        total += elemento.precio;
    }
    console.log("En total son " + listaDeMiCarrito.length + verListaCarrito +" productos\n  Total de la compra: $" + total);
}
