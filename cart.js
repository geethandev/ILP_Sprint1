document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  const summaryContainer = document.getElementById("summary");
  const messageContainer = document.getElementById("message");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    summaryContainer.innerHTML = "";
  } else {
    renderCartItems(cart);
    renderSummary(cart);
  }

  function renderCartItems(cart) {
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";

      const itemName = document.createElement("p");
      itemName.textContent = item.name;
      cartItemDiv.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = item.price;
      cartItemDiv.appendChild(itemPrice);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeFromCart(index);
      cartItemDiv.appendChild(removeButton);

      cartContainer.appendChild(cartItemDiv);
    });
  }

  function renderSummary(cart) {
    const total = cart.reduce(
      (sum, item) => sum + parseFloat(item.price.substring(1)),
      0
    );
    summaryContainer.innerHTML = `
            <h2>Summary</h2>
            <p>Total: $${total.toFixed(2)}</p>
            <button onclick="checkout()">Checkout</button>
        `;
  }

  window.removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      summaryContainer.innerHTML = "";
    } else {
      renderCartItems(cart);
      renderSummary(cart);
    }
    updateCartLink();
  };

  window.checkout = function () {
    // Assuming checkout process is successful
    messageContainer.textContent = "Order Placed Successfully";
    localStorage.removeItem("cart");
    cartContainer.innerHTML = "";
    summaryContainer.innerHTML = "";
    updateCartLink();
  };

  function updateCartLink() {
    const cartLink = document.querySelector('.navbar a[href="cart.html"]');
    cartLink.textContent = `Cart (${cart.length})`;
  }

  updateCartLink(); // Initial call to set the cart link text
});
