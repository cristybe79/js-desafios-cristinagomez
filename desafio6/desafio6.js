// catalogo de productos -Objeto Literal-
const catalogo = [
    {codArt:'r001',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negra',stock:40,precio:1000},
    {codArt:'r002',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'roja',stock:30,precio:1000},
    {codArt:'r003',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'azul',stock:30,precio:1000},
    {codArt:'r004',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanca',stock:35,precio:1000},
    {codArt:'c001',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanca',stock:35,precio:2000},
    {codArt:'c002',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'celeste',stock:30,precio:2000},
    {codArt:'c003',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negra',stock:25,precio:2000},
    {codArt:'b001',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negro',stock:35,precio:3000},
    {codArt:'b002',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanco',stock:30,precio:3000},
    {codArt:'b003',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'rojo',stock:30,precio:3000},
    {codArt:'p001',tipo:'pantalon',talle:[1,2,3,4,5,6],color:'negro',stock:30,precio:4000},
    {codArt:'p002',tipo:'pantalon',talle:[1, 2, 3, 4, 5, 6], color: 'negro', stock: 30, precio: 4000 }
    
]

// mustra el catalogo
console.log(catalogo)
// pregunta el tipo de producto y lo filtra
let pdctoTipo = prompt (`Elija el tipo que producto en nuestro catalogo`)
let filtroPdcto = catalogo.filter((producto) => producto.tipo === pdctoTipo)
console.log(filtroPdcto)

// elije el cod.art que desa llevar
let elijaProducto = prompt(`elija el producto de nuestro catalogo`)

// funcion con logica para ejecutar una funcion en base a la seleccion del articulo
function ventas() {
switch (elijaProducto) {
    case 'r001':
    case 'r002':
    case 'r003':
    case 'r004':
        ventaRem1();
        break;
    case 'c001':
    case 'c002':
    case 'c003':
        ventaCam1();
        break;
    case 'b001':
    case 'b002':
    case 'b003': 
        ventaBuz1();
        break;
    case 'p001':
    case 'p002':
        ventaPant1();
        break;                
    default:
        alert(" favor consulte nuestro catálogo nuevamente");
    break;
}
}
// funciones particular en base al tipo de art
const ventaRem1 = () => {
    // funcion find
    const precioRem1 = catalogo.find((pdctoTipo)=>pdctoTipo.tipo === 'remera')
    alert(`el precio de la remera es ${precioRem1.precio}`)
    let numR1 = parseInt(prompt(`¿cuantas remeras desea llevar?`))
    let precioVentaR1 =precioRem1.precio * numR1
    alert(`el precio de venta es ${precioVentaR1}`)

}


const ventaCam1 = () => {
    const precioCam1 = catalogo.find((pdctoTipo)=>pdctoTipo.tipo === 'camisa')
    alert(`el precio de la camisa es ${precioCam1.precio}`)
    let numC1 = parseInt(prompt(`cuantas camisas desea llevar`))
    let precioVentaC1 =precioCam1.precio * numC1
    alert(`el precio de venta es ${precioVentaC1}. Muchas gracias por su compra`)
}

const ventaBuz1 = () => {
    const precioBuz1 = catalogo.find((pdctoTipo)=>pdctoTipo.tipo === 'buzo')
    alert(`el precio del buzo es ${precioBuz1.precio}`)
    let numB1 = parseInt(prompt(`cuantos buzos desea llevar`))
    let precioVentaB1 =precioBuz1.precio * numB1
    alert(`el precio de venta es ${precioVentaB1}. Muchas gracias por su compra`)
}

const ventaPant1 = () => {
    const precioPant1 = catalogo.find((pdctoTipo)=>pdctoTipo.tipo === 'pantalon')
    alert(`el precio del pantalon es ${precioPant1.precio}`)
    let numP1 = parseInt(prompt(`cuantas pantalon desea llevar`))
    let precioVentaP1 =precioPant1.precio * numP1
    alert(`el precio de venta es ${precioVentaP1}.`)
}
console.log(ventas())


