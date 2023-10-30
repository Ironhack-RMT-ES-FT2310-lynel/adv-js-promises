console.log("probando")



// const decirHola = (name) => {
//   return `hola ${name}`
// }

const decirHola = (name) => `hola ${name}`
// const decirHola = name => `hola ${name}`


console.log( decirHola("Alejandro") )



const someArr = [10, "hola", true, "adios", 20]


// necesitamos filtrar solo los strings del array
// queremos crear un nuevo array con esos strings en mayuscula


// let filteredArr = someArr.filter((eachElem) => {
//   return typeof eachElem === "string"
// })
// console.log(filteredArr)

// let mappedArr = filteredArr.map((eachElem) => {
//   return eachElem.toUpperCase()
// })

// console.log(mappedArr)

// let filteredArr = someArr.filter((eachElem) => typeof eachElem === "string")

// let mappedArr = filteredArr.map((eachElem) => eachElem.toUpperCase())

let mappedArr = someArr
.filter((eachElem) => typeof eachElem === "string")
.map((eachElem) => eachElem.toUpperCase())

console.log(mappedArr)

// EXTRA

// metodos que mutan array

// splice
// pop
// push
// shift
// unshift
// reverse
// sort



// Object Property Shorthand
// abreviatura de propiedades de objeto

let username = "Antonio";
let age = 30;


// const user = {
//   username: username,
//   age: age
// }

const user = {
  username,
  age,
  job: "CTA"
}

// si el nombre de la propiedad es el mismo del nombre de la variable de donde viene el valor. Podemos obviar una de las dos.

console.log(user)





const videogame = {
  name: "Zelda Tears of the Kingdom",
  developer: "Nintendo",
  rating: 5
} // ref 1234



videogame.rating = 6
console.log(videogame)
videogame.name = "Mario Wonder"

// No podemos asignar otro objeto u otro valor a videogame (const)
// videogame = {
//   name: "Mario Wonder",
//   developer: "Nintendo",
//   rating: 5
// } // ref 2345

// console.log(videogame)

// deberiamos siempre crear objetos, arrays y funciones de flecha como constantes.


