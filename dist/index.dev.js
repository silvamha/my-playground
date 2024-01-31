"use strict";

// <<<<<<< HEAD
// const inputEl = document.getElementById("input-el");
// const buttonEl = document.getElementById("button-el");
// const ulEl = document.querySelector("ul");
// const listItems = ["This is a list item"]; // Initial item
// buttonEl.addEventListener("click", function () {
//   const newItem = inputEl.value.trim();
//   if (newItem !== "") {
//     listItems.push(newItem); // Add the new item to the listItems array
//     const liEl = document.createElement("li");
//     liEl.textContent = newItem;
//     ulEl.appendChild(liEl);
//     inputEl.value = ""; // Clear the input element value
//     console.log(listItems)
//   }
// });
// const inputEl = document.getElementById("input-el");
// const buttonEl = document.getElementById("button-el");
// const ulEl = document.querySelector("ul");
// const listItems = ["This is a list item"]; // Initial item
// buttonEl.addEventListener("click", function () {
//   const newItem = inputEl.value.trim();
//   if (newItem !== "") {
//     listItems.push(newItem); // Add the new item to the listItems array
//     const liEl = document.createElement("li");
//     liEl.textContent = newItem;
//     ulEl.appendChild(liEl);
//     inputEl.value = ""; // Clear the input element value
//     console.log(listItems)
//   }
// });
// >>>>>>> 00afe308ee1c88decaddf777f44f3f736b15c06d
// Test Function Parameters and Arguments
// Scenario 1
var greeting = function greeting() {
  console.log('Hello World! I can do a simple function!!!!');
  return 'Hello World! I can do a simple function!!!!';
};

greeting(); // Scenario 2

var squareNumber = function squareNumber(x) {
  var anyNumber = x * x;
  console.log(anyNumber);
  return anyNumber;
};

squareNumber(10); // Scenario 3

var totalPrice = function totalPrice(a, b) {
  var finalPrice = a + b;
  console.log(finalPrice);
  return finalPrice;
};

totalPrice(10, 10);
/**!SECTION - Function Exercises
 * 1. Simple Callback Function:
 * 
Task: Create a function processData that takes an array and a callback function. The callback function will process each element of the array. Test it by passing an array of numbers and a function that doubles each number.
 *
 */

var processData = function processData(arr, callback) {
  return arr.map(callback);
};

var doubleNumber = number;