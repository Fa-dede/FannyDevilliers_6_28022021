const form_validation = (e) => {
  let regexNames = /^[a-zA-ZéèëîïÉÊËÈÎÏ][a-zéèêëàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêëàçîï]+)?/;
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  /*
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
    */

  // Validation du Message
  if (inputs.message.validity.valueMissing) {
    e.preventDefault();
    document.getElementById("error-message").innerText =
      "Veuillez écrire votre message ";
    document.getElementById("error-message").style.color = "#1E1E1E";
    inputs.message.focus();
  }

  // Validation de l'email

  if (inputs.email.validity.valueMissing) {
    e.preventDefault();
    alerts.email.innerText = "Veuillez saisir votre email ";
    alerts.email.style.color = "#1E1E1E";
    inputs.email.focus();
  }

  if (
    !inputs.email.validity.valueMissing &&
    !inputs.email.value.match(regexEmail)
  ) {
    event.preventDefault();
    alerts.email.innerText = "Format incorrect";
    document.querySelector("#email").style.color = "#BA0619";
    document.querySelector("#email").style.fontWeight = "bold";
    inputs.email.focus();
  }
  if (inputs.email.value.match(regexEmail)) {
    alerts.email.innerText = "";
    document.querySelector("#email").style.color = "";
    document.querySelector("#email").style.fontWeight = "400";
  }

  // Validation du Nom de Famille

  if (inputs.lastName.validity.valueMissing) {
    e.preventDefault();
    alerts.lastName.innerText = "Veuillez saisir votre nom ";
    alerts.lastName.style.color = "#1E1E1E";
    inputs.lastName.focus();
  }

  if (
    !inputs.lastName.validity.valueMissing &&
    !inputs.lastName.value.match(regexNames)
  ) {
    event.preventDefault();
    alerts.lastName.innerText = "Format incorrect";
    alerts.lastName.style.color = "#1E1E1E";
    document.querySelector("#last").style.color = "#BA0619";
    document.querySelector("#last").style.fontWeight = "bold";
    inputs.lastName.focus();
  }
  if (inputs.lastName.value.match(regexNames)) {
    alerts.lastName.innerText = "";
    document.querySelector("#last").style.color = "#000";
    document.querySelector("#last").style.fontWeight = "400";
  }
  // Validation du prénom

  if (inputs.firstName.validity.valueMissing) {
    e.preventDefault();
    alerts.firstName.innerText = "Veuillez saisir votre prénom ";
    alerts.firstName.style.color = "#1E1E1E";
    inputs.firstName.focus();
  }
  if (
    !inputs.firstName.validity.valueMissing &&
    !inputs.firstName.value.match(regexNames)
  ) {
    event.preventDefault();
    alerts.firstName.innerText = "Format incorrect";
    document.querySelector("#first").style.color = "#BA0619";
    document.querySelector("#first").style.fontWeight = "bold";
    alerts.firstName.style.color = "#1E1E1E";
    inputs.firstName.focus();
  }
  if (inputs.firstName.value.match(regexNames)) {
    alerts.firstName.innerText = "";
    document.querySelector("#first").style.color = "#000";
    document.querySelector("#first").style.fontWeight = "400";
  }
};

export { form_validation };
