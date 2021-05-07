import { form_validation } from "./modale_form_validation.js";

let contactContainer = document.getElementById("container-modale");

// Ouverture au clic
const openModale = (photographers, photographerID) => {
  let contact = document.querySelector("#contact");
  const openModale = () => {
    document.getElementById("container-modale").style.display = "flex";
    document.querySelector("#first").focus();

    //Ajoute le nom du photographe dans la modale
    photographers.forEach((photographer) => {
      if (photographer.id == photographerID) {
        document.querySelector(
          ".photographer-name"
        ).innerHTML = `${photographer.name}`;
      }
    });

    // Ajout de l'id dans l'input hidden afin d'effectuer une redirection correcte
    document.querySelector("#inputIdPhotographer").value = photographerID;
  };
  contact.addEventListener("click", (e) => {
    openModale();
  });

  contact.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      openModale();
    }
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

//Fermeture de la modale avec la Touche 'ESCAPE'
const closeModaleOnKeyUp = () => {
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      contactContainer.style.display = "none";
    }
  });
};

// comportement à l'intérieur de la modale de contact
const validate = (photographerID) => {
  let textOfSurname = "Prénom : non renseigné";
  let textOfName = "Nom : non renseigné";
  let textOfEmail = "Email : non renseigné";
  let textOfMessage = "Message : non renseigné";
  document.querySelector("#submit").addEventListener("click", (e) => {
    form_validation(e, textOfName, textOfSurname, textOfEmail, textOfMessage);
  });
  document.querySelector("#modal-form").addEventListener("submit", (e) => {
    form_validation(e, textOfName, textOfSurname, textOfEmail, textOfMessage);
  });
};

const modaleBehaviour = (photographers, photographerID) => {
  openModale(photographers, photographerID);
  closeModaleWithCross();
  closeModaleWithMouseout();
  closeModaleOnKeyUp();
  validate(photographerID);
};

export { modaleBehaviour };
