const userEmail = "haarshal@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Not got user email");   
}

// truthy value
// "0", 'false', " ", [], {}, function(){}

// false, 0, -0
// false, 0, -0, BigInt On, "", null, undefined, Nan

//how to check wheather a array, object is empty or not, then do this

const myObj = {};

if (Object.keys(myObj).length === 0) {console.log(`object is empty`)}

const myArr = [];

if (myArr.length === 0) console.log(`array is empty`);

//Nullish Coalescing Opeerator (??): null undefined
let val1;
val1 = 5 ?? 10; //prints the first non null, undefined value
//this is used to avoid the having the null value
val1 = null ?? 25;
console.log(val1); //prints 25


///ternary operator

let a = (2 == 2) ? "good" : "bad";
console.log(a);
