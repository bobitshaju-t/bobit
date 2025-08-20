// Load readline module
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Ask first number
rl.question("Enter first number: ", (num1) => {
  // Ask second number
  rl.question("Enter second number: ", (num2) => {
    let a = parseFloat(num1);
    let b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      console.log("❌ Please enter valid numbers!");
    } else {
      console.log(`✅ The sum of ${a} and ${b} is: ${addNumbers(a, b)}`);
    }

    rl.close();
  });
});
