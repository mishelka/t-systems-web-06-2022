//$(document).ready(function () {
//window.onload(
$(() => {
    $("#task").blur(() => {
        validateForm();
    });
    $('#task').focus();
    loadTasksFromStorage();
    showTasks();

});

let tasks = [];
let count = 0;

function validateForm() {
    return validate(document.taskForm.task);
}

function doSubmit(event) {
    event.preventDefault();
    const valid = validateForm();
    if(valid) {
        //const ul = document.getElementById("tasksList");
        // const ul = $("#tasksList");
        tasks.push(document.taskForm.task.value);
        storeTasksIntoStorage();
        showTasks();
    }
    return false;
}

function reset() {
    document.taskForm.reset();
    // document.taskForm.task.value = "";
}

function showTasks() {
    //const ul = document.getElementById("tasksList");
    //ul.innerHTML = "";
    $("#tasksList").html("");
    for(const t of tasks) {
        //const li = document.createElement("li");
        //li.innerHTML = tasks[t];
        //$("#tasksList").appendChild(li);
        $("#tasksList").prepend($("<li>").html(t));
    }
}

function displayErrorMsg(id, display) {
    //document.getElementById("errorMsg").setAttribute("class", (display ? "red" : "hidden"));
    //$("#errorMsg").attr("class", (display ? "red" : "hidden"));
    const errorElem = $("#taskErrors > #" + id);
    if(display) errorElem.show(); else errorElem.hide();
}

function validate(inputElem) {
    if(!inputElem) {
        displayErrorMsg("required", false);
        displayErrorMsg("minLength", false);
        displayErrorMsg("maxLength", false);
        return true;
    }

    let valid = true;
    if(inputElem.required !== null) {
        const isValue = inputElem.value.length > 0;
        displayErrorMsg("required", !isValue);
        valid &&= isValue;
        if(!isValue) {
            displayErrorMsg("minLength", false);
            displayErrorMsg("maxLength", false);
            return;
        }
    }
    if(inputElem.minLength !== null) {
        const isMin = inputElem.value.length >= inputElem.minLength;
        displayErrorMsg("minLength", !isMin);
        valid &&= isMin;
    }
    if(inputElem.maxLength !== null) {
        const isMax = inputElem.value.length <= inputElem.maxLength;
        displayErrorMsg("maxLength", !isMax);
        valid &&= isMax;
    }
    return valid;
}

function storeTasksIntoStorage() {
    localStorage['tasks'] = JSON.stringify(tasks);
}

function loadTasksFromStorage() {
    const stored = localStorage['tasks'];
    if (stored) tasks = JSON.parse(stored);
    else tasks = [];
}

//used only for testing / can be used to delete all tasks
function deleteStorage() {
    localStorage['tasks'] = "";
}