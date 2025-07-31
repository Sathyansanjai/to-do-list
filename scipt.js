
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");

    // Create a container to hold tasks
    const taskList = document.createElement("ul");
    taskList.className = "list-group mt-3";
    document.querySelector(".form-group").appendChild(taskList);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const taskText = input.value.trim();
      if (taskText === "") return;

      const taskItem = document.createElement("li");
      taskItem.className = "list-group-item d-flex justify-content-between align-items-center";

      const taskLabel = document.createElement("span");
      taskLabel.innerText = taskText;

      const btnGroup = document.createElement("div");

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.className = "btn btn-outline-success btn-sm me-2 ";
      editBtn.onclick = () => {
        const newText = prompt("Edit task:", taskLabel.innerText);
        if (newText !== null && newText.trim() !== "") {
          taskLabel.innerText = newText.trim();
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "btn btn-outline-danger btn-sm";
      deleteBtn.onclick = () => taskItem.remove();

      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      taskItem.appendChild(taskLabel);
      taskItem.appendChild(btnGroup);
      taskList.appendChild(taskItem);

      input.value = ""; 
    });
  });
