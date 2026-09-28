//Object De-Structuring

const product = {
    name: "Laptop",
    price: 60000,
    brand: "hp",
    ram: "16GB"
};

// console.log(product.ram);
// console.log(product.brand);
// console.log(product.name);

const {name} = product;
// console.log(name); //does the same thing as console.log(product.name)

const { name: productName } = product;
console.log(productName);