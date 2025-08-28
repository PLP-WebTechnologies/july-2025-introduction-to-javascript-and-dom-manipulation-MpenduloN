const outputDiv = document.getElementById("output");
let gender = "Male";

if (gender === "Male") {
    console.log("Hello, Sir!");
} else {
    console.log("Hello, Ma'am!");
}

let favoriteColor = "Blue";
console.log("Favorite color:",favoriteColor);

function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}
// Calculate sum of numbers 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
outputDiv.innerText = `Sum of numbers 1 to 5: ${sum}`;

// ...existing code...
// Calculate square of a number
function square(num) {
    return num * num;
}
console.log("Square of 5:", square(5));
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
// while Loop
let j = 1;
while (j <= 5) {
    console.log("Iteration:", j);
    j++;
}

// display message in div
// display message in div
// Button click event
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    alert(`Hello, ${name}! Welcome to the site.`);
});
const itemList = document.getElementById("itemList");
const pets = ["Dog", "Cat", "Bird"];
pets.forEach(function(pet) {
    const li = document.createElement("li");
    li.innerText = pet;
itemList.appendChild(li);
    itemList.appendChild(li);
});

