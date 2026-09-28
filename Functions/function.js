// function vivah(username) {
//     if (!username) {
//         console.log("please enter your username");
//         return;
//     }
//     else {
//         return `${username} just logged in!`;
//     }
// }

// console.log(vivah());

// function vivah(username) {
//     if (username === undefined) {
//         console.log("please enter your username");
//         return;
//     }
//     else {
//         return `${username} just logged in!`;
//     }
// }

// console.log(vivah("aayushi"));

function vivah(username) {
    if (username === undefined) {
        console.log("please enter your username");
        return;
    }

    return `${username} just logged in!`;

}

console.log(vivah());