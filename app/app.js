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
  }
  taskInput.focus();
});
