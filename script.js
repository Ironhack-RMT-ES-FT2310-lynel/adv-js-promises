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




const [a, b] = [1];
console.log(a * b); // <== ???

// b:
const [c, d = 1] = [2];
console.log(c * d); // <== ???
// const c = 2
// const d = 1

// b:
let [e, f = 2, g, h = 1] = [3, 4];
console.log(e, f, g, h); // ==> ???
// let e = 3
// let f = 4
// let g = undefined
// let h = 1


const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

const { favoriteFootballTeam } = data
console.log(favoriteFootballTeam)



const person = {
  firstName: "Elon",
  secondName: "Musk",
  job: "X CEO (formerly twitter)",
  other: {
    about: {
      hobby: "Viajar a Marte",
      otherCompanies: ["Tesla", "StarLink", "Boring Company"]
    }
  }
}

const { job } = person
console.log(job)

console.log(person.other.about.hobby) // como destructurar solo hobby

// const { other } = person
// const { about } = other
// const { hobby } = about
// console.log(hobby)

// let hobby = person.other.about.hobby

// destructuracion anidada
const { other: { about: { hobby, otherCompanies: [, , c3] } } } = person
console.log(hobby)
console.log(c3)





let numbersArr = [3, 10, 80, 20]


// let maxNum = Math.max( 3, 10, 80, 20 )

// SPREAD Operator => operador de esparcir => ...
// no modifica el array original

let maxNum = Math.max( ...numbersArr ) // => esparcimos aqui todos los elementos del array
console.log(maxNum)


const students = ["Chalo", "Abraham", "Alejandro", "Jairo"]
const students2 = ["Alicia", "Adrian", "Miguel"]

// quiero un array que tenga todos los estudiantes de los dos arrays

const allStudents = [ ...students, ...students2, "Diego", "Raul" ]
console.log(allStudents)

console.log(...students)


const newNumbers = [1, 2, 3, 4]
const copy = [...newNumbers] // o map, o slice, o JSON parse JSON stringify

copy.reverse()

console.log(copy)
console.log(newNumbers)


const somePeople = [
  {
    name: "Jorge",
    candy: 10
  }, // ref abcd
  {
    name: "Antonio",
    candy: 20
  }, // ref erty
  {
    name: "Ruth",
    candy: 15
  }, // ref xcvb
] // ref 1234

const peopleClone = [...somePeople] // shallow clone => copiamos la referencia solo del array ref 9876

// const peopleClone = JSON.parse( JSON.stringify(somePeople) ) // deep clone => clonar TODAS las referencias internas que haya dentro de este objeto

peopleClone.pop() // ref 9876


peopleClone[0].candy = 100; // ref abcd

console.log(peopleClone) // ref 9876
console.log(somePeople) // ref 1234


// operador REST => operador de el resto => ...


const hobbies = ["videojuegos", "surfear", "cocinar", "juegos de mesa"]

const [ firstHobby, secondHobby, ...otherHobbies ] = hobbies
// const firstHobby = "videojuegos"
// const otherHobbies => el resto de los elementos que no hayan sido destructurados. Organizar en un array.

console.log(firstHobby)
console.log(secondHobby)
console.log(otherHobbies)


function verificarSiEsDiez(...restOfNumbers) {
  console.log(restOfNumbers)
  // devolvernos un mensaje si el resultado es 10
  let sum = restOfNumbers.reduce( (acc, elem) => {
    return acc + elem
  }, 0)

  if (sum === 10) {
    return "El valor es 10 exacto!"
  } else if (sum < 10){
    return "No llegó a 10 :("
  } else {
    return "Se paso de 10!!"
  }
}


console.log( verificarSiEsDiez(1, 4, 5) )
console.log( verificarSiEsDiez(10) )
console.log( verificarSiEsDiez(5, 8) )

// no importa cuandos argumentos yo le pase, el sistema usa solo esos le paso

// Complete the function sortByScore that receives an array of students and Sorts them best score and list best 3 as:
// After sorting, it should return an object with 4 properties as shown below:
// {
//  fistPlace: the student Object in first place, 
//  secondPlace: the student Object in second place, 
//  thirdPlace: the student Object in third place, .
//  others: everyone else not appearing above in a new Array
// }

const newStudents = [
  {
    name: 'ana',
    score: 5.4
  },
  {
    name: 'ivan',
    score: 7.5
  },
  {
    name: 'milo',
    score: 4.3
  },
  {
    name: 'igor',
    score: 7.0
  },
  {
    name: 'george',
    score: 8.9
  },
  {
    name: 'jess',
    score: 10.0
  },
  {
    name: 'kevin',
    score: 8.8
  },
  {
    name: 'beth',
    score: 7.1
  }
];


function sortByScore(arr) {  
  // .. your code here
  // shallow clone the original `arr` before sorting
  
  // shallow clone is [...arr]
  // deep clone is structuredClone(arr) or JSON.parse(JSON.stringify(arr))

  let clone = [...arr]

  clone.sort((elem1, elem2) => {
    // if (elem1.score > elem2.score) {
    //   return -1
    // } else {
    //   return 1
    // }
    return elem2.score - elem1.score
  })

  console.log(clone)

  // let firstPlace = clone.shift()
  // let secondPlace = clone.shift()
  // let thirdPlace = clone.shift()
  // let others = clone

  const [ firstPlace, secondPlace, thirdPlace, ...others ] = clone
  // const firstPlace = { name: 'jess', score: 10.0 }
  
  // you can console.log each result or return them all as an object (both are fine)
  const data = {
    firstPlace,
    secondPlace,
    thirdPlace,
    others
  }

  return data
}

