const user = {
    username: "Bob",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to the website`); //if we don't use 'this' keyword here it will generate an error.
        console.log(this);
    }
};

// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();

// console.log(this);
//{} in node environment, and 'Window' object in browser environment. 

// function chai() {
//     let username = "Bob";
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let username = "Bob";
//     console.log(this.username);
// };
// chai();

// const chai = () => {
//     let username = "Alice";
//     console.log(this);
//     console.log(this.username);
// };
// chai();


//Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(addTwo(3, 4));


//Implicit return arrow function
// 1st way: const addTwo = (num1, num2) => num1 + num2;
// 2nd way: const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "BOB"}); //({}) is needed to return an object with arrow function.
console.log(addTwo(3, 4));