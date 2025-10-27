
function sayMyName() {
    console.log("Hello World")
}
// sayMyName();

function addTwoNum(a, b) {
    return a+b;
}

const res = addTwoNum(5, 10)
// console.log(`this result is ${res}`)



function loginUserMsg(username) {     //can set the deafult value of emypty username 'username = sam' write it in the function parameter 
    if (username === undefined) {  //can use this !username
        console.log("Please enter the username");
        return;
    }
    return `${ username} just logged in`
}

// console.log(loginUserMsg("harshal"));
// console.log(loginUserMsg());


function calculateCartPrice(num1) {
    return num1;
}
// console.log(calculateCartPrice(2));

//what is pass the multiple arguments
function calculateCartPrice(...num1) {   //here we use the spread operator but for function it is called as REST
    return num1;
}
// console.log(calculateCartPrice(700,300,600,500));

function calculateCartPrice(val1, val2, ...num1) { //here val1 is 700, val2 is 300 and num1 has rest values 
    return num1;
}
// console.log(calculateCartPrice(700,300,600,500));


const user = {
    userName: "Harshal",
    salary: 900000
}

function userAcc(user) {
    return `User name is ${user.userName} and salary is ${user.salary}`;
}

console.log(userAcc(user)); 