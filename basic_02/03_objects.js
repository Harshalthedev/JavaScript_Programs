// singleton

const mySym = new Symbol("key1")


//this is a object literal
const JsUser = {
    name : "Harshal",
    age: 21,
    [mySym]: "key2",
    "fullName": "Harshal Pramod Thakare", //this cant be access using the . operator, need to use the []
    email: "thakareharshal73@gmail.com",
    isLoggedIn: false,
    lastLogeedIn: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);    //we can  use a object in this way also

// console.log(JsUser.fullName); // cant be access using the .
console.log(JsUser["fullName"])


//symbol

//declaring a symbol outside a object and resung it inside the object so in this a case it remains a object feild not a symbol

console.log(typeof JsUser["mySym"]); //it returns the string

// to access it as symbol it must have 
