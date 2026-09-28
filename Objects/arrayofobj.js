const users = [
    {
        username: "Bob",
        age: 20,
        contact: 9876543210
    },
    {
        username: "Alice",
        age: 21,
        contact: 1234567890
    },
    {
        username: "Charlie",
        age: 22,
        contact: 1357924680
    }
];

console.log(users);
console.log(users[0]);
console.log(users[0].username);  
console.log(users[1].age);     

//looping in an array of objects
for (let user of users) {
    console.log(user.username);
}

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users)); //instead of array of objects it makes and array of arrays. (object --> array)