console.log ( sortByScore(newStudents) );

// Expected Output from the function => 
// {
//   firstPlace: { name: 'jess', score: 10 },
//   secondPlace: { name: 'george', score: 8.9 },
//   thirdPlace: { name: 'kevin', score: 8.8 },
//   others: [
//     { name: 'ivan', score: 7.5 },
//     { name: 'beth', score: 7.1 },
//     { name: 'igor', score: 7 },
//     { name: 'ana', score: 5.4 },
//     { name: 'milo', score: 4.3 }
//   ]
// }


// JS Asincrono


const btnNode = document.querySelector("#btn")
const containerNode = document.querySelector("#container")

btnNode.addEventListener("click", () => {

  console.log("probando")

  // fetch => nos permite contactar con API externa y traer informacion
  
  // Promesa es un objeto que determina la posible respuesta de una operacion asincrona
  
  const data = fetch("https://api.spacexdata.com/v5/launches/latest")
  data.then((response) => {
    // cuando esto este listo, entonces quiero hacer algo 
    console.log(response)
    return response.json() // convertirla en un formato legible
  })
  .then((responseInJSON) => {
    console.log(responseInJSON)

    const imageNode = document.createElement("img")
    imageNode.src = responseInJSON.links.patch.small
    containerNode.append(imageNode)

  })

})




// Formas diferentes de resolver operaciones asincronas en JS




// voy a similar una funcion que busca un libro en un lugar externo a mi codigo y me devuelve ese libro de forma asincrona 0 - 1 seg en procesar.
function pedirUnLibro(bookIndex, callbackCuandoEsteListo) {

  const books = [
    "1. La comunidad del anillo",
    "2. Las dos torres",
    "3. El retorno del Rey"
  ]

  setTimeout(() => {

    // return books[bookIndex]
    let foundBook = books[bookIndex]
    callbackCuandoEsteListo(foundBook)

    //  vamos a replicar que entregar el libro toma 0 y 2 segundo
  }, Math.random() * 2000)
}

// const requestedBook = pedirUnLibro(0)
// console.log(requestedBook)

// pedirUnLibro( 0, (book) => {
//   console.log("leyendo el libro", book)

//   pedirUnLibro( 1, (book) => {
//     console.log("leyendo el libro", book)

//     pedirUnLibro( 2, (book) => {
//       console.log("leyendo el libro", book)
//     } )

//   } )

// } )

// pyramid of DOOM
// callback hell






// aqui nosotro replicamos una funcion que llama a un lugar externo y mi codigo para pedir data
function pedirUnLibroComoPromesa(bookIndex) {

  const books = [
    "1. La comunidad del anillo",
    "2. Las dos torres",
    "3. El retorno del rey"
  ]

  return new Promise((resolve, reject) => {

    // similar un comportamiento asincrono
    setTimeout(() => {
      let foundBook = books[bookIndex]
      if (foundBook === undefined) {
        reject("No existen libros con esa posicion") // error
      } else {
        resolve(foundBook)
      }
    }, Math.random() * 3000) // 0 y 3 segundos

  })

}

// como resolvemos una promesa

// let thePromise = pedirUnLibroComoPromesa(1)

// thePromise.then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log(error)
// })

pedirUnLibroComoPromesa(0)
.then((response) => {
  console.log("leyendo el libro", response) // 1er libro

  return pedirUnLibroComoPromesa(10) // pido el segundo
})
.then((response) => {
  console.log("leyendo el libro", response) // 2do libro

  return pedirUnLibroComoPromesa(2) // pedir el 3rd libro
})
.then((response) => {
  console.log("leyendo el libro", response) // 3er libro
})
.catch((error) => {
  console.log(error)
})



// algunas veces yo quiero recibir toda la data sin importar el orden en que se reciben. En el tiempo de ejecucion más eficiente quiero recibir todo.


// Promise.all & Promise.allSettled

Promise.all([
  pedirUnLibroComoPromesa(0),
  pedirUnLibroComoPromesa(10),
  pedirUnLibroComoPromesa(2),
])
.then((allResponses) => {
  // enviar todas las llamada al mismo momento y devolvernos una respuesta lo antes posible.
  console.log(allResponses)
})
.catch((error) => {
  // si al menos una de las promesas falla, TODO falla
  console.log(error)
})


Promise.allSettled([
  pedirUnLibroComoPromesa(0),
  pedirUnLibroComoPromesa(10),
  pedirUnLibroComoPromesa(2),
])
.then((response) => {
  console.log(response)
})


// resolviendo promesas con async/await
// 1. debemos trabajar dentro de una funcion
// async => la funcion va a ser de tipo asincrona 
// await => para esperar la resolucion de una promesa al llamarla

async function recibirData() {

  try {
    // try es: JS va a INTENTAR procesar lo siguiente...

    let response1 = await pedirUnLibroComoPromesa(0) 
    // JS espera que se resuelva esta linea (el tiempo que tome) antes de continuar
    console.log(response1)
  
    let response2 = await pedirUnLibroComoPromesa(10)
    console.log(response2)
  
    let response3 = await pedirUnLibroComoPromesa(2)
    console.log(response3)

  } catch(err) {
    // ...si algo falla, entonces procesa lo que haya acá
    console.log(err)
  }

}


recibirData()

