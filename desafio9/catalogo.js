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


let filtroPdcto = catalogo.filter((producto) => producto.tipo === pdctoTipo)
console.log(filtroPdcto)