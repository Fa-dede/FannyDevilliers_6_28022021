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

const addMedias = (typeOfFilter) => {
  typeOfFilter.forEach((media) => {
    document.querySelector("#portfolio").innerHTML += `
      <figure class="photo">
          <img
              class="photo-picture"
              src="./img/${media.photographerId}/${media.image}"
              alt=""
              />

          <footer class="photo-footer">
          <span class="photo-footer__title">${media.title}</span>
          <span class="photo-footer__likes"
              ><span class="heart-txt">${media.likes}</span> <i class="hearts far fa-heart"></i
          ></span>
          <span class="photo-footer__price">${media.price} €</span>
          </footer>
      </figure>`;

    totalNumberOfLikesArray.push(media.likes);
  });
};

// // méthode qui permet de trier mes dates de la plus ancienne à la plus récente directement dans le tableau mediaArray
// let mediaArrayFilteredByDates = [...mediaArray].sort((a, b) => {
//   return new Date(a.date) - new Date(b.date);
// });

// // méthode qui permet de trier les médias du plus au moins Populaires directement dans le tableau mediaArray
// export let mediaArrayFilteredByPopularity = [...mediaArray].sort((a, b) => {
//   return a.likes - b.likes;
// });

// // méthode qui permet de trier les médias par ordre Alphabétique
// let mediaArrayFilteredByTitle = [...mediaArray].sort((a, b) => {
//   return a.title > b.title ? 1 : -1;
// });

export { f_valid, addMedias };
