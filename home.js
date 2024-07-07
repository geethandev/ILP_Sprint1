document.addEventListener("DOMContentLoaded", function () {
  const customerName = "John Doe"; // This should be dynamically fetched from the user's profile
  document.getElementById("customerName").textContent = customerName;

  const products = [
    { name: "Apple", price: "$1.00", id: 1 },
    { name: "Banana", price: "$0.50", id: 2 },
    { name: "Carrot", price: "$0.30", id: 3 },
    { name: "Bread", price: "$2.00", id: 4 },
    // Add more products as needed
  ];

  const productsContainer = document.getElementById("products");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ${product.price}`;
    productDiv.appendChild(productPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.onclick = () => addToCart(product);
    productDiv.appendChild(addToCartButton);

    productsContainer.appendChild(productDiv);
  });

  function addToCart(product) {
    // Assuming we have a cart array to keep track of added products
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Display notification
    const cartNotification = document.getElementById("cartNotification");
    cartNotification.textContent = `${product.name} has been added to your cart!`;
    cartNotification.style.display = "block";

    // Hide notification after 3 seconds
    setTimeout(() => {
      cartNotification.style.display = "none";
    }, 3000);

    // Update cart link to reflect the number of items
    updateCartLink();
  }

  function updateCartLink() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLink = document.querySelector('.navbar a[href="cart.html"]');
    cartLink.textContent = `Cart (${cart.length})`;
  }

  updateCartLink(); // Initial call to set the cart link text
});
