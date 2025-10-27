//having a nested objects

// const myObj = new Object();

const tinder = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "Harshal",
            lastName: "Thakare",
        }
    }
}
// console.log(tinder.fullName.userName.firstName);

//merge two object

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "abc", 4: "xyz"};

//using the spreead operator
console.log({...obj1, ...obj2});

//merge with the hel of assign
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3)

const myarr = [
    {email1: "a", age1: "b", name1: "c"},
    {email2: "ac", age2: "bc", name2: "cd"},
]

console.log(myarr[1].age2);
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

