
//practica switch*********************** */
let cantPers = parseInt(prompt('cuantas personas son'))
const c3p = 3;
const c5p = 6;
const c8p = 2;
const c10p = 1;

switch (cantPers) {
    case 1:
    case 2:
    case 3:        
        console.log(" Tenemos disponible " + c3p + " cabañas de 3personas para Usted");
        break;   
    case 4:
    case 5:
        console.log(" Tenemos disponible " + c5p + " cabañas para Usted");
        break;
    case 6:
    case 7:    
    case 8:
        console.log(" Tenemos disponible " + c8p + " cabañas para Usted");
        break;    
    case 9:    
    case 10:
            console.log(" Tenemos disponible " + c10p + " cabañas para Usted");
    break;
    default:
        console.log(" LE OFRECEMOS ALQUILAR MAS 1 CABAÑA");
    break;
}
// *********************************
let compra = prompt('que va a llevar? remera/camisa/pantalon/zapatillas')
let cantidad = parseInt(prompt('cuantas unidades?'))

const cpr1 = 1000;
const cpr2 = 2000
const cpr3 = 4000
const cpr4 = 5000


switch (compra) {
    case "remera":
        console.log("el total es "+(cantidad*cpr1));
        break;
    case 'camisa':
        console.log("el total es "+(cantidad*cpr2))
        break;
    case 'pantalon':        
        console.log("el total es "+(cantidad*cpr3))
        break;  
    case 'zapatillas':
        console.log("el total es "+(cantidad*cpr4))
        break;
    default:
        console.log(" favor consulte nuestro catálogo nuevamente");
    break;
}
// for********************************
let i = 10
let queLLeva = prompt('que va a llevar? remera/camisa/pantalon/zapatillas');
let num1 = parseInt(prompt("cuantas "+queLLeva+" compra?"))
for (i; i >= num1; i = i - num1){
    num2 =i-num1
    console.log('quedan ' + num2 +' ' +queLLeva)

}
//while ***********************
let stock1 = 10
let queLLeva = prompt('que va a llevar? remera/camisa/pantalon/zapatillas');
let num1 = parseInt(prompt("cuantas "+queLLeva+" compra?"))

while (true) {
        stock2=stock1 - num1
    console.log('quedan ' + stock2 + ' ' + queLLeva)
    break
}
