const products = Array.from(document.querySelectorAll('.product'));
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');

function updateCartVisibility() {
  if (cartProducts.children.length > 0) {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
}

function createCartProduct(id, imageSrc, count) {
  const cartProduct = document.createElement('div');
  cartProduct.className = 'cart__product';
  cartProduct.dataset.id = id;

  cartProduct.innerHTML = `
    <img class="cart__product-image" src="${imageSrc}">
    <div class="cart__product-count">${count}</div>
    <a href="#" class="cart__product-remove">Удалить</a>
  `;

  const removeButton = cartProduct.querySelector('.cart__product-remove');

  removeButton.addEventListener('click', (event) => {
    event.preventDefault();
    cartProduct.remove();
    updateCartVisibility();
  });

  return cartProduct;
}

products.forEach(product => {
  const dec = product.querySelector('.product__quantity-control_dec');
  const inc = product.querySelector('.product__quantity-control_inc');
  const value = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');

  dec.addEventListener('click', () => {
    const currentValue = Number(value.textContent);

    if (currentValue > 1) {
      value.textContent = currentValue - 1;
    }
  });

  inc.addEventListener('click', () => {
    value.textContent = Number(value.textContent) + 1;
  });

  addButton.addEventListener('click', () => {
    const id = product.dataset.id;
    const imageSrc = product.querySelector('.product__image').getAttribute('src');
    const count = Number(value.textContent);

    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    if (existingProduct) {
      const countElement = existingProduct.querySelector('.cart__product-count');
      countElement.textContent = Number(countElement.textContent) + count;
    } else {
      const cartProduct = createCartProduct(id, imageSrc, count);
      cartProducts.appendChild(cartProduct);
    }

    updateCartVisibility();
  });
});

updateCartVisibility();