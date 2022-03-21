

var formEl = document.querySelector("#task-form")
var taskToDo = document.querySelector("#tasks-to-do")

function addTaskHandler(event) {
    event.preventDefault()
    var taskItem = document.createElement("li")
    taskItem.className = "task-item"
    taskItem.innerHTML = "this is a new task"
    taskToDo.appendChild(taskItem)
}

formEl.addEventListener("submit", addTaskHandler)
