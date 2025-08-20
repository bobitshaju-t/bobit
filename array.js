// Create an array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Print the whole array
console.log("Fruits array:", fruits);

// Access individual elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Add a new element
fruits.push("Grapes");
console.log("After adding Grapes:", fruits);

// Remove the last element
fruits.pop();
console.log("After removing last fruit:", fruits);

// Loop through the array
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + (i + 1) + ":", fruits[i]);
}
