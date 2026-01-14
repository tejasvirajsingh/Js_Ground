let color = 'white';

let theme = prompt("Choose your Theme Color: (light, dark, pinkish, greenish)");




if (theme === 'light') {
    color = 'white';
    console.log(`Your selected theme is ${theme} and picked color is ${color}`);
} 
else if (theme === 'dark') {
    color = 'black';
    console.log(`Your selected theme is ${theme} and picked color is ${color}`);
} 
else if (theme === 'pinkish') {
    color = 'pink';
    console.log(`Your selected theme is ${theme} and picked color is ${color}`);
} 
else if (theme === 'greenish') {
    color = 'green';
    console.log(`Your selected theme is ${theme} and picked color is ${color}`);
} 
else {
    console.log("Invalid color..");
}
