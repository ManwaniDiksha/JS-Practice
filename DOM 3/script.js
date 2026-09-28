// const div = document.querySelector("h1");
// console.log(div);

// const abc = div.getAttribute("class");
// console.log(abc);

// let p = document.querySelector("h1");
// console.log(p.getAttribute("class"));

// let p = document.querySelector("h1");
// console.log(p.setAttribute("name","heading 1"));

// let p = document.querySelector("h1");
// console.log(p);
// p.style.backgroundColor = "blue"

const button = document.createElement("button");
console.log(button);
button.innerText = "Subscribe";

let p = document.querySelector("h2");
// p.append(button);
// p.prepend(button);
// p.before(button);
// p.after(button);
p.remove(); //will remove h2

const newh2 = document.createElement("h2");
newh2.innerText = "Welcome!";
document.querySelector("h1").after(newh2);