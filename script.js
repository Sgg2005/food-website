document.addEventListener('DOMContentLoaded', function () {
  // SEARCH BAR (leave as is)
  let searchForm = document.getElementById('search-form');
  let searchBtn = document.getElementById('search-btn');
  if (searchBtn && searchForm) {
    searchBtn.onclick = function(e) {
      e.preventDefault();
      searchForm.classList.toggle('active');
    };
  }

  // SHOPPING CART
  const cartBtn = document.getElementById('cart-btn'); // or querySelector('#cart-btn')
  const shoppingCart = document.querySelector('.shopping-cart');
  if (cartBtn && shoppingCart) {
    cartBtn.onclick = function(e) {
      e.preventDefault();
      shoppingCart.classList.toggle('active');
    };
  } else {
    if (!cartBtn) console.error('No element with id="cart-btn"');
    if (!shoppingCart) console.error('No element with class="shopping-cart"');
  }
});

let loginForm = document.getElementById('login-form');

document.querySelector('.login-btn').onclick = () =>
{
  loginForm.classList.toggle('active');
}
