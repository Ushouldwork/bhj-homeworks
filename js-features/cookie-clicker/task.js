const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let isBig = false;

cookie.onclick = () => {
  // увеличиваем счётчик
  counter.textContent = Number(counter.textContent) + 1;

  // меняем размер
  if (isBig) {
    cookie.width = 200;
  } else {
    cookie.width = 250;
  }

  isBig = !isBig;
};