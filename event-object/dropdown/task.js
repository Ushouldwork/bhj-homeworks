const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

dropdownValues.forEach(value => {
  value.addEventListener('click', function () {
    const list = this.nextElementSibling;
    list.classList.toggle('dropdown__list_active');
  });
});

const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const dropdown = this.closest('.dropdown');
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    value.textContent = this.textContent.trim();
    list.classList.remove('dropdown__list_active');
  });
});