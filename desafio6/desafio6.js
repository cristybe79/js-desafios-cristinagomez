class CatalogoProducto {
    constructor (codArt, tipo, talle, color, stock, costo,precio) {
            this.cdoArt = codArt
            this.tipo = tipo
            this.talle = talle
            this.color = color
            this.stock = stock
            this.costo = costo
            this.precio = precio
    }
    
                venta() {
            this.precio = this.costo * 1.40

        }
}


const catalogo = []

catalogo.push(new CatalogoProducto('r001', 'remera', ['xs', 's', 'x', 'm', 'l', 'xl'], ['negro', 'blanco', 'rojo', 'azul'], 50, 750))

catalogo.push(new CatalogoProducto('c001', 'camisa', ['xs', 's', 'x', 'm', 'l', 'xl'], ['blanco', 'celeste'], 40, 1700,))
catalogo.push(new CatalogoProducto('b001', 'buzo', ['xs', 's', 'x', 'm', 'l', 'xl'], ['negro', 'rojo', 'gris'], 30, 2800,))
catalogo.push(new CatalogoProducto('p001', 'pantalon', ['xs', 's', 'x', 'm', 'l', 'xl'], ['negro', 'azul'], 20, 3850,))


console.log(catalogo)

let elijaProducto = prompt(`elija el producto que desea llevar`)

function ventas() {
switch (elijaProducto) {
    case 'r001':
        ventaRem1();
        break;
    case 'c001':
        ventaCam1();
        break;
    case 'b001':        
        ventaBuz1();
        break;  
    case 'p001':
        ventaPan1();
        break;
    default:
        alert(" favor consulte nuestro catálogo nuevamente");
    break;
}
}


const ventaRem1=()=> {
    let numR1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
    precioVentaR1 =this.precio*numR1
    console.log(`el precio de venta es ${precioVenta}`)

}


const ventaCam1=()=> {
    let numC1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
    precioVentaC1 =this.precio*numC1
    console.log(`el precio de venta es ${precioVenta}`)
}

const ventaBuz1=()=> {
    let numB1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
    precioVentaB1 =this.precio*numB1
    console.log(`el precio de venta es ${precioVenta}`)
}

const ventaPant1=()=> {
    let numP1 = parseInt(prompt(`cuantas ${this.tipo} desea llevar`))
    
    precioVentaP1 =this.precio*numP1
    console.log(`el precio de venta es ${precioVentaP1}`)
    


}

