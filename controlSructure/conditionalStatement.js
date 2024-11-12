//  control structure i JS is essiential for controlling the flow of execution i ur code. It allows u to dictate how ur programme should respond based on conditions.

// 1. conditional statement
// conditional statement executes a block of code if the specified condition is true or false.

// a. If statement
 let temp = 30;

 if( temp > 25) {
    console.log("it is a hot day")
 } else {
    console.log("it is a cold day")
 }

 const isAdmin = false;o
 const isSuperUser = true;

 if (isAdmin || isSuperUser) {
    console.log("you can have access to the app")
 } else {
    console.log("you are not allosed to have access to the app")
 }

 const hasPaid = true;
 const goodHealth = false;

 if (hasPaid && goodHealth) {
    console.log("welcome to the class")
 } else {
    console.log("go back home")
 }
