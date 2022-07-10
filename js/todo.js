const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const refresh = document.querySelector("#greeting");

const TODO_KEY = "toDos";
const FADEOUT_KEY = "fadeOut";
const FADEIN_KEY = "fadeIn";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const targetli = event.target.parentElement;
  targetli.remove();
  toDos = toDos.filter((x) => x.id !== parseInt(targetli.id));
  saveToDo();
  refresh.classList.remove(FADEIN_KEY);
  refresh.classList.add(FADEOUT_KEY);
}

function generateToDo(newToDo) {
  const list = document.createElement("li");
  list.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.Text;
  const xButton = document.createElement("button");
  xButton.innerText = "❌";
  xButton.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(xButton);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    Text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  generateToDo(newToDoObj);
  saveToDo();
  refresh.classList.remove(FADEOUT_KEY);
  refresh.classList.add(FADEIN_KEY);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDoList = localStorage.getItem(TODO_KEY);

if (saveToDoList !== null) {
  const parseToDoLIst = JSON.parse(saveToDoList);
  toDos = parseToDoLIst;
  parseToDoLIst.forEach(generateToDo);
}
