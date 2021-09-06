//1er ejercicio en positivo
let remeras = parseInt(prompt("cuantas remeras compra"));
let buzos = parseInt(prompt("cuantos buzos compra"));
let cantidadMayor = 3;
let totalUnidades = remeras + buzos >= cantidadMayor;
if (totalUnidades) {
        alert("tiene un descuento 10%");
}

//2do ejercicio en negativo
let camisas = parseInt(prompt("cuantas camisas compra"));
let zapatillas = parseInt(prompt("cuantas zapatillas compra"));

let cantidadMayor = 3;

let totalUnidades = camisas + zapatillas >= cantidadMayor;
if (!totalUnidades) {
        alert("No tiene un descuento 10%");
}

//3er ejercicio combinacion operadores
let remera = parseInt(prompt("cuantas remeras compra"));
let buzo = parseInt(prompt("cuantos buzos compra"));
let zapatillas = parseInt(prompt("cuantas zapatillas compra"));

let cantidadMayor = 5;

let promo1 = remera + buzo + zapatillas >= cantidadMayor;
let promo2 = buzo >= 3;
let promo3 = zapatillas >= 2;
let promo4 = buzo >= 2 && zapatillas >= 1;

let verDescuento = promo1 || promo2 || promo3 || promo4;

if (verDescuento) {
        alert("tiene un descuento de 10%");
}
