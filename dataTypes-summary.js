// Primitive

// 7 types: String, Boolean, Number, null, undefined, symbol, BigInt 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userName;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4687961156545623547n



// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["superman", "batman", "spiderman"];

let myObj = {
    name: "Fareed Ahmed Khan",
    age: 40,
    gender: "Male"
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// score dataType is number
// scoreValue dataTyp is number
// isLoggedIn dataType is Boolean
// outsideTemp dataType is Object
// userName dataType is undefined
// id dataType is Symbol
// anotherId dataType is Symbol
// bigNumber dataType us BigInt
// heros dataType is Object
// myObj dataType is object
// function dataType is function