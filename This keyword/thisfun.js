//Behavior of 'this' in functions
// "use strict"
function abc() {
    console.log(this);    
}
abc();
//will result in a bunch of code for global object in vscode terminal and 'Window' object in the browser's console. (without "use strict")
//when using "use strict", result will be 'undefined' in both, the vscode terminal and the browser's console.
//in non-strict mode, since there is no value assigned to 'this' in the function, it assumes 'this' in global space and gives it 'Window' as the value. 
//in strict mode, value is held by 'this' even without assigning a value.