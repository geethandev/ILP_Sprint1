function register() {
  const customerName = document.getElementById("customerName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const contactNumber = document.getElementById("contactNumber").value;

  // Clear previous errors
  const errorElements = document.getElementsByClassName("error");
  while (errorElements[0]) {
    errorElements[0].parentNode.removeChild(errorElements[0]);
  }

  // Validation
  let valid = true;

  if (!/^[a-zA-Z ]+$/.test(customerName)) {
    displayError("customerName", "Customer Name must have alphabets only.");
    valid = false;
  }
  if (customerName === "") {
    displayError("customerName", "Customer Name must not be blank or null.");
    valid = false;
  }
  if (!email.includes("@")) {
    displayError("email", "Email id not valid.");
    valid = false;
  }
  if (email === "") {
    displayError("email", "Email must not be blank or null.");
    valid = false;
  }
  if (
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(password)
  ) {
    displayError("password", "Password is not matching the criteria.");
    valid = false;
  }
  if (password === "") {
    displayError("password", "Password must not be blank or null.");
    valid = false;
  }
  if (address === "") {
    displayError("address", "Address must not be blank or null.");
    valid = false;
  }
  if (!/^\d{10}$/.test(contactNumber)) {
    displayError("contactNumber", "Contact number must be 10 digits.");
    valid = false;
  }
  if (contactNumber === "") {
    displayError("contactNumber", "Contact Number must not be blank or null.");
    valid = false;
  }

  if (valid) {
    // Simulate successful registration and generate Customer ID
    const customerId = Math.floor(Math.random() * 1000000);

    // Show acknowledgment screen
    document.getElementById("acknowledgment").style.display = "block";
    document.getElementById("customerId").textContent = customerId;
    document.getElementById("ackCustomerName").textContent = customerName;
    document.getElementById("ackEmail").textContent = email;

    // Save registration details to "Registration Table" (simulated here)
    // In a real scenario, you would send this data to a server and save it in a database
  }
}

function displayError(elementId, message) {
  const element = document.getElementById(elementId);
  const error = document.createElement("span");
  error.className = "error";
  error.textContent = message;
  element.parentNode.insertBefore(error, element.nextSibling);
}
