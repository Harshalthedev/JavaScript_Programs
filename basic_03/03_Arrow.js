const user = {
    name: "Hitesh",
    price: 999,
    
    welcomeMessage: function() {
        // console.log(`${this.name}, welcome to the website`)       
    }
}
user.welcomeMessage();

user.name = "Harshal";
user.welcomeMessage(); 

// this works only for the object and not for the function, i.e inside the fields of the object

//declaring function using the arrow

const chai = () => {
    let userName = "Harshal";
    console.log(this);
}
// ways to use it
// () => {}

const addNum =  (num1, num2) => {
    return num1+  num2;                        //explicitly use of return keyword
}
const addNum1 =  (num1, num2) => num1 +  num2;
const addNum2 =  (num1, num2) => (num1 +  num2);       //implicitly no use of return keyword
const addNum3 =  (num1, num2) => {(num1 +  num2)};       //implicitly no use of return keyword


console.log(addNum(3,4));
console.log(addNum1(3,4));
console.log(addNum1(3,4));


