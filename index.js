const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const ulEl = document.querySelector("ul");

const listItems = ["This is a list item"]; // Initial item

buttonEl.addEventListener("click", function () {
  const newItem = inputEl.value.trim();

  if (newItem !== "") {
    listItems.push(newItem); // Add the new item to the listItems array

    const liEl = document.createElement("li");
    liEl.textContent = newItem;
    ulEl.appendChild(liEl);

    inputEl.value = ""; // Clear the input element value
    console.log(listItems)
  }
});
