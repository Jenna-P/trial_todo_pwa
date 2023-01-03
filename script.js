
      const form = document.getElementById('todo-form');
      const input = document.getElementById('todo-input');
      const todoList = document.getElementById('todo-list');

     form.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoText = input.value.trim();
  if (todoText === '') return;

  const todo = document.createElement('li');
  todo.innerHTML = `
    <input type="checkbox">
    <span>${todoText}</span>
    <button class="delete-button">Delete</button>
  `;

  const checkbox = todo.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
  const span = todo.querySelector('span');
  span.classList.toggle('completed');
  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }
});
  


  const deleteButton = todo.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todo);
  });

  todoList.appendChild(todo);
  input.value = '';
});
