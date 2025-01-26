let input = document.getElementById('task');
let button = document.getElementById('createBtn');
let list = document.getElementById('task-list');

button.addEventListener('click', () => {
    if (input.value.trim() === "") {
        alert('Please enter your task!');
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = input.value;

    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener('click', () => {
        let newValue = prompt("Edit your task:", li.firstChild.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            li.firstChild.textContent = newValue;
        }
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // let markCompleteBtn = document.createElement('input');
    // markCompleteBtn.type = "checkbox";

    // let label = document.createElement("label");
    // label.setAttribute("for", "task-checkbox");
    // label.textContent = "Mark as complete";

    // let taskContainer = document.createElement('div');
    // let taskText = document.createElement('span');
    // taskText.textContent = "This is a task";

    // taskContainer.appendChild(markCompleteBtn);
    // taskContainer.appendChild(label);
    // taskContainer.appendChild(taskText);
    // document.body.appendChild(taskContainer);

    // markCompleteBtn.addEventListener('click', () => {
    //     if (markCompleteBtn.checked) {
    //         taskText.textContent = "This is the task. (Completed!)"
    //     } else {
    //         taskText.textContent = "This is a task";
    //     }
    // });


    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";

});