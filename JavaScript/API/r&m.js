const url = "https://pokeapi.co/api/v2/pokemon/150/";



const mostrar = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
        let element = document.getElementById("caja")
        caja.innerHTML = `
        <p>Nombre: ${data.name}</p>
        <p>Tipo: ${data.types[0].type.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Id: ${data.id}</p>
        <img src='${data.sprites.front_default}'/>
        `;
    
        console.log(data)
    })
    .catch(err=>console.log(err))
}