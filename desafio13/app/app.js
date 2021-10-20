$('#pv-1').css({ "opacity": 0,"with":"50vw" })
$('#pv-2').css({ "opacity": 0,"with":"50vw" })
$('#pv-3').css({ "opacity": 0, "with": "50vw" })
$('#pv-4').css({ "opacity": 1, "with": "50vw" })
$('#pv-5').css({ "opacity": 1, "with": "50vw" })
$('#pv-6').css({ "opacity": 1, "with": "50vw" })
$('#viajar').css({
    "with": "50vw",
    "height": "50vh",
    "display": "flex",
})
$('#viajar1').css({
    "with": "50vw",
    "height": "50vh",
    "display": "flex",
})

$("#viaje").click(function () {
            
    $('#pv-1').animate({ "opacity": 1, }, 1000)
        .delay(2000)
        .slideUp(500)
        .delay(1000)
        .slideDown(500)
    
    $('#pv-2').animate({ "opacity": 1, }, 2000)
        .delay(2000)
        .fadeOut(300)
        .delay(2000)
        .fadeIn(500)
    $('#pv-3').animate({ "opacity": 1, }, 2000)
        .delay(1000)
        .hide(1000)
        .delay(1000)
        .show(1000)
    $('#pv-4').animate({ "opacity": 0, }, 2000)
        .delay(1000)
        .show(1000)
        .delay(1000)
        .hide(1000)
    $('#pv-4').animate({ "opacity": 1, }, 2000)
        .delay(1000)
        .slideDown(500)
    $('#pv-5').animate({ "opacity": 0, }, 2000)
        .delay(2000)
        .fadeOut(300)
        .delay(2000)
    $('#pv-5').animate({ "opacity": 1, }, 2000)
        .delay(1000)
        .slideDown(500)
    
    $('#pv-6').animate({ "opacity": 0, }, 2000)
        .delay(1000)
        .slideDown(500)
    $('#pv-6').animate({ "opacity": 1, }, 5000)
        .delay(1000)
        .slideDown(500)
});
