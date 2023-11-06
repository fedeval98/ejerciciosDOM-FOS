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
    const devolverCervezaArray = beers.find((beer)=> beer.name === nombreId)
    
}