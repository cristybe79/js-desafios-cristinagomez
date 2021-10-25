


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

$('h1').animate({
        "font-size": "40px",
        "opacity": 1,
        "margin-left": "50%"
}, 3000)

//almacenar slider en una variable
let slider = $('#slider');
//almacenar botones
let siguiente = $('#btn-next');
let anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();