const init = async (idPhotographer) => {
  const photographer = await fetch("./datas.json")
    .then((response) => response.json())
    .then((datas) => {
      datas.photographers.forEach((photographer) => {
        // Début de l'encart fixe de bas de page (dans la boucle photographer = boucle 1)

        document.querySelector(".static-insert").innerHTML = `
        <span class="total-likes"></span>
        <span class ='price-per-day'>${photographer.price}€ / jour</span>
        `;

        // Condition1 : si l'id du photographe est le même que l'id passé en paramètre de la function init()

        if (photographer.id === idPhotographer) {
          //Incrémente le nom du photographe dans la modale
          document.querySelector(".photographer-name").innerHTML =
            photographer.name;

          //Incrémente les infos selon la condition précédente

          document.querySelector("#photographer-name").innerHTML =
            photographer.name;
          document.querySelector(
            ".location"
          ).innerHTML = `${photographer.city}, ${photographer.country}`;
          document.querySelector(".tagline").innerHTML = photographer.tagline;
          document.querySelector(
            "#container-portrait"
          ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Portraits/${photographer.portrait}" /> `;

          //Boucle 1.2 qui incrémente une <li> en HTML à chaque tag de bouclé
          photographer.tags.forEach((tag) => {
            document.getElementById(
              "tag-list"
            ).innerHTML += `<li class="tags">${tag}</li> `;
          });
        } //Fin de ma Condition1 : if (photographer.id === idPhotographer)
      }); //Fin de la Boucle1 : datas.photographers.forEach((photographer) =>

      let totalNumberOfLikesArray = [];
      let heartArray = document.getElementsByClassName("hearts");
      let mediaArray = [];
      let dateArray = [];
      let popularityArray = [];

      //Boucle2 : boucle les médias
      datas.media.forEach((media) => {
        // condition 2.1 qui filtre les médias si la valeur PhotographerId = à mon paramètre idPhotographer
        if (media.photographerId == idPhotographer) {
          //incrémente les médias dans un tableau Js
          mediaArray.push(media);
          dateArray.push(media.date);
          popularityArray.push(media.likes);
        }
      });

      // méthode qui permet de trier mes dates de la plus récente à la plus  ancienne
      let dateRecentArray = dateArray.sort().reverse();
      console.log(dateRecentArray);
      console.log(popularityArray);

      // boucle sur le tableau des dates
      dateRecentArray.forEach((date) => {
        // boucle interne au tableau des dates qui boucle chaque média
        mediaArray.forEach((media) => {
          //condition qui permet d'afficher mes médias en suivant l'ordre du tableau de date
          if (media.date === date) {
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
          }
        });
      });

      // Boucle 3 : boucle les média du tableau créé ci-dessus pour les afficher

      //Fin de Boucle 3 : mediaArray.forEach()

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

      //Décompte des likes dans encart de bas de page

      const reducer = (acc, currentVal) => acc + currentVal;
      let likesPerPage = totalNumberOfLikesArray.reduce(reducer);
      document.querySelector(
        ".total-likes"
      ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;

      //Ajouter en favoris

      //Boucle 3 : pour atteindre chaque coeur

      for (let h = 0; h < heartArray.length; h++) {
        let addedToFavorite = false; // doit se trouver dans la boucle des coeurs

        // fonction qui remplit/vide le coeur et incrémente/décrémente les likes (Possibilité de stocker la fonction dans un fichier js à part )

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
            heartArray[h].style.fontWeight = "bold";
            likesPerPage++;
          } else {
            addedToFavorite = false;
            // console.log("retiré de la liste de favoris");
            selectedHeartCount.innerHTML =
              parseInt(selectedHeartCount.innerHTML, 10) - 1;
            heartArray[h].style.fontWeight = "400";
            likesPerPage--;
          }
          // Mise à jour du décompte de like en bas de page
          document.querySelector(
            ".total-likes"
          ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
        };

        heartArray[h].addEventListener("click", fillHeart);
      }
    }); //Fin du 2eme .then()
}; //Fin de la function asynchrone init()

init(82);

let ligthbox = document.createElement("div");
ligthbox.id = "ligthbox";
document.body.appendChild(ligthbox);
ligthbox.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return (ligthbox.style.display = "none");
  }
});

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

import { f_valid } from "./_formValidation.js";

const submit = document.getElementById("submit");
submit.addEventListener("click", f_valid);

// Filtrage des médias
