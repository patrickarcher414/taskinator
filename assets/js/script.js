

var formEl = document.querySelector("#task-form")
var taskToDo = document.querySelector("#tasks-to-do")

function addTaskHandler(event) {
    event.preventDefault()
    var taskNameInput = document.querySelector("input[name='task-name']").value
    var taskTypeInput = document.querySelector("select[name='task-type']").value
    var taskItem = document.createElement("li")
    taskItem.className = "task-item"

    var taskInfoEl = document.createElement("div")
    taskInfoEl.className = "task-info"
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"


    taskItem.appendChild(taskInfoEl)
    taskToDo.appendChild(taskItem)
}

formEl.addEventListener("submit", addTaskHandler)
