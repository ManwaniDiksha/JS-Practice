const uber = {
    id: 1234,
    email: "no@gmail.com",
    isLoggedIn: false,
    username: {
        userfullname: {
            userfirstname: "Bob",
            usermiddlename: "the",
            userlastname: "builder"
        }
    }
}

// console.log(uber.username.userfullname.usermiddlename);


//hasOwnProperty checks whether this object has the specified property as its own property (returns false if property is inherited not owned)

console.log(uber.hasOwnProperty('isLoggedIn')); //will return true since object does own that property.
console.log(uber.hasOwnProperty('isLoggedInnnnn')); //will return false since object does not own that property. property does not exist.