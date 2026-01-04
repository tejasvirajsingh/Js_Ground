// Day 3 JavaScript
// Topics: if-else, switch, loops, arrays

// 1️⃣ if-else example
  let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote....");
} else {
    console.log("You are not eligible to vote.");
}

console.log("------------------");

// 2️⃣ switch case example
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

console.log("------------------");

// 3️⃣ for loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

console.log("------------------");

// 4️⃣ while loop
console.log("While Loop:");
let i = 1;
while (i <= 5) {
    console.log("Count:", i);
    i++;
}

console.log("------------------");

// 5️⃣ do-while loop
console.log("Do-While Loop:");
let j = 1;
do {
    console.log("Value:", j);
    j++;
} while (j <= 5);

console.log("------------------");

// 6️⃣ Array example
let marks = [85, 90, 78, 88, 92];

console.log("Student Marks:");
for (let k = 0; k < marks.length; k++) {
    console.log(`Mark ${k + 1}: ${marks[k]}`);
}


// what is conditional statments.