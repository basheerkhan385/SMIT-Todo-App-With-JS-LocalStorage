const body = document.querySelector("body");
const div = document.createElement("div");
const form = document.createElement("form");
const input = document.createElement("input");
const subBtn = document.createElement("button");
subBtn.textContent = "Add Task";
subBtn.type = "submit";
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const delBtn = document.createElement("button");
// delBtn.textContent = "Delete";

form.append(input, subBtn);
const ul = document.createElement("ul");
div.append(form, ul);
body.append(div);
const errorP = document.createElement("p");

function addTodo(event) {
  if (input.value.trim() == "") {
    errorP.textContent = "Please Enter a task";
    div.append(errorP);
  } else if (input.value.trim() != "") {
    errorP.textContent = "";
    div.append(errorP);
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    input.focus();
  }
  ul.textContent = "";
  showTodo();
}

function showTodo() {
  tasks.map((task, idx) => {
    const li = document.createElement("li");
    li.textContent = task;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTodo(idx));
    li.append(delBtn);
    ul.append(li);
    console.log("Task : ", task + idx);
  });
}
showTodo();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

function deleteTodo(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  ul.textContent = "";
  showTodo();
}

// delBtn.addEventListener("click", deleteTodo);
