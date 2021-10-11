////trae el carrito
const carritoLS = localStorage.getItem('carrito')
// const totalLS = localStorage.getItem('total1')
const totalRes = document.getElementById('totalRes')
const resumenCompra = JSON.parse(carritoLS)
// const resumenTotal = JSON.parse(totalLS)

console.log(resumenCompra)
// console.log(resumenTotal)
////declaracion
const resViaje = document.getElementById('resViaje')

/// mostrar carrito

const mostrarCarrito = () => {
    resViaje.innerHTML = ''
    
    resumenCompra.forEach((ele1) => {
        const div = document.createElement('div')
        div.classList.add('cartaCarr')

        div.innerHTML = `
                <p>Preparando Maletas</p>                
                <h2>${ele1.ciudad}</h2>
                <p>${ele1.pais}</p>
                <p>Precio: €${ele1.precio}</p>
                <p>Personas: ${ele1.cantidad}</p>
        
        `
        resViaje.appendChild(div)
    })

    totalRes.innerText = `Total € ` + resumenCompra.reduce((acc, ele1) => acc += ele1.precio * ele1.cantidad, 0) 
    
}

mostrarCarrito(resViaje)