// Array of Objects
const todos = [
    {
        todo: "This is a work to be done.",
        done: false
    },
    {
        todo: "This is a work to be done 2.",
        done: false
    },
    {
        todo: "This work is already done.",
        done: true
    }
];

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const todoSave = document.getElementById("todo-save");

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, i) => {
        const newTodo = `
            <div class='flex bg-teal-100 p-2 rounded gap-1 justify-between ${todo.done ? 'opacity-50' : ''}'>
                <p class='${todo.done ? 'line-through' : ''}'>${todo.todo}</p>
                <div class='flex gap-1'>
                    <button 
                        data-index="${i}" 
                        class='done-btn bg-cyan-600 text-cyan-100 w-6 h-6 rounded hover:bg-cyan-700'
                        ${todo.done ? 'disabled' : ''}
                    >
                        ✓
                    </button>
                    <button 
                        data-index="${i}" 
                        class='delete-btn bg-rose-600 text-rose-100 w-6 h-6 rounded hover:bg-rose-700'
                    >
                        ×
                    </button>
                </div>
            </div>
        `;
        todoList.insertAdjacentHTML('beforeend', newTodo);
    });

    // Add event listeners to new buttons
    attachButtonListeners();
}

function attachButtonListeners() {
    // Delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });

    // Done buttons
    document.querySelectorAll('.done-btn').forEach(button => {
        button.addEventListener('click', handleDone);
    });
}

function handleTodoSave(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (!todoText) {
        return; // Don't add empty todos
    }

    todos.push({
        todo: todoText,
        done: false
    });

    renderTodos();
    todoInput.value = "";
}

function handleDelete(e) {
    const index = Number(e.target.dataset.index);
    todos.splice(index, 1);
    renderTodos();
}

function handleDone(e) {
    const index = Number(e.target.dataset.index);
    todos[index].done = true;
    renderTodos();
}

// Event listener for save button
todoSave.addEventListener("click", handleTodoSave);

// Initial render
renderTodos();