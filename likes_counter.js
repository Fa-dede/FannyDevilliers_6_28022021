/** FONCTION QUI COMPREND ENCART FIXE COMPTEUR DE LIKES + AJOUT/SUPPR DES FAVORIS
 *
 * @param {array} medias
 * @param {array} photographers
 * @param {number} photographerID
 */

class globalLikesCounters {
  constructor(medias, photographers, photographerID) {
    this.medias = medias;
    this.photographers = photographers;
    this.photographerID = photographerID;
    this.heartArray = document.getElementsByClassName("hearts");
    this.arrayOfHearts = [...this.heartArray];
    this.totalNumberOfLikesArray = [];
    this.likesPerPage = 0;
    this.addStaticInsertInfos(
      this.medias,
      this.photographerID,
      this.totalNumberOfLikesArray,
      this.photographers
    );
    this.addAsFavorite(this.arrayOfHearts);
  }

  /** AJOUTE ENCART FIXE DE BAS DE PAGE
   *
   * @param {array} medias
   * @param {number} photographerID
   * @param {array} totalNumberOfLikesArray
   * @param {array} photographers
   */
  addStaticInsertInfos(
    medias,
    photographerID,
    totalNumberOfLikesArray,
    photographers
  ) {
    medias.forEach((media) => {
      if (media.photographerId == photographerID) {
        totalNumberOfLikesArray.push(media.likes);
        const reducer = (acc, currentVal) => acc + currentVal;
        this.likesPerPage = parseInt(
          totalNumberOfLikesArray.reduce(reducer),
          10
        );
      }

      photographers.forEach((photographer) => {
        document.querySelector(".static-insert").innerHTML = `
          <span class="total-likes"></span>
          <span class ='price-per-day'>${photographer.price}€ / jour</span>
          `;
        document.querySelector(
          ".total-likes"
        ).innerHTML = `${this.likesPerPage} <i class="fas fa-heart"></i>`;
      });
    });
  }

  /** AJOUT/SUPPR DES FAVORIS + INCREMENTE LE TOTAL DES LIKES PAR PAGE
   *
   * @param {array} arrayOfHearts
   */
  addAsFavorite(arrayOfHearts) {
    let likesPerPage = this.likesPerPage; // déclare la variable pour qu'elle fasse référence à this.likesPerPages

    arrayOfHearts.forEach((heart) => {
      let addedToFavorite = false;

      const fillHeart = (event) => {
        let selectedHeart = event.target;
        let selectedFooterLike = selectedHeart.parentNode;
        let selectedHeartCount = selectedFooterLike.querySelector(".heart-txt");
        if (!addedToFavorite) {
          addedToFavorite = true;
          selectedHeartCount.innerHTML =
            parseInt(selectedHeartCount.innerHTML, 10) + 1;
          heart.style.fontWeight = "bold";
          likesPerPage++;

          //MAJ DE L'ENCART ++
          document.querySelector(
            ".total-likes"
          ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
        } else {
          addedToFavorite = false;
          selectedHeartCount.innerHTML =
            parseInt(selectedHeartCount.innerHTML, 10) - 1;
          heart.style.fontWeight = "400";
          likesPerPage--;

          //MAJ DE L'ENCART --
          document.querySelector(
            ".total-likes"
          ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
        }
      };

      heart.addEventListener("click", (e) => {
        fillHeart(e);
      });
      heart.addEventListener("keyup", (e) => {
        if (e.key === "Enter") fillHeart(e);
      });
    });
  }
}

export { globalLikesCounters };
