


////AJAX

const input = document.querySelector('#input_text');
const clima = document.getElementById('clima')
const ciudad = document.getElementById('city')
const clouds = document.getElementById('clouds')
const desc = document.getElementById('desc')
const button = document.getElementById('submit')


const apiKey = "808291e03fe63218023294761d9086d5"

button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&lang=sp&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    const tempValue = data.main.temp;
    const nameValue = data.name;
    const paisValue = data.sys.country;
    const cloudsValue = data.clouds.all;
    const descValue = data.weather[0].description;
    const icon = data.weather[0].icon;


    clima.innerHTML = `<h2>${nameValue} ${paisValue}</h2>
                        <h2> ${tempValue} º</h2>
                        <p>Nubosidad${cloudsValue} %</p>
                        <p>${descValue}</p>
 


    `;
    input.value ="";
console.log(data)
})

.catch(err => alert("Erro vuelva a ingresar una ciudad!"));
})

const llamarClima = () => {
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=Mendoza&units=metric&lang=sp&appid=${apiKey}`, (res) =>{
        console.log(res)
        const tempMdz = res.main.temp

        const descMdz = res.weather[0].description
        const cloudsValue = res.clouds.all;

        $('#climaMdz').append(`
        <h3>Mendoza, Argentina </h3>
        <p>Nubosidad${cloudsValue} %</p>
        <p>${tempMdz}</p>
        <p>${descMdz}</p>
        
        `)
    }
    )
}
llamarClima()

$('h1').css({
    "font-size": "10px",
    "opacity": 0,
    "margin-left":"-10px"

}
)
//animacion con JQ
$('h1').animate({
        "font-size": "40px",
        "opacity": 1,
        "margin-left": "50%"
}, 3000)

// Variables
let modal = document.querySelector('.modal');
let galeriaImg = document.querySelectorAll('.galeria img');
let modalImg = document.querySelector('#modalImg');
let imgBox = document.querySelectorAll('.lists img');
let cierreImg = document.querySelector('.cierreImg');

galeriaImg .forEach((images) => {

    images.addEventListener('click', () => { 
        modal.style.display = "block";
        modalImg.src = images.src;

        
    });

});

imgBox.forEach( img => img.addEventListener("click", imgLightbox) );

function imgLightbox (event) {
    modalImg.src = event.target.src;
}

cierreImg.addEventListener("click", () => {
    modal.style.display = "none";
});
