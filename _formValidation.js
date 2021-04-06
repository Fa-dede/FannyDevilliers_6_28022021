const f_valid = (e) => {
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

  // Validation du Message
  if (inputs.message.validity.valueMissing) {
    e.preventDefault();
    document.getElementById("error-message").innerText =
      "Veuillez écrire votre message ";
    document.getElementById("error-message").style.color = "white";
    inputs.message.focus();
  }

  // Validation de l'email

  if (inputs.email.validity.valueMissing) {
    e.preventDefault();
    alerts.email.innerText = "Veuillez saisir votre email ";
    alerts.email.style.color = "white";
    inputs.email.focus();
  }

  if (
    !inputs.email.validity.valueMissing &&
    !inputs.email.value.match(regexEmail)
  ) {
    event.preventDefault();
    alerts.email.innerText = "Format incorrect";
    alerts.email.style.color = "white";
    inputs.email.focus();
  }
  if (inputs.email.value.match(regexEmail)) {
    alerts.email.innerText = "";
  }

  // Validation du Nom de Famille

  if (inputs.lastName.validity.valueMissing) {
    e.preventDefault();
    alerts.lastName.innerText = "Veuillez saisir votre nom ";
    alerts.lastName.style.color = "white";
    inputs.lastName.focus();
  }

  if (
    !inputs.lastName.validity.valueMissing &&
    !inputs.lastName.value.match(regexNames)
  ) {
    event.preventDefault();
    alerts.lastName.innerText = "Format incorrect";
    alerts.lastName.style.color = "white";
    inputs.lastName.focus();
  }
  if (inputs.lastName.value.match(regexNames)) {
    alerts.lastName.innerText = "";
  }
  // Validation du prénom

  if (inputs.firstName.validity.valueMissing) {
    e.preventDefault();
    alerts.firstName.innerText = "Veuillez saisir votre prénom ";
    alerts.firstName.style.color = "white";
    inputs.firstName.focus();
  }
  if (
    !inputs.firstName.validity.valueMissing &&
    !inputs.firstName.value.match(regexNames)
  ) {
    event.preventDefault();
    alerts.firstName.innerText = "Format incorrect";
    alerts.firstName.style.color = "white";
    inputs.firstName.focus();
  }
  if (inputs.firstName.value.match(regexNames)) {
    alerts.firstName.innerText = "";
  }
};

export { f_valid };
