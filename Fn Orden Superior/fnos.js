// Ej 1
console.log("Ejercicio1")

function imprimirMensaje(mensaje){
    console.log(mensaje)
}

const imprMensaje = (mensaje) => console.log(mensaje)


//Ej 2
console.log("Ejercicio2")

function CrearMultiplicacion (numero1, numero2){
    let resultado = numero1 * numero2
    return resultado
}

const crearMultiplica = (numero1, numero2) => numero1*numero2

console.log(crearMultiplica(2,2))

//Ej 3
console.log("Ejercicio3")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numerosNuevos = numeros.map(crearMultiplica)

console.log(numerosNuevos)

//Ej 4
function cervezasAlcoholicas (beers){
    const filtroCervezas = beers.filter((beer) => beer.abv)
                                .toSorted((a,b) => b.abv - a.abv)
                                .slice(0, 10)
    return filtroCervezas
}
const cervezasFiltradas = cervezasAlcoholicas(beers)
console.log(cervezasFiltradas)

//Ej 5
function cervezasDulces (beers){
    const filtroCervezas = beers.filter((beer) => beer.ibu)
                                .toSorted((a,b) => a.ibu - b.ibu)
                                .slice(0, 10)
    return filtroCervezas
}
const cervezasFiltradasDulces = cervezasDulces(beers)
console.log(cervezasFiltradasDulces)

//Ej 6

function nombreCerveza (beers, nombre){
    const buscarCerveza = beers.find((beer)=> beer.name === nombre)
    if (buscarCerveza){
        return buscarCerveza
    }
}

console.log (nombreCerveza(beers, "Buzz"))

//Ej 7

function cervezaPorIbu (beers, valor){
    const buscarCervezaPorIbu = beers.find((beer)=> beer.ibu === valor)
    if (buscarCervezaPorIbu){
        return buscarCervezaPorIbu
    } else{
        return `No existe cerveza con ibu de ${valor}`
    }
}

console.log (cervezaPorIbu (beers, 41.5))

//Ej 8

function cervezaPorParametro (beers, nombreId){
    const devolverCervezaArray = beers.findIndex((beer)=> beer.name === nombreId)

    if(devolverCervezaArray !== -1){
        return devolverCervezaArray
    } else {
        console.log (`${nombreId} no existe`)
    }
}

const cervezaBuscar = "Hello My Name Is Mette-Marit"
const indexCerveza = cervezaPorParametro (beers, cervezaBuscar)
    if (indexCerveza !== -1){
        console.log (`La cerveza "${cervezaBuscar}" se encuentra en la posicion ${indexCerveza} del array`)
    }

// Ej 9
function cervezaFiltradaPorAmargoAlcohol (cervezas, alcohol){
    const filtro = cervezas.filter((cervezas) => cervezas.abv <= alcohol)
    const cervezasFiltradas = filtro.map((cervezas) => ({
        nombre: cervezas.name,
        alcohol: cervezas.abv,
        amargor: cervezas.ibu
    }))
    return cervezasFiltradas
}

const valorAlcohol = 6
const filtradoCervezas = cervezaFiltradaPorAmargoAlcohol (beers, valorAlcohol)
console.log (filtradoCervezas)

//Ej 10

function ordenarCervezas(cervezas, propiedad, booleano){
    let orden
    if (booleano){
        orden = 1
    } else{
        orden= -1
    }
    const cervezasOrdenadas = cervezas.toSorted((a, b) =>{
        if (a[propiedad] < b[propiedad]) return -orden
        if (a[propiedad] > b[propiedad]) return orden
        return 0
    })
    return cervezasOrdenadas.slice (0,10)
}

console.log(ordenarCervezas(beers, "abv", true))

//Ej 11

function crearTablaDinamica (cervezas, tabla){
    cervezas.sort ((a,b)=> a.abv - b.abv)
    const idTabla = document.getElementById(tabla)
    const tablaHTML = document.createElement("table")
    const filaEncabezado = document.createElement("tr")
    const encabezados = ["Nombre", "ABV", "IBU"]
    encabezados.forEach((encabezado)=>{
        const th = document.createElement("th")
        th.textContent = encabezado
        th.classList.add("text-center", "p-4")
        filaEncabezado.appendChild(th)
    })
    tablaHTML.appendChild(filaEncabezado)

    cervezas.forEach((cerveza) =>{
        const fila = document.createElement("tr")
        const celdas = [cerveza.name, cerveza.abv, cerveza.ibu]
        celdas.forEach((valor)=> {
            const td = document.createElement("td")
            td.textContent = valor
            td.classList.add("p-4")
            fila.appendChild(td)
        })
    tablaHTML.appendChild(fila)
    })
    idTabla.appendChild(tablaHTML)
}
crearTablaDinamica(beers, "tabla")


// centrado de datos
const filas = tabla.getElementsByTagName("tr");

for (let i = 0; i < filas.length; i++) {
    const celdas = filas[i].getElementsByTagName("td");
    for (let j = 1; j < celdas.length; j++) { 
    celdas[j].style.textAlign = "center";
    }
}

// Estilos

const headerFooter = document.querySelectorAll(".bg-color")

for (const color of headerFooter){
    color.style.backgroundColor = "#ff9037"
    }

const modificarP = document.querySelector("footer").children[0]
const cambiarTextoP = "Federico Val - Cohort 52"
modificarP.textContent = cambiarTextoP