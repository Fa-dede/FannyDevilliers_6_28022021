const inputs = {
    firstName: document.getElementById("first"),
    lastName: document.getElementById("last"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
  };

  const alerts = {
    firstName: document.getElementById("error-first-name"),
    lastName: document.getElementById("error-last-name"),
    email: document.getElementById("error-email"),
  };

  alerts.firstName
  alerts['firstName']
  isValid(inputs, "firstName", "Veuillez saisir votre nom");

 isValid(inputs, property, errorMessage) {
    if (inputs[property].validity.valueMissing) {
      e.preventDefault();
      alerts[property].innerText = errorMessage;
      alerts[property].email.style.color = "white";
      inputs[property].email.focus();
    }
  }