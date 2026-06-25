//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++

//Stack(Primitve) and Heap(Non primitive) Memory

//In stack memory the declared variable gets a copy of itself too and if memory is defined in heap then we get a reference of original value

let myYoutubename = "kashishgangwar"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",//both upi and email goes under heap 
    upi: "user@ybl"
}

let userTwo = userOne // the reference for the user one and user two is same as they both are present in the stack and get refrenced from the email and upi which is presnt in the heap memory data structure

userTwo.email = "kashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
