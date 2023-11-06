// Punto 1
const tituloIndex = document.getElementById ("titulo")

// Punto 2
const tituloPrincipal = "Frutas"

document.getElementById ("titulo").textContent = tituloPrincipal

// Punto 3
const headerFooter = document.querySelectorAll(".bg-color")

for (const color of headerFooter){
    color.style.backgroundColor = "#ff9037"
    }

// Punto 4
const modificarP = document.querySelector("footer").children[0]
const cambiarTextoP = "Federico Val - Cohort 52"
modificarP.textContent = cambiarTextoP

// Punto 5
const divMain = document.getElementById("contenedor")

// Punto 6
function crearCard (fruta){
    return`
    <article class="border border-black w-72 flex flex-col h-96 items-center justify-evenly p-4">
        <img class="w-36 max-h-36 object-contain" src="${fruta.foto}" alt="${fruta.nombre}"></img>
        <h3 class="text-center font-bold">${fruta.nombre}</h3>
        <p>${fruta.descripcion}</p>
    </article>`
}

// Punto 7
function introducirCard (frutas, contenedor){
    let card = ""
    for (fruta of frutas){
        let cardContenedor = crearCard(fruta)
        card += cardContenedor
    }
    divMain.innerHTML += card
}

// Punto 8
introducirCard(frutas, divMain)

// Punto 9
const divLista = document.getElementById("lista")
const crearH2 = document.createElement("h2")
const frutasTXT = "Frutas Dulces"

crearH2.innerHTML = frutasTXT
crearH2.classList.add("text-4xl", "p-4", "font-bold")

divLista.appendChild(crearH2)

//Punto 10
function listaFrutasDulces (frutas){
    const frutasDulces = frutas.filter((fruta) => fruta.esDulce)
    const frutasLista = document.createElement("ul")
    frutasDulces.forEach((fruta) => {
        const frutasListItem = document.createElement("li")
        frutasListItem.classList.add("list-disc","list-inside", "pl-20", "pb-2")
        frutasListItem.innerHTML = fruta.nombre
        frutasLista.appendChild(frutasListItem)
    })
    return frutasLista
}
const crearLista = listaFrutasDulces(frutas)

// Punto 11
divLista.appendChild(crearLista)


