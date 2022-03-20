

var buttonEl = document.querySelector("#save-task")
var taskToDo = document.querySelector("#tasks-to-do")

function addTaskHandler() {
    var taskItem = document.createElement("li")
    taskItem.className = "task-item"
    taskItem.textContent = "this is a new task"
    taskToDo.append(taskItem)
}

buttonEl.addEventListener("click", addTaskHandler)
