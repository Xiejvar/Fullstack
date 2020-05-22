function obtener_localstorage();

let nombre = localStorage.getItem("nombre");
let persona = localStorage.getItem("persona")



function guardar_localstorage(){

    let persona = {
        nombre: "javi",
        edad: 26,
        correo: "alalal@fsdf"
    }
}

localStorage.setItem("nombre" , nombre );
localStorage.setItem("persona", JSON.stringify(persona));