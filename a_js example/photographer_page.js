import { f_valid } from "./_library_functions.js";

import {
  totalNumberOfLikesArray,
  heartArray,
  mediaArray,
  ligthbox,
  buttonDate,
  buttonTitle,
  buttonPopularity,
} from "./_library_const.js";

const init = async (idPhotographer) => {
  const photographer = await fetch("./datas.json")
    .then((response) => response.json())
    .then((datas) => {
      // PARTIE I

      // BOUCLE 1 : Boucle chaque photographe du JSON
      datas.photographers.forEach((photographer) => {
        //ENCART fixe de bas de page = prix / jour
        document.querySelector(".static-insert").innerHTML = `
        <span class="total-likes"></span>
        <span class ='price-per-day'>${photographer.price}€ / jour</span>
        `;

        // CONDITION : si paramètre INIT() === idPhotographer
        if (photographer.id === idPhotographer) {
          // MODALE : incrémentation du nom du photographe
          document.querySelector(".photographer-name").innerHTML =
            photographer.name;

          //PROFIL PHOTOGRAPHE : incrémente infos du photographe
          document.querySelector("#photographer-name").innerHTML =
            photographer.name;
          document.querySelector(
            ".location"
          ).innerHTML = `${photographer.city}, ${photographer.country}`;
          document.querySelector(".tagline").innerHTML = photographer.tagline;
          document.querySelector(
            "#container-portrait"
          ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Portraits/${photographer.portrait}" /> `;

          //BOUCLE 1.2 : incrémente une <li> en HTML à chaque tag de bouclé
          photographer.tags.forEach((tag) => {
            document.getElementById(
              "tag-list"
            ).innerHTML += `<li class="tags">${tag}</li> `;
          });
        } // FIN DE CONDITION  id photographer
      }); // FIN BOUCLE 1 - forEach((photographer)

      // PARTIE II

      // BOUCLE 2 : Boucle chaque média du JSON
      datas.media.forEach((media) => {
        // CONDITION :  filtre les médias si la valeur PhotographerId = à mon paramètre idPhotographer
        if (media.photographerId == idPhotographer) {
          //incrémente les médias dans un tableau Js
          mediaArray.push(media);
        }
      }); // FIN BOUCLE 2 / forEach((media)

      // METHODES FILTRES

      // Méthode POPULARITY qui permet de trier les médias du plus au moins Populaires directement dans le tableau mediaArray
      let mediaArrayFilteredByPopularity = [...mediaArray].sort((a, b) => {
        return a.likes - b.likes;
      });

      // Méthode DATE qui permet de trier mes dates de la plus ancienne à la plus récente directement dans le tableau mediaArray
      let mediaArrayFilteredByDates = [...mediaArray].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      // Méthode TITLE qui permet de trier mes medias par Titre
      let mediaArrayFilteredByTitle = [...mediaArray].sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });

      // FONCTION : incrémente les médias issu du mediaArray selon un filtre défini en argument
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

          //AJOUTER EN FAVORIS

          totalNumberOfLikesArray.push(media.likes);

          //BOUCLE : récupérer chaque coeur

          for (let i = 0; i < heartArray.length; i++) {
            let addedToFavorite; // Ne pas toucher

            // fonction qui remplit/vide le coeur et incrémente/décrémente les likes
            const fillHeart = (event) => {
              let selectedHeart = event.target;
              let selectedFooterLike = selectedHeart.parentNode;
              let selectedHeartCount = selectedFooterLike.querySelector(
                ".heart-txt"
              );

              if (!addedToFavorite) {
                addedToFavorite = true;
                // console.log("ajouté en favoris");
                selectedHeartCount.innerHTML =
                  parseInt(selectedHeartCount.innerHTML, 10) + 1;
                heartArray[i].style.fontWeight = "bold";
                likesPerPage++;
              } else {
                addedToFavorite = false;
                // console.log("retiré de la liste de favoris");
                selectedHeartCount.innerHTML =
                  parseInt(selectedHeartCount.innerHTML, 10) - 1;
                heartArray[i].style.fontWeight = "400";
                likesPerPage--;
              }
              // Mise à jour du décompte de like en bas de page
              document.querySelector(
                ".total-likes"
              ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
            };

            heartArray[i].addEventListener("click", fillHeart);
          } // FIN de boucle qui récupère chaque coeur
        }); //Fin forEach (media)
      }; // FIN fonction ADDMEDIAS

      addMedias(mediaArrayFilteredByPopularity.reverse());

      //FILTRES SWITCH : changement du tri au clic sur le menu des filtres

      const changeFilter = (target, filter) => {
        target.addEventListener("click", (e) => {
          document.querySelector("#portfolio").innerHTML = "";
          addMedias(filter);
        });
      };

      changeFilter(buttonDate, mediaArrayFilteredByDates);
      changeFilter(buttonTitle, mediaArrayFilteredByTitle);
      changeFilter(buttonPopularity, mediaArrayFilteredByPopularity);

      //FONCTION : incrémente le nombre total de likes par page
      const reducer = (acc, currentVal) => acc + currentVal;
      let likesPerPage = totalNumberOfLikesArray.reduce(reducer);
      document.querySelector(
        ".total-likes"
      ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;

      //LIGTHBOX

      //Clic sur les photos pour faire apparaitre la lightbox

      let picturesArray = document.getElementsByClassName("photo-picture");
      for (let i = 0; i < picturesArray.length; i++) {
        picturesArray[i].addEventListener("click", (e) => {
          ligthbox.style.display = "flex";
          let img = document.createElement("img");
          img.id = "image-clicked";
          img.src = picturesArray[i].src;
          while (ligthbox.firstChild) {
            ligthbox.removeChild(ligthbox.firstChild);
          }
          ligthbox.appendChild(img);
        });
      }
    }); // FIN .then()
}; // FIN INIT

init(82);

// PARTIE IV : MODALE DE CONTACT

// Ouverture de la modale de contact
let contact = document.querySelector("#contact");
contact.addEventListener("click", (e) => {
  document.getElementById("container-modale").style.display = "flex";
});

// Fermeture de la modale de contact

// Fermeture avec la croix
let contactContainer = document.getElementById("container-modale");
document.getElementById("cross-close").addEventListener("click", (e) => {
  contactContainer.style.display = "none";
});

// Fermeture au clic hors de la modale
contactContainer.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return (contactContainer.style.display = "none");
  }
});

// comportement à l'intérieur de la modale de contact
const submit = document.getElementById("submit");
submit.addEventListener("click", f_valid); //fonction déclarée dans library_functions.js
