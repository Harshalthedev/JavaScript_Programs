const myArr1 = [12,1,5,1,4,5];
// console.log(myArr1[2]);  //0th indexing

const myArr2 = new Array("Harshal",3,true,5,9,8);
// console.log(myArr2); //it has mix datatypes values

const myArr3 = new Array(2,3,6,5,9,8);

myArr3.push("Jay");  //adds new element at the last
myArr3.push(15);

myArr3.pop(); // removes the element at last here in case 15

myArr3.unshift(88); // adds the element at start 
myArr3.shift(); // removes the element at start 

myArr3.includes("Jay") // it works at contians and returns a boolean

myArr3.indexOf("Jay") // it returns a elements index

// console.log(myArr3);

// slice and splice

const myArr = [1,36,15,12,5,6];

console.log("A", myArr);

const myn1 = myArr.slice(1, 4);      // it just take the element from 1 to 4 (excluding), org. remains same

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);     //it removes the element from 1 to 3 (including) just run the code to see the working
console.log(myn2)
console.log("C", myArr)


