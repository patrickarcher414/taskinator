

var buttonEl = document.querySelector("#save-task")
var taskToDo = document.querySelector("#tasks-to-do")

function addTaskHandler() {
    var taskItem = document.createElement("li")
    taskItem.className = "task-item"
    taskItem.innerHTML = "this is a new task"
    taskToDo.appendChild(taskItem)
}

buttonEl.addEventListener("click", addTaskHandler)
