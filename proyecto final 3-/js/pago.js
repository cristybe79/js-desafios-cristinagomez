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

const finalizarPagoMP =async () => {
    const itemsToMP = resumenCompra.map((prod) => {
        return {
            title: prod.ciudad,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.precio
        }
    })
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
            Authorization: "Bearer TEST-3155932773940737-102416-a97bf5ebb052dc9daf3db8ca87ee8727-297296175"
        },
        body:   JSON.stringify ({
            items:itemsToMP,
            back_urls: {
                    success: window.location.href,
                    failure: window.location.href
                    }
        })
    })
    const data = await response.json()

    window.location.replace(data.init_point)
    }