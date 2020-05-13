const respuestas = {
    nintendo: "SNES",
    conan: "cimeria",
    anillo: "celebrimbor",
    espada: "claymor",
    rambo: "m60"
}


document.querySelector('form[name="nintendo"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta1").length; i++) {
        document.getElementsByClassName("respuesta1")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.nintendo.length; i++) {
        document.getElementById(respuestas.nintendo).style.backgroundColor = "green"
    }
    if (event.target.elements.nintendo.value == respuestas.nintendo) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="conan"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta2").length; i++) {
        document.getElementsByClassName("respuesta2")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.conan.length; i++) {
        document.getElementById(respuestas.conan).style.backgroundColor = "green"
    }
    if (event.target.elements.conan.value == respuestas.conan) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="anillo"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta3").length; i++) {
        document.getElementsByClassName("respuesta3")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.anillo.length; i++) {
        document.getElementById(respuestas.anillo).style.backgroundColor = "green"
    }
    if (event.target.elements.anillo.value == respuestas.anillo) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="espada"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta4").length; i++) {
        document.getElementsByClassName("respuesta4")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.espada.length; i++) {
        document.getElementById(respuestas.espada).style.backgroundColor = "green"
    }
    if (event.target.elements.espada.value == respuestas.espada) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="rambo"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta5").length; i++) {
        document.getElementsByClassName("respuesta5")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.rambo.length; i++) {
        document.getElementById(respuestas.rambo).style.backgroundColor = "green"
    }
    if (event.target.elements.rambo.value == respuestas.rambo) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})