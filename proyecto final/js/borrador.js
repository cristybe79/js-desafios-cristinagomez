//Event para mostra menu formulario
let mostrarForm = document.getElementById('ingDatos')
mostrarForm.addEventListener("click", mostrarFormulario)

//Event para guardar formulario peliculo
let formulario = document.getElementById("datosPasajero")
formulario.addEventListener("submit", guardarDatosPasajero)


//funcion para cargar listado del localStorage o inicialo si no hay//
function cargarListado() {
    let cargarDatos = JSON.parse(localStorage.getItem("cargarDatos"));
    if (cargarDatos == null) {
        return [];
    }
    return cargarDatos;
    // realizar operador ternario
}

//  Funcion para guardar en localStorage
function guardarListado(cargarDatos) {
    localStorage.setItem("cargarDatos", JSON.stringify(cargarDatos));
    mostrarListado(cargarDatos);
}



//funcion para guardarDatos
function guardarDatosPasajero(e) {
    e.preventDefault()
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let edad1 = document.querySelector('#edad1').value
    let dni = document.querySelector('#dni').value
    
    let cargarDatos= cargarListado()
    
    cargarDatos.push(new Pasajero(nombre, apellido, edad1, dni))
    guardarListado(cargarDatos)
    document.getElementById('datosPasajero').reset()
    
}
//funcion para mostrar formulario
function mostrarFormulario() {
    document.querySelector('#datosPasajero').classList.toggle("datosPasajero")
}
const tarjeta = document.createElement("div");
//  Funcion para armar una tarjeta
function armarTarjeta(e) {
    tarjeta.classList.add("tarjeta");
    
    const nombrePasajero = document.createElement("h3");
    nombrePasajero.textContent = `${e.nombre} ${e.apellido}`
    tarjeta.appendChild(nombrePasajero);
    
    const edadPasajero = document.createElement("p");
    edadPasajero.textContent = `Edad: ${e.edad1} años`;
    tarjeta.appendChild(edadPasajero);
    
    const dniPasajero = document.createElement("div");
    dniPasajero.textContent = `DNI: ${e.dni}`;
    tarjeta.appendChild(dniPasajero);
    return tarjeta;
    
}


function mostrarListado(cargarDatos) {
    let agregarListado = document.getElementById("agregarListado");
    agregarListado.textContent = "";
    cargarDatos.map(elemento => {
        agregarListado.appendChild(armarTarjeta(elemento));
    });
}
console.log(agregarListado)
mostrarListado(cargarListado())

const enviarDatos = document.getElementById("enviar")
enviarDatos.addEventListener("click", enviarformulario)

function enviarformulario() {
    // const datosExito = document.createElement("h3")
    // datosExito.textContent = `Datos enviados Con exito`

    // eliminarListado.textContent = ""
    tarjeta.classList.remove("tarjeta");
    tarjeta.splice()
    const datosExito = document.createElement("h3")
    datosExito.textContent = `Datos enviados Con exito`
    


    return tarjeta;
    
}
