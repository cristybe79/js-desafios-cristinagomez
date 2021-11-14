////trae el carrito
const carritoLS = localStorage.getItem('carrito1')
const totalRes = document.getElementById('totalRes')
const resumenCompra = JSON.parse(carritoLS)


console.log(resumenCompra)
////declaracion
const resViaje = document.getElementById('resViaje')

/// mostrar carrito

const mostrarCarrito = () => {
    resViaje.innerHTML = ''
    
    resumenCompra.forEach((ele1) => {

        const div = document.createElement('div')
        div.classList.add('cartaCarr')

        div.innerHTML = `
                <div class="row">
                <div class="col-1">
                <img id="img3"src=${ele1.img} alt="...">
                </div>
                <div class="col-4"><h5>${ele1.ciudad} - ${ele1.pais}  - ${ele1.dias} dias</h5></div>
                <div class="col-4"><h6>Precio Individual: €${ele1.precio} -<p>Cantidad de Personas: ${ele1.cantidad} </p></h6></div>
                </div>
                
                
                
                `
                resViaje.appendChild(div)
            })
            
            totalRes.innerText = `Total € ` + resumenCompra.reduce((acc, ele1) => acc += ele1.precio * ele1.cantidad, 0) 
            
        }
        
        
        
        mostrarCarrito(resViaje)
        
        //FORMULARIO COMPLETAR DATOS PASAJEROS
        const mostrarForm = document.getElementById('ingDatos')
        
        const enviarDatos = document.getElementById('datosPasajero')
        const datoNombre = document.getElementById('datoNombre')
        const datoApellido = document.getElementById('datoApellido')
        const datoEdad = document.getElementById('datoEdad')
        const datoDni = document.getElementById('datoDni')
        const respuesta = document.getElementById("rtaDatosIng")
        const faltaDatos = document.getElementById("faltaDatos")        
//Event para mostra menu formulario
mostrarForm.addEventListener("click", ()=> {
        document.querySelector('#datosPasajero').classList.toggle("datosPasajero")
    })

//evento input//
datoNombre.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let valNombre = datoNombre.value
    if (valNombre.length < 4) {
        datoNombre.classList.add('invalido')
        datoNombre.classList.remove('valido')
    } else {
        datoNombre.classList.remove('invalido')
        datoNombre.classList.add('valido')
    }


})

datoApellido.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let apellido1 = datoApellido.value

    if (apellido1.length < 4) {
        datoApellido.classList.add('invalido')
        datoApellido.classList.remove('valido')
    } else {
        datoApellido.classList.remove('invalido')
        datoApellido.classList.add('valido')
    }

})

const pasajero=[]


enviarDatos.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const nombre = datoNombre.value
    const apellido = datoApellido.value
    const edad = datoEdad.value
    const dni = datoDni.value


    if (nombre.length > 0 && apellido.length > 0) {
        pasajero.push({
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            dni: dni,

    })
        console.log(pasajero)
        respuesta.classList.remove('rtaDatosIng')
        respuesta.classList.add('rtaDatosIngExito')
        
        enviarDatos.reset()

    }
    
})
//api Mercado Pago
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
