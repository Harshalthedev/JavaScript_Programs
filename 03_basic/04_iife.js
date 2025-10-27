const fun = function two() {
    console.log(`hello world`);
};

//immediately invoked function expresseion
//why use : to avoid the problem of global variable polution and having a scope of local variables
//always use the ; at the end of the iife function

// 1.
(function chai() {                           //this is a name iife 
    console.log(`Db connected`);
}) ();
// 2.
((name) => {console.log(`Db connected`)}) ("harshal");          //this is a unname iffe
