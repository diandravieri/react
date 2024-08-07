import { Todo } from './todo.js';

const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

const todos = [];

// Event listener untuk menambahkan todo baru
addTodoButton.addEventListener('click', () => {
  const todoText = todoInput.value;
  if (todoText) {
    const newTodo = new Todo(todoText);
    todos.push(newTodo);
    renderTodos();
    todoInput.value = '';
  }
});


const renderTodos = () => {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    li.addEventListener('click', () => {
      todo.toggleCompleted();
      renderTodos();
    });
    if (todo.completed) {
      li.style.textDecoration = 'line-through';
    }
    todoList.appendChild(li);
  });
};
