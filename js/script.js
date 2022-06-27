'use strict';

const minusArea = document.querySelector('.minus-area');
const plusArea = document.querySelector('.plus-area');
const amountBtn = document.querySelector('.amount-btn');
const quantity = document.querySelector('.quantity');
const cartIcon = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const itemPrice = document.querySelector('.item-price');
const items = document.querySelector('.items');
const checkoutPrice = document.querySelector('.checkout-price');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartNumber = document.querySelector('.cart-number');
const newPrice = document.querySelector('.new-price');
const product = document.querySelector('.product');
const emptyCart = document.querySelector('.empty-cart');
const deleteBtn = document.querySelector('.delete-icon');
const checkoutBtn = document.querySelector('.checkout-btn');

deleteBtn.addEventListener('click', cartDelete);
minusArea.addEventListener('click', minusItem);
plusArea.addEventListener('click', plusItem);
cartIcon.addEventListener('click', openCart);
addToCartBtn.addEventListener('click', addToCart);
window.addEventListener('click', closeCart);

function cartDelete() {
  itemPrice.textContent = ``;
  items.textContent = ``;
  checkoutPrice.textContent = ``;
  product.classList.add('d-none');
  emptyCart.classList.remove('d-none');
  cartNumber.textContent = ``;
  cartNumber.classList.add('d-none');
  checkoutBtn.classList.add('d-none');
}

function addToCart() {
  if (Number(quantity.textContent) > 0 && Number(quantity.textContent) < 100) {
    cartNumber.textContent = `${Number(quantity.textContent)}`;
    cartNumber.classList.remove('d-none');
    itemPrice.textContent = `${newPrice.textContent}`;
    items.textContent = `${quantity.textContent}`;
    checkoutPrice.textContent = `$${
      Number(quantity.textContent) * Number(newPrice.textContent.slice(1))
    }`;
    emptyCart.classList.add('d-none');
    product.classList.remove('d-none');
    checkoutBtn.classList.remove('d-none');
    quantity.textContent = 0;
  }
}

function minusItem() {
  if (Number(quantity.textContent) > 0) {
    quantity.textContent = `${Number(quantity.textContent) - 1}`;
  }
}

function plusItem() {
  quantity.textContent = `${Number(quantity.textContent) + 1}`;
}

function openCart() {
  cart.classList.toggle('d-none');
}

function closeCart(e) {
  if (cart.contains(e.target) || cartIcon.contains(e.target)) {
  } else {
    cart.classList.add('d-none');
  }
}
