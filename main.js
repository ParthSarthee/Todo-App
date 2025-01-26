// Array of Objects

var todos = [
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
]

const todoList = document.getElementById("todo-list");

function renderTodos() {
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let newTodo = `
                    <div class='flex bg-teal-100 p-2 rounded gap-1 justify-between'>
                    <p>${todos[i].todo}</p>
                    <div class='flex gap-1'>
                        <button class='bg-cyan-600 text-cyan-100 w-6 h-6 rounded'>O</button>
                        <button class='bg-rose-600 text-rose-100 w-6 h-6 rounded'>X</button>
                    </div>
                    </div>
                    `

        todoList.innerHTML = todoList.innerHTML + newTodo;
    }
}

const todoInput = document.getElementById("todo-input");
const todoSave = document.getElementById("todo-save");


function handleTodoSave(e) {
    e.preventDefault();
    todos.push({
        todo: todoInput.value,
        done: false
    })
    renderTodos();
    todoInput.value = "";
}

todoSave.addEventListener("click", handleTodoSave);

renderTodos();







