// TP-2 Add todo feature

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value;

  if (todoText === "") {
    alert("Please write something");
    return;
  }

  const li = document.createElement("li");
  li.textContent = todoText;

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
