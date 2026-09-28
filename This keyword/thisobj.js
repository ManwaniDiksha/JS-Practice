const obj = {
    a: 10,
    b: function() {
        console.log(this.a);
        console.log(this);
    }
};

// obj.b();

const abc = {
    a: 20
}
obj.b.call(abc);


//method =  function inside an object.