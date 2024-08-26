document.getElementById("inp").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
let count = 1;
function addTodo() {
  //fetching input
  const inputText = document.getElementById("inp").value.trim();
  if (inputText === "") {
    alert("Don't leave empty");
    return;
  }
  //creating new div element
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "flex");
  newDiv.setAttribute("id", "todo-" + count);

  //creating new heading element
  var newHeading = document.createElement("li");
  newHeading.textContent = inputText;

  //creating new button element
  const newButton = document.createElement("button");
  newButton.textContent = "X";
  newButton.setAttribute("onclick", "deleteTodo(" + count + ")");

  //appending elements
  newDiv.appendChild(newHeading);
  newDiv.appendChild(newButton);

  //appending to parent
  const parentDiv = document.getElementById("mainTodolist");
  parentDiv.appendChild(newDiv);

  //increasing the count
  count++;

  //clearing the input field
  document.getElementById("inp").value = "";

  parentDiv.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      }
    },
    false
  );
}

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

