import { form_validation } from "./_modale_form_validation.js";

let contactContainer = document.getElementById("container-modale");

// Ouverture au clic
const openModale = () => {
  let contact = document.querySelector("#contact");
  contact.addEventListener("click", (e) => {
    document.getElementById("container-modale").style.display = "flex";
  });
};

// Fermeture avec la croix
const closeModaleWithCross = () => {
  document.getElementById("cross-close").addEventListener("click", (e) => {
    contactContainer.style.display = "none";
  });
};

// Fermeture au clic hors de la modale
const closeModaleWithMouseout = () => {
  contactContainer.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      return (contactContainer.style.display = "none");
    }
  });
};

// comportement à l'intérieur de la modale de contact
const validation = () => {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", form_validation); //fonction déclarée dans library_functions.js
};

const modaleBehaviour = () => {
  openModale();
  closeModaleWithCross();
  closeModaleWithMouseout();
  validation();
};

export { modaleBehaviour };
