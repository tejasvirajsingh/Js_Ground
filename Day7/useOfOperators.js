let num1 = Number(prompt("Enter a first Number: "));
let num2 = Number(prompt("Enter a second Numeber: "));
let operator = prompt("Enter Operator (+ , - , * , /): ");

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;

        case "-": 
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;


        case "*": 
        console.log(`${num1} * ${num2} = ${num1*num2}`);
        break;


        case "/": 
        console.log(`${num1} / ${num2} = ${num1/num2}`);
        break;

  default:
    console.log("Invalid Operator");
}