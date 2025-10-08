let mydate = new Date()

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString());

const timeStamp = Date.now()

console.log(timeStamp.toString());
console.log((Math.floor(Date.now()/1000))); 