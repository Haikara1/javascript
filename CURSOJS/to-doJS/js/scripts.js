// Função que adiciona tarefa
function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle) {

        // Clona template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        // Adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adiciona tarefa na lista
        const list = document.querySelector('#tasks-list')

        list.appendChild(newTask)

        // adicionar evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        })

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        })

        // limpar texto
        document.querySelector('#task-title').value = "";
    }
}

// funcao de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true)
}

// funcao de completar a tarefa
function completeTask(task) {

    const taskComplete = task.parentNode;
    taskComplete.classList.toggle('done');
}

// Evento de adicionar tarefa
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask()
})