const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');


function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("Can't add empty tasks!");
            return;
        }

    const li= document.createElement('li');
    li.textContent= taskText

    li.addEventListener('click', function(){ 
    li.classList.toggle("completed")
})

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete');

    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation()
        li.remove
    })

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

}

addTaskButton.addEventListener ('click', addTask );