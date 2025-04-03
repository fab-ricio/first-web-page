// let cart = [];

// function addToCart(productId) {
//   const product = {
//     id: productId,
//     name: `Product ${productId}`,
//     price: 19.99,
//   };
//   cart.push(product);
//   alert(`${product.name} added to cart!`);
//   updateCart();
// }

// function updateCart() {
//   const cartItems = document.getElementById(`cart-items`);
//   if (cartItems) {
//     cartItems.innerHTML = "";
//   }
// }
let cart = [];

function addToCart(productId) {
  const product = { id: productId, name: `Product ${productId}`, price: 19.99 };
  cart.push(product);
  alert(`${product.name} added to cart!`);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(itemElement);
    });
  }
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}
