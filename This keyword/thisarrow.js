//Behavior of 'this' keyword in an arrow function

const xyz = {
    a: 20,
    b: () => {
        console.log(this);
    }
};

xyz.b();

const abc = {
    a: 10,
    c: function() {
        const b = () => {
            console.log(this);
        };
        b();
    }
};
abc.c();
