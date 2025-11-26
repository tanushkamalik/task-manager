function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let list = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);
    input.value = "";
}
