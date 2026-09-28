
// xyz(); //will not execute since execution is before defining the function. (VS code terminal)
// console.log(x); //will not execute since execution is before defining the variable. (VS code terminal)

// xyz(); //will be executed in the browser's console but throw error in vscode terminal. This will not be executed if the function is stored in a variable. 
// console.log(x); // will show up undefined in browser's console and throw error in vscode terminal.

var x = 56;

function xyz () {
    console.log("Hello guys");
}

xyz(); //will execute since execution is after defining the function.
console.log(x); //will execute since execution is after defining the variable.

//if we put the function in a variable, then xyz won't execute in the browser's console before defining.

// const xyz = function() {
//     console.log("Heyyyyyy");
// }

// xyz();