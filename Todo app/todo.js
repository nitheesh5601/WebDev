document.getElementById("inp").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

let count = 1;

function addTodo() {
  // Fetching input
  const inputText = document.getElementById("inp").value.trim();
  if (inputText === "") {
    alert("Don't leave empty");
    return;
  }

  // Creating new div element
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "flex");
  newDiv.setAttribute("id", "todo-" + count);

  // Creating new list item element (li)
  const newHeading = document.createElement("li");
  newHeading.textContent = inputText;

  // Creating new button element
  const newButton = document.createElement("button");
  newButton.textContent = "X";
  newButton.setAttribute("onclick", `deleteTodo(${count})`);

  // Appending elements
  newDiv.appendChild(newHeading);
  newDiv.appendChild(newButton);

  // Appending to parent
  const parentDiv = document.getElementById("mainTodolist");
  parentDiv.appendChild(newDiv);

  // Increasing the count
  count++;

  // Clearing the input field
  document.getElementById("inp").value = "";
}

// Adding event listener for toggling check/uncheck using event delegation
document.getElementById("mainTodolist").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function deleteTodo(index) {
  const delText = document.getElementById("todo-" + index);
  delText.parentNode.removeChild(delText);
}

function clearAll() {
  const clearParentDiv = document.querySelectorAll("div[class^='flex']");
  clearParentDiv.forEach(function (todo) {
    todo.parentNode.removeChild(todo);
  });
}
