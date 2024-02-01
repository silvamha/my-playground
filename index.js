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
const greeting = () => {
  console.log("Hello World! I can do a simple function!!!!");
  return "Hello World! I can do a simple function!!!!";
};
greeting();

// Scenario 2
const squareNumber = (x) => {
  let anyNumber = x * x;
  console.log(anyNumber);
  return anyNumber;
};
squareNumber(10);

// Scenario 3
const totalPrice = (a, b) => {
  let finalPrice = a + b;
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

// Declare function with two arguments: array and callback function

const processData = (arr, callback) => {
  return arr.map(callback);
};

// Declare the function that is to be used with call back and establish logic within function
const doubleNumber = (number) => {
  return number * 2;
};

let myVar = [10, 20, 30, 40];

// Log processata using array and call back functions
console.log(processData(myVar, doubleNumber));

/**!SECTION Function Exercises
 * 2. Using setTimeout with a Callback:
 * 
Task: Write a function that takes a message and a delay time as parameters. The function should use setTimeout to log the message to the console after the specified delay.
 */

const delayMsg = (msg, callback) => {
  return setTimeout((msg) => {

  },delay);
};

// Create call back function

const delay = setTimeout(() => {
  console.log("This is only a test");
}, 2000);

delayMsg("Testing the callback", delay);

/**!SECTION Function Exercises
 * 3. Fetching Data from an API:
 * 
Task: Write a function that makes an API call to https://jsonplaceholder.typicode.com/todos/1 (a test API) and logs the response. Use the fetch API and handle the response with a callback function.
 */

// Create function to fetch API data
function getIdea() {
  // Use fetch method
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      // Prepare function to log resust
      console.log(data);
    });
}

//Call function
getIdea()