// for loop, for each, break, continue

//array specific loops

//1. for of loops
const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//maps   // same as of the java maps, but it has the insertion order preserved

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':- ', value);
}

const myObj = {
    game1: "Cricket",
    game2: "Football"
}

//using the for of we can interate the object their is the another method to do so