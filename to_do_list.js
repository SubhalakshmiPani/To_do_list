
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;

    // Add remove option
    li.onclick = () => li.remove();
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
