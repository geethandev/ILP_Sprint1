function login() {
  const customerId = document.getElementById("customerId").value;
  const password = document.getElementById("password").value;

  // Clear previous errors
  const errorElements = document.getElementsByClassName("error");
  while (errorElements[0]) {
    errorElements[0].parentNode.removeChild(errorElements[0]);
  }

  // Validation
  let valid = true;

  if (customerId === "") {
    displayError("customerId", "ID not valid.");
    valid = false;
  }
  if (password === "") {
    displayError("password", "Password not valid.");
    valid = false;
  }

  if (valid) {
    // Simulate login logic
    const storedCustomerId = "123456"; // Example customer ID, should be fetched from the database
    const storedPassword = "Password123!"; // Example password, should be fetched from the database

    if (customerId !== storedCustomerId && password !== storedPassword) {
      displayError("customerId", "ID/password not valid.");
      displayError("password", "ID/password not valid.");
    } else if (customerId !== storedCustomerId) {
      displayError("customerId", "ID not valid.");
    } else if (password !== storedPassword) {
      displayError("password", "Password not valid.");
    } else {
      // Redirect to the home page of "Grocery Store"
      window.location.href = "home.html"; // Change to the actual home page URL
    }
  }
}

function displayError(elementId, message) {
  const element = document.getElementById(elementId);
  const error = document.createElement("span");
  error.className = "error";
  error.textContent = message;
  element.parentNode.insertBefore(error, element.nextSibling);
}
