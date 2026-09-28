const userAbc = {
    username: "Bob",
    age: 20,
    contact: 1234567890
};

Object.freeze(userAbc);
userAbc.username="aLice";
console.log(userAbc);

//object freeze will disable overwriting the object. 