const myObj = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

//we can use for in loop for the object
//dont use it for maps, use for objects, array
for (const key in myObj) {   //it prints all the keys
    // console.log(key)
}
for (const key in myObj) {      //here it prints the values too
    console.log(`${key} is the key and the value is ${myObj[key]}`);
}


const school = ['A', 'B', 'C'];
for (const key in school) {
    console.log(school[key])
}

///for each loop
