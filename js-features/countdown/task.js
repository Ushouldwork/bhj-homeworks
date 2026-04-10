const timer = document.getElementById('timer');

const intervalId = setInterval(() => {
  timer.textContent = Number(timer.textContent) - 1;

  if (Number(timer.textContent) === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);