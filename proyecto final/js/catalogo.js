// catalogo de productos -Objeto Literal-
const catalogoViajes = [
    {codArt:01,img:'./img/irlanda2.jpg',region:'Europa', pais:'Irlanda',ciudad:'Dublin',dias:12,precio:1500,cantidad:1},
    {codArt:02,img:'./img/londres.jpg',region:'Europa', pais:'Inglaterra',ciudad:'Londres',dias:10,precio:1500,cantidad:1},
    {codArt:03,img:'./img/paris.jpg',region:'Europa', pais:'Francia',ciudad:'Paris',dias:15,precio:1200,cantidad:1},
    {codArt:04,img:'./img/monaco.jpg',region:'Europa', pais:'Francia',ciudad:'Monaco',dias:15,precio:1700,cantidad:1},
    {codArt:05,img:'./img/ibiza.jpg',region:'Europa', pais:'Francia',ciudad:'Ibiza',dias:15,precio:1700,cantidad:1},
    {codArt:06,img:'./img/roma.jpg',region:'Europa', pais:'Italia',ciudad:'Roma',dias:15,precio:1200,cantidad:1},
    {codArt:07,img:'./img/florencia.jpg',region:'Europa', pais:'Italia',ciudad:'Florencia',dias:12,precio:1200,cantidad:1},
    {codArt:08,img:'./img/madrid.jpg',region:'Europa', pais:'España',ciudad:'Madrid',dias:12,precio:1000,cantidad:1},
    {codArt:09,img:'./img/barcelona.jpg',region:'Europa', pais:'España',ciudad:'Barcelona',dias:12,precio:1000,cantidad:1},            
    {codArt:10,img:'./img/nuevayork.jpg',region:'America Norte', pais:'EE.UU',ciudad:'New York',dias:10,precio:900,cantidad:1},
    {codArt:11,img:'./img/miami.jpg',region:'America Norte', pais:'EE.UU',ciudad:'Maimi',dias:8,precio:700,cantidad:1},
    {codArt:12,img:'./img/florida.jpg',region:'America Norte', pais:'EE.UU',ciudad:'Orlando',dias:8,precio:900,cantidad:1},     
    {codArt:13,img:'./img/losangeles.jpg',region:'America Norte', pais:'EE.UU',ciudad:'Los Angeles',dias:8,precio:800,cantidad:1},      
    {codArt:14,img:'./img/lasvegas.jpg',region:'America Norte', pais:'EE.UU',ciudad:'Las Vegas',dias:8,precio:800,cantidad:1},
    {codArt:15,img:'./img/cancun.jpg',region:'Centro America', pais:'Mexico',ciudad:'Cancun',dias:8,precio:800,cantidad:1},    
    {codArt:16,img:'./img/acapulco.jpg',region:'Centro America', pais:'Mexico',ciudad:'Acapulco',dias:8,precio:800,cantidad:1},
    {codArt:17,img:'./img/sanandres.jpg',region:'Centro America', pais:'Colombia',ciudad:'San Andres',dias:8,precio:800,cantidad:1},
    {codArt:18,img:'./img/panama.jpg',region:'Centro America', pais:'Panama',ciudad:'Panama',dias:8,precio:700,cantidad:1},
    {codArt:19,img:'./img/puntacana.jpg', region: 'Centro America', pais: 'Dominicana', ciudad: 'Punta Cana', dias: 7, precio: 750 ,cantidad:1},
    {codArt:20,img:'./img/sanjuan.jpg', region: 'Centro America', pais: 'Puerto Rico', ciudad: 'San Juan', dias: 8, precio: 700,cantidad:1 },
    {codArt:21, img:'./img/riodejaneiro.jpg', region: 'Sur America', pais: 'Brazil', ciudad: 'Rio De Janeiro', dias: 7, precio: 600,cantidad:1 },
    {codArt:22, img:'./img/camboriu.jpg', region: 'Sur America', pais: 'Brazil', ciudad: 'Camboriu', dias: 7, precio: 600 ,cantidad:1},
    {codArt:23,img:'./img/florianopolis.jpg', region: 'Sur America', pais: 'Brazil', ciudad: 'Florianopolis', dias: 7, precio: 600 ,cantidad:1},        
    {codArt:24,img:'./img/cusco.jpg', region: 'Sur America', pais: 'Peru', ciudad: 'Cusco', dias: 7, precio: 400 ,cantidad:1},
    {codArt:25,img:'./img/ushuaia.jpg', region: 'Sur America', pais: 'Argentina', ciudad: 'Ushuaia', dias: 7, precio: 300 ,cantidad:1},

]
//// localStorage
localStorage.setItem('catalogoViajes', JSON.stringify(catalogoViajes))
console.log(catalogoViajes)

//// mostrar catalogo completo

const contenedorViajesEU = document.getElementById('contenedor-viajes-europa')
const contenedorViajesAN = document.getElementById('contenedor-viajes-an')
const contenedorViajesCA = document.getElementById('contenedor-viajes-ca')
const contenedorViajesSA = document.getElementById('contenedor-viajes-sa')


const mostrarViajesEu = (arrayCat) => {
    contenedorViajesEU.innerHTML = ''

    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaViaje')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.ciudad}</h3>
        <p>dias:${cv1.dias}</p>
        <p>€${cv1.precio}</p>
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        
        contenedorViajesEU.appendChild(div)
    })
    
}

const mostrarViajesAN = (arrayCat) => {
    contenedorViajesAN.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaViaje')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.ciudad}</h3>
        <p>dias:${cv1.dias}</p>
        <p>€${cv1.precio}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorViajesAN.appendChild(div)
    })
    
}
const mostrarViajesCA = (arrayCat) => {
    contenedorViajesCA.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaViaje')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.ciudad}</h3>
        <p>dias:${cv1.dias}</p>
        <p>€${cv1.precio}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorViajesCA.appendChild(div)
    })
    
}
const mostrarViajesSA = (arrayCat) => {
    contenedorViajesSA.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaViaje')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.ciudad}</h3>
        <p>dias:${cv1.dias}</p>
        <p>€${cv1.precio}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorViajesSA.appendChild(div)
    })
    
}
const filtrarEu = () => {
    const filtrado = catalogoViajes.filter((producto) => producto.region === "Europa")
    mostrarViajesEu(filtrado)
}
filtrarEu(catalogoViajes)

const filtrarAN = () => {
    const filtrado = catalogoViajes.filter((producto) => producto.region === "America Norte")
    mostrarViajesAN(filtrado)
}
filtrarAN(catalogoViajes)

const filtrarCA = () => {
    const filtrado = catalogoViajes.filter((producto) => producto.region === "Centro America")
    mostrarViajesCA(filtrado)
}
filtrarCA(catalogoViajes)

const filtrarSA = () => {
    const filtrado = catalogoViajes.filter((producto) => producto.region === "Sur America")
    mostrarViajesSA(filtrado)
}
filtrarSA(catalogoViajes)

