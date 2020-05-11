const respuestas = {
    nintendo: "SNES",
    conan: "cimeria",
    anillo: "celebrimbor",
    espada: "claymor",
    rambo: "m60"
}

if (event.target.elements.nintendo.value == respuestas.nintendo) {
    console.log(event.target.elements.nintendo)
    document.getElementById("SNES").backgroundColor = "green"
    event.target.got.input.map(SNES, () => {
        SNES.style.backgroundColor = "green"
    })
    console.log(event.target.input["id=SNES"].style.backgroundColor = "green")
} else {

}

