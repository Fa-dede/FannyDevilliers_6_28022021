// const Photographer = require("./PhotographersDatas");
// const firstPhotographer = new Photographer();

// async function init(idPhotographer) {
//   const photographer = await fetch("./datas.json")
//     .then((response) => response.json())
//     .then((datas) => {
//       datas.filter((item) => item.id == idPhotographer);
//     });

//   if (!photographer) {
//     //si erreur redirection vers une page annexe
//     window.location.href = "./index.html";
//   }

//   console.log(photographer);
// }

const queryString = window.location.search; //récupère infos de l'url
const urlParams = new URLSearchParams(queryString); //objet qui represente paramètre url
const idPhotographer = urlParams.get("id"); //récupère la valeur d'un paramètre
if (!idPhotographer) {
  //si erreur redirection vers une page annexe
  window.location.href = "./index.html";
}
console.log(idPhotographer);

//init(idPhotographer);

fetch("./datas.json")
  .then((response) => response.json())
  .then((datas) => {
    // Name
    let photographer = datas.photographers[0];
    let name = photographer.name;
    document.querySelector("#photographer-name").innerHTML = name;
    //Location
    let city = photographer.city;
    let country = photographer.country;
    document.querySelector(".location").innerHTML = `${city}, ${country}`;
    let tagline = photographer.tagline;
    document.querySelector(".tagline").innerHTML = tagline;
    //Picture
    let picture = photographer.portrait;
    document.querySelector(
      "#container-portrait"
    ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Mimi/${picture}" /> `;
    //Tags
    photographer.tags.forEach((elt) => {
      document.getElementById(
        "tag-list"
      ).innerHTML += `<li class="tags">${elt}</li> `;
    });

    // Déclaration de mes variables

    const totalNumberOfLikesArray = [];
    const arrayOfLikesAccordingToId = [];
    let heartCount;
    let addedToFavorite = false;
    const heartArray = document.getElementsByClassName("hearts");

    // Boucle qui permet d'avoir accès à tous les médias
    for (let i = 0; i < datas.media.length; i++) {
      const photographerId = datas.media[i].photographerId;
      let numOfId = 243;

      // Condition d'affichage des données en fonction de l'ID du photographe
      if (photographerId != numOfId) {
        // si id n'est pas égal à numId
        continue; // alors continue la boucle
      }

      const indexMedia = datas.media[i];

      // console.log(indexMedia.likes);

      //Nombre total de Likes sur la page
      let likes = indexMedia.likes;
      totalNumberOfLikesArray.push(likes); // ajoute les likes dans ce tableau
      arrayOfLikesAccordingToId.push(likes); // ajoute les likes dans ce tableau

      //Vignettes générées (photos + titre + prix + likes)
      document.querySelector("#portfolio").innerHTML += `
      <figure class="photo">
        <img
              class="photo-picture"
              src="./img/Mimi/${indexMedia.image}"
              alt=""
            />
        <footer class="photo-footer">
          <span class="photo-footer__title">${indexMedia.title}</span>
          <span class="photo-footer__likes"
            ><span class="heart-txt">${likes}</span> <i class="hearts far fa-heart"></i
          ></span>
          <span class="photo-footer__price">${indexMedia.price} €</span>
        </footer>
      </figure>`;
    }

    //Ajouter en Favoris
    for (heartCount = 0; heartCount < heartArray.length; heartCount++) {
      const heartIndex = heartArray[heartCount]; //ATTENTION affiche TOUS les coeurs de tous les médias...
      // console.log(heartIndex);

      const fillHeart = (event) => {
        const selectorHeartHtml = event.target; //
        const selectorPhotoFooterLikes = selectorHeartHtml.parentNode;
        const selectorHeartTxt = selectorPhotoFooterLikes.querySelector(
          ".heart-txt"
        );
        selectorHeartTxt.innerHTML =
          parseInt(selectorHeartTxt.innerHTML, 10) + 1;
        /*
        console.log(selectorPhotoFooterLikes);
        if (!addedToFavorite) {
          heartIndex.style.fontWeight = "bold";
          addedToFavorite = true;
          //console.log(likes);
          console.log("ajouté au favoris");
        } else {
          heartIndex.style.fontWeight = "normal";
          addedToFavorite = false;
          console.log("supprimé de la liste de favoris");
        }
        */
      };

      heartIndex.addEventListener("click", fillHeart);
    }

    // Encart fixe de bas de page LIKES / PRIX JOUR
    const reducer = (acc, currentVal) => acc + currentVal;

    const totalNumOfLikes = totalNumberOfLikesArray.reduce(reducer);

    let pricePerDay = photographer.price;

    document.querySelector(".static-insert").innerHTML = `
      <span class="total-likes">${totalNumOfLikes} <i class="fas fa-heart"></i></span>
      <span>${pricePerDay}€ / jour</span>
    `;
  });

// Ouverture/Fermeture du menu de Filtres / Popularité / Dates / Titre

const filterButton = document.getElementById("button-filter");
const filterButtonOpened = document.getElementById("button-filter-opened");

const openMenu = () => {
  filterButton.style.display = "none";
  filterButtonOpened.style.display = "unset";
  event.addEventListener;
};

const closeMenu = () => {
  filterButtonOpened.style.display = "none";
  filterButton.style.display = "unset";
  event.addEventListener;
};

filterButton.addEventListener("mouseover", openMenu);
filterButtonOpened.addEventListener("mouseleave", closeMenu);

// Ligthbox

const ligthbox = document.createElement("div");
ligthbox.id = "ligthbox";
document.body.appendChild(ligthbox);

const images = document.getElementsByClassName("photo-picture");

// console.log(images);

// images.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     const img = document.createElement("img");
//     img.src = image.src;
//     ligthbox.appendChild(img);
//   });
// });
