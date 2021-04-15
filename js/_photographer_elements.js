/** AJOUTE LE PROFIL DES PHOTOGRAPHES SUR LA HOMEPAGE
 *
 * @param {array} photographer
 */
const addPhotographerCard = (photographer) => {
  photographer.forEach((photographer) => {
    let arrayTags = photographer.tags; // tableaux des tags des photographes
    let tag = arrayTags.map((tag) => `<li class ='tags'> #${tag} </li>`); // méthode qui permet d'isoler les éléments du tableau + de les incrémenter entre deux balises <li>
    let tags = `<ul class='tag-list'> ${tag.join("")} </ul>`;
    // méthode.join('') qui incrémente mes <li> dans une <ul>
    let mainContainer = document.querySelector(".main-container");
    mainContainer.innerHTML += `
            <article id="first-profile" class="container-profile">
              <a href="./photographer-page.html?id=${photographer.id}">
                <figure>
                  <img
                    class="container-profile__picture"
                    src="./img/Portraits/${photographer.portrait}"
                   alt="${photographer.name}'s profile"
                  />
                </figure>
      
                <h2 class="container-profile__name">${photographer.name}</h2>
              </a>
      
              <div class="container-profile__information">
                <h3 class="location">${photographer.city}, ${photographer.country}</h3>
                <h4 class="quote">${photographer.tagline}</h4>
                <h5 class="prices">${photographer.price} € / jour</h5>
              </div>
              ${tags}
            </article>`;
  });
};

/** AJOUTE L'ETIQUETTE DU PHOTOGRAPHE SUR PHOTOGRAPHER-PAGE
 *
 * @param {array} photographers
 * @param {number} photographerID
 */
const addPhotographerLabel = (photographers, photographerID) => {
  photographers.forEach((photographer) => {
    if (photographer.id == photographerID) {
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
        ).innerHTML += `<li class="tags">#${tag}</li> `;
      });
    }
  });
};

/** ENCART DE BAS DE PAGE (LIKES + PRICE)
 *
 * @param {array} medias
 * @param {array} photographers
 * @param {number} photographerID
 */
const addFooterInsert = (medias, photographers, photographerID) => {
  photographers.forEach((photographer) => {
    document.querySelector(".static-insert").innerHTML = `
        <span class="total-likes"></span>
        <span class ='price-per-day'>${photographer.price}€ / jour</span>
        `;
  });
  let totalNumberOfLikesArray = [];
  medias.forEach((media) => {
    if (media.photographerId == photographerID) {
      totalNumberOfLikesArray.push(media.likes);
      const reducer = (acc, currentVal) => acc + currentVal;
      let likesPerPage = totalNumberOfLikesArray.reduce(reducer);
      document.querySelector(
        ".total-likes"
      ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
    }
  });
};

export { addPhotographerCard, addPhotographerLabel, addFooterInsert };
