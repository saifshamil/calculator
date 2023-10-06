#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number:"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        message: "select operator",
        choices: ["Add", "Subtract", "Multiply", "Divide"]
    }
]);
let result;
switch (answer.operator) {
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is: " + result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is: " + result);
        break;
    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is: " + result);
        break;
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("The answer for Division is: " + result);
        break;
}
