// objeto cargador catalogo
let tipo = prompt(`tipo de prenda: `)
let talle = prompt(`talle: `)
let color = prompt(`color: `)
let stock = parseInt(prompt(`stock: `)) 
let costo = parseInt(prompt(`costo del producto: `))

class catalogoProducto{
    constructor(pTipo, pTalle, pColor, pStock, pCosto, pPrecioCont, pPrecioFin) {
    this.tipo = pTipo ;
    this.talle = pTalle;
    this.color = pColor;
    this.stock = pStock;    
    this.costo = pCosto;
    this.precio = {precioCont:pPrecioCont,precioFin:pPrecioFin};
    }
    precioVenta() {
        this.precio = this.costo * 1.40;
        this.precioFin = this.precio * 1.20;
        return alert(`el precio sera ${this.precio} de contado y ${this.precioFin} financiado`)
    }
}

// const art1 = new catalogoProducto(tipo, talle, color, stock, costo)
// art1.precioVenta()
    
// objeto cargador venta
let queCompra = prompt('que va a llevar? art1/art2/art3/art4')
let num = parseInt(prompt("cuantas " + queCompra + " compra?"))

class carrito{
    constructor(pArt, pCant, pVentaArt) {
    this.queCompra = pArt ;
    this.num = pCant;
    this.art.precio=pVentaArt;
    }
    precioTotal() {
        this.precioTotalArt = this.num * this.art.precio;
        return alert(`el precio total de contado de ${this.queCompra} es pesos ${this.precioTotalArt}, financiado` )
    }
}

// const vta1 = new carrito(queCompra, num, art1.precio)
// vta1.precioTotal()


