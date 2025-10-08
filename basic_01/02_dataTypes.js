"use Strict"; // this line means we are using the newer version but by default it is a new version of JS

// alert(3 + 3) we cant this because we are using node.js not browser

// number
// Bigint
// string
// boolean
// null
// undefined
// symbol
// object

console.log(typeof(null));            //null is a type of object
console.log(typeof(undefined));       // undefined is a type of undefined


//primitive

//7 types  String, boolean, null, undefined, Number, Symbol, BigInt



// is js a static or dynamic language --> dynamic langauge


//here symbol is used to identity something unique, theirfore eventhough they have the same value it is diffrent
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId) // false


// BigInt -> use n at the end of the number

const bigInt = 123456789456123355555555n;
console.log(bigInt);

//Reference (Non Primitive)

// Arrays, Objects, Function


const myArray = ["jay", "sham", "raj", "ram"];
let myObject = {
    name : "harshal",
    age : 21,
    city : "pune"
}

const myFunction = function() {
    console.log("hello");
}

console.log(typeof myArray)
console.log(typeof myObject)
console.log(typeof myFunction)




//++++++++++++++++++++++++++++++++++++ MEMORY  ++++++++++++++++++++++

// Stack (Primitive) || Heap (Non Primitive)
