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
let userAge = 30;


// const user = {
//   username: username,
//   userAge: userAge
// }

const user = {
  username,
  userAge,
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





// Destructuracion o deconstruccion es una tecnica para reducir codigo.

const oneDogFromData = {
  name: "Beethoven",
  breed: "San Bernardo",
  age: 8
}

/* 
const { propiedadesAExtraer } = objetoDelCualVamosAExtraer
*/

// const { name, breed, age } = oneDogFromData
// const name = "Beethoven"
// const breed = "San Bernardo"
// const age = 8


// console.log( `${name} es un perrito de raza ${breed} y tiene ${age} añitos de edad` )
// console.log( `${name} es el mejor perrito del mundo 11/10` )



function describirPerrito({ name, breed, age }) {

  // const { name, breed, age } = singleDog

  console.log( `${name} es un perrito de raza ${breed} y tiene ${age} añitos de edad` )
  console.log( `${name} es el mejor perrito del mundo 11/10` )

}


describirPerrito(oneDogFromData)

const secondDog = {
  name: "Balto",
  breed: "Husky Siberiano",
  age: 5
}

describirPerrito(secondDog)


// destructuracion de arrays


const topThreeBooksEver = [ "Dragonlance", "Harry Potter", "MundoDisco" ]

const [ libro1, libro2, libro3 = "Señor de los Anillos" ] = topThreeBooksEver
// cuando destructuramos en array, nosotros le damos nombre a las variables. Y el orden indica el valor.
// const libro1 = "Dragonlance"
// const libro2 = "Harry Potter"
// const libro3 = "MundoDisco"

// libro3 = "Señor de los Anillos" dice que si no existe el valor, ese seria el predeterminado

// console.log(`mis 3 libros favoritos son: ${topThreeBooksEver[0]}, ${topThreeBooksEver[1]} y ${topThreeBooksEver[2]} `)
console.log(`mis 3 libros favoritos son: ${libro1}, ${libro2} y ${libro3} `)


// asignar valores predeterminados en caso que no existan. Igualando al momento de destructurar


