const taskInput = document.querySelector(".task-input");
console.log(taskInput);
const addBtn = document.querySelector("#add-btn");
console.log(addBtn);

const deleteBtn = document.getElementById("delete-btn");

const taskList = document.querySelector("#task-list");
console.log(taskList);

const newUl = document.createElement("ol");
taskList.appendChild(newUl);

//? addBtn event handler

addBtn.addEventListener("click", () => {
  if (!taskInput.value) {
    alert("Please enter a task");
  } else {
    newUl.innerHTML += `<li>${taskInput.value}</li>`;
    console.log(newUl);
    taskInput.value = "";
    newUl.style.color = "white";
    newUl.style.fontSize = "3rem";

    taskInput.focus();
  }
});

window.addEventListener("load", () => {
  taskInput.focus();
});

//? delete Btn handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There is not item to count");
});

//? enter key event handler

taskInput.addEventListener("keydown", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.keyCode);
  // console.log(event.code);
  if (event.keyCode === 13) {
    addBtn.click();
  }
  if (event.code === "Delete") {
    deleteBtn.click();
  }
});
