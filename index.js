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
const greeting = () =>{
  console.log('Hello World! I can do a simple function!!!!')
  return ('Hello World! I can do a simple function!!!!')
}
greeting()

// Scenario 2
const squareNumber = (x) =>{
  let anyNumber = x*x
  console.log(anyNumber)
  return anyNumber
}
squareNumber(10)

// Scenario 3
const totalPrice = (a, b) =>{
  let finalPrice = a + b
  console.log(finalPrice)
  return finalPrice
}
totalPrice(10, 10)

/**!SECTION - Callback Functions Exercises
 * GPT
Certainly! Let's dive into the concept of using functions as parameters (also known as "callback functions") and then apply this knowledge in the context of working with APIs.

Why and When to Use a Function as a Parameter
A function used as a parameter, or a "callback function," is a powerful feature in JavaScript that allows for greater flexibility and control in your code. Here are some key reasons and scenarios for using them:

Asynchronous Operations: In JavaScript, especially in web development, you often deal with asynchronous operations like API calls, timeouts, and event handling. Callback functions allow you to execute code after these operations complete.

Higher-Order Functions: Functions that take other functions as arguments or return them are called higher-order functions. They are used in functional programming to create more modular and reusable code.

Event Listeners: When you want to perform an action in response to an event (like a mouse click), you pass a callback function to an event listener. This function executes when the event occurs.

Array Methods: JavaScript array methods like map, filter, and forEach take callback functions to operate on each array element.

Customizability and Reusability: Callbacks allow you to write more generic functions with specific behavior determined by the callback, enhancing reusability.

Exercises with Callback Functions and APIs
To practice using functions as parameters, especially in the context of APIs, we'll do three exercises:

Simple Callback Function:

Task: Create a function processData that takes an array and a callback function. The callback function will process each element of the array. Test it by passing an array of numbers and a function that doubles each number.
Using setTimeout with a Callback:

Task: Write a function that takes a message and a delay time as parameters. The function should use setTimeout to log the message to the console after the specified delay.
Fetching Data from an API:

Task: Write a function that makes an API call to https://jsonplaceholder.typicode.com/todos/1 (a test API) and logs the response. Use the fetch API and handle the response with a callback function.
 */