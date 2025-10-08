let score = "33"

console.log(typeof score);
console.log(Number(score));

let score1 = "33abc"
console.log(typeof score1);
console.log(Number(score1));


//"33" -> 33
//"33abc"  -> NaN
// null -> 0
// true -> 1, false -> 0
// undefined -> undefined

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);   //1 -> true, 2 -> false

console.log(booleanIsLoggedIn)


let num = 265;
let num1 = String(num);
console.log(typeof(num1))
console.log(num1)


//operations

let value = 3;
let negValue = -value;

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);  //here it is 2 power 2
// console.log(2/2);
// console.log(2%2);


let str1 = "hello";
let str2 = " harshal";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32