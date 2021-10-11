// ususario====///
const nombreUsuario = document.getElementById('nombre-usuario')
const inputNickName = document.getElementById('nickName')
const inputMail = document.getElementById('mail')

const errorNombre = document.getElementById('error-nombre')
const errorMail = document.getElementById('mail-error')

nombreUsuario.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let nombre = nombreUsuario.value
    if (nombre <3) {
        nombreUsuario.classList.add('input-error')
        errorNombre.classList.add('error-show')
    } else {
        nombreUsuario.classList.remove('input-error')
        errorNombre.classList.remove('error-show')
    }


})
inputMail.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let mail = inputMail.value

    if (mail == "") {
        inputMail.classList.add('input-error')
        errorMail.classList.add('error-show')
    } else {
        inputMail.classList.remove('input-error')
        errorMail.classList.remove('error-show')
    }

})
const formulario = document.getElementById('registrar')

formulario.addEventListener('submit', () => {
    const nombre = nombreUsuario.value
    const mail = inputMail.value
    if (nombre !=="" && mail !=="") {
        
        alert(`Felicitaciones ${nombre} ya estas registrado`)
    }
    
})