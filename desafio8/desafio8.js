// catalogo de productos -Objeto Literal-
const catalogo = [
    {img:'./img/remera.jpg',codArt:'r001',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negra',stock:40,precio:1000},
    {img:'./img/remera1.jpg',codArt:'r002',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'roja',stock:30,precio:1000},
    {img:'./img/remera2.jpg',codArt:'r003',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'azul',stock:30,precio:1000},
    {img:'./img/remera3.jpg',codArt:'r004',tipo:'remera',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanca',stock:35,precio:1000},
    {img:'./img/camisa.jpg',codArt:'c001',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanca',stock:35,precio:2000},
    {img:'./img/camisa1n.jpg',codArt:'c002',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'celeste',stock:30,precio:2000},
    {img:'./img/camisa3.jpg',codArt:'c003',tipo:'camisa',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negra',stock:25,precio:2000},
    {img:'./img/buzo.jpg',codArt:'b001',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'negro',stock:35,precio:3000},
    {img:'./img/buzo111.jpg',codArt:'b002',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'blanco',stock:30,precio:3000},
    {img:'./img/buzo3.jpg',codArt:'b003',tipo:'buzo',talle: ['xs', 's', 'x', 'm', 'l', 'xl'],color:'rojo',stock:30,precio:3000},
    {img:'./img/pantalon1.png',codArt:'p001',tipo:'pantalon',talle:[1,2,3,4,5,6],color:'negro',stock:30,precio:4000},
    {img:'./img/pantalon2.png',codArt:'p002',tipo:'pantalon',talle:[1, 2, 3, 4, 5, 6], color: 'negro', stock: 30, precio: 4000 }
    
]

console.log(catalogo)
// utilizo DOM//
//lista desplegable recorre un array//
const rubros = ['', 'Remeras', 'Camisa', 'Buzo', 'Pantalon']

const elegir = document.getElementById('elegir')
const articulo2 = document.createElement('div')
articulo2.innerHTML = `
<label for="exampleDataList" class="form-label">Filtro Articulos</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="seleccione el art">
<datalist id="datalistOptions"></datalist>                `
elegir.appendChild(articulo2)

const select = document.getElementById('tipoProducto')
const elegir1 = document.getElementById('datalistOptions')
rubros.forEach ((tipoArt)=>{
    const option = document.createElement('option')
    option.value = tipoArt
    option.innerHTML= tipoArt 
    elegir1.appendChild(option)
})



// muestra el catalogo 
// pregunta el tipo de producto y lo filtra
// const pdctoTipo = document.createElement('input')

// let filtroPdcto = catalogo.filter((producto) => producto.tipo === pdctoTipo)
// console.log(filtroPdcto)

// elije el cod.art que desa llevar
// let elijaProducto = 

// funcion con logica para ejecutar una funcion en base a la seleccion del articulo
// function ventas() {
// switch (elijaProducto) {
//     case 'r001':
//     case 'r002':
//     case 'r003':
//     case 'r004':
//         ventaRem1();
//         break;
//     case 'c001':
//     case 'c002':
//     case 'c003':
//         ventaCam1();
//         break;
//     case 'b001':
//     case 'b002':
//     case 'b003': 
//         ventaBuz1();
//         break;
//     case 'p001':
//     case 'p002':
//         ventaPant1();
//         break;                
//     default:
//         alert(" favor consulte nuestro catálogo nuevamente");
//     break;
// }
// }
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
// console.log(ventas())
///==========================================================
//muestra catalogo con boostrap//
const contCatProducto = document.getElementById('catalogoProductos')
catalogo.forEach((catProd) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width:15rem"
    const filtroPdcto = catalogo.filter((catProd) => catProd.tipo === 'remera')

    
    div.innerHTML = `
    <img src=${catProd.img} class="card-img-top mw-100" alt="...">
    <div class="card-body">
    <h5 class="card-title">${catProd.tipo}</h5>
    <p class="card-text">Precio:$${catProd.precio}</p>
    <a href="#" class="btn btn-secondary">Comprar</a>
    </div>
    `
    contCatProducto.appendChild(div)
    
})

