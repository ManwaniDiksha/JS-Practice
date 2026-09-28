// const user1 = {
//     username: "Bob",
//     age: 20,
//     contact: 9876543210
// };

// const user2 = {
//     username: "Alice",
//     age: 21,
//     contact: 1234567890
// };


// const user3 = {
//     user1, user2
// }; 
// console.log(user3);

//this just puts them in one object but separately. we want them merged in one object. 
    
    


// const user1 = {
//     username: "Bob",
//     age: 20,
//     contact: 9876543210
// };

// const user2 = {
//     username: "Alice",
//     age: 21,
//     contact: 1234567890
// };

// const user3 = Object.assign(user1, user2);

// console.log(user3);

//here, user1 is the target and user2 is the source. 
//object assign only works to merge two objects when they have different properties(keys).
//here, user1 and user2 have the same properties.
//so what this method does is it takes all the 'values' from user2 and substitutes it in place of 'values' of user1
//so now, user1 has the same keys which were defined but with the values of user2.
//hence the output just looks like we logged user2. 
//not what we wanted. we learned that OBJECT ASSIGN ONLY WORKS TO MERGE 2 OBJECTS WHEN THEY HAVE DIFFERENT PROPERTIES. 



// const user1 = {
//     username1: "Bob",
//     age1: 20,
//     contact1: 9876543210
// };

// const user2 = {
//     username2: "Alice",
//     age2: 21,
//     contact2: 1234567890
// };

// const user3 = {
//     ...user1,
//     ...user2
// };

// console.log(user3);

//to merge them we had to rename the keys of the objects and make them unique


// const user1 = {
//     username1: "Bob",
//     age1: 20,
//     contact1: 9876543210
// };

// const user2 = {
//     username2: "Alice",
//     age2: 21,
//     contact2: 1234567890
// };

// const user3 = Object.assign(user1, user2);
// console.log(user3);

//so object assign method works too since the properties of the objects are nanmed uniquely. 
//Conclusion:
//two methods for merging two objects, spread method (...user1, ...user2) and the other method is object.assign

//Merging for three (or more) objects
const user1 = {
    username1: "Bob",
    age1: 20,
    contact1: 9876543210
};

const user2 = {
    username2: "Alice",
    age2: 21,
    contact2: 1234567890
};

const user3 = {
    username3: "Charlie",
    age3: 22,
    contact3: 1234560987
};

const merged = Object.assign({}, user1, user2, user3);
console.log(merged);

//similarly for spread operator: 
// const merged = { ...user1, ...user2, ...user3 };
// console.log(merged);



// Object.create()