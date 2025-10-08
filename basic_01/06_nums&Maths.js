const score = 400;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toFixed(2))   //here toFixed method is used to show the decimal values digits

const otherNum = 123.896;
console.log(otherNum.toPrecision(3)); //it must be deal with the decimal values and makes the num roundOff

const hundreds = 10000000;

console.log(hundreds.toLocaleString()) // en-IN it makes the ',' between the digits

// +++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

//mostly same as java math libraries

//floor, ceil, random

console.log(Math.random())
console.log(Math.round(Math.random() * 10)+1)

//min it must be 10 the random number
const min = 10;
console.log(Math.round(Math.random() * 10)+1 + min)
