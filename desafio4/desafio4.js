


let queCompra = prompt('que va a llevar? remera/camisa/pantalon/zapatillas')
let num1 = parseInt(prompt("cuantas "+queCompra+" compra?"))

function ventas() {
switch (queCompra) {
    case "remera":
        stockRem1();
        break;
    case "camisa":
        stockCam1();
        break;
    case 'pantalon':        
        stockPant1();
        break;  
    case 'zapatillas':
        stockZap1();
        break;
    default:
        alert(" favor consulte nuestro catálogo nuevamente");
    break;
}
}


const stockRem1=()=> {
    let stockR1 = 20
    

while (num1!==0) {
    stockR2=stockR1 - num1
    alert(`quedan ${stockR2}${queCompra}`)
    ventas()
    break
}
}

const stockCam1=()=> {
    let stockC1 = 15
    

    while (num1!==0) {
        stockC2=stockC1 - num1
        alert(`quedan '${stockC2}${+queCompra}`)
        ventas()
    break
}
}

const stockPant1=()=> {
    let stockP1 = 5
    

    while (num1!==0) {
        stockP2 =stockP1 - num1
        alert(`quedan '${stockP2}${+queCompra}`)
        ventas()
    break
}
}

const stockZap1=()=> {
    let stockZ1 = 5
    
    while (num1!==0) {
        stockZ2=stockZ1 - num1
        alert(`quedan ${stockZ2}${+queCompra}`)
        ventas()
}
}
