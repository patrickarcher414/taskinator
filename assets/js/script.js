

var formEl = document.querySelector("#task-form")
var taskToDo = document.querySelector("#tasks-to-do")

var taskFormHandler = function(event) {
    event.preventDefault()
    var taskNameInput = document.querySelector("input[name='task-name']").value
    var taskTypeInput = document.querySelector("select[name='task-type']").value
    if (!taskNameInput || !taskTypeInput) {
        alert("Task name and Type must be entered.")
        return false;
    }
    formEl.reset()
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    createTaskEl(taskDataObj)
};

var createTaskEl = function(taskDataObj) {
    var taskItem = document.createElement("li")
    taskItem.className = "task-item"
    var taskInfoEl = document.createElement("div")
    taskInfoEl.className = "task-info"
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"
    taskItem.appendChild(taskInfoEl)
    taskToDo.appendChild(taskItem)
};

formEl.addEventListener("submit", taskFormHandler)
