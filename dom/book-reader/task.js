const book = document.getElementById('book');

const fontSizeControls = Array.from(document.querySelectorAll('.book__control_font-size .font-size'));
const textColorControls = Array.from(document.querySelectorAll('.book__control_color .color'));
const bgColorControls = Array.from(document.querySelectorAll('.book__control_background .color'));

fontSizeControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizeControls.forEach(item => item.classList.remove('font-size_active'));
    control.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = control.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    }

    if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});

textColorControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    textColorControls.forEach(item => item.classList.remove('color_active'));
    control.classList.add('color_active');

    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    book.classList.add(`book_color-${control.dataset.textColor}`);
  });
});

bgColorControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    bgColorControls.forEach(item => item.classList.remove('color_active'));
    control.classList.add('color_active');

    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    book.classList.add(`book_bg-${control.dataset.bgColor}`);
  });
});