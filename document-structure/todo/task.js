const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const value = input.value.trim();

    if (value === '') {
      return;
    }

    const task = document.createElement('div');
    task.className = 'task';

    task.innerHTML = `
      <div class="task__title">${value}</div>
      <a href="#" class="task__remove">&times;</a>
    `;

    const removeBtn = task.querySelector('.task__remove');

    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      task.remove();
    });

    tasksList.appendChild(task);
    input.value = '';
  }
});