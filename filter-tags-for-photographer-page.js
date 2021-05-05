import { addMedias } from "./medias_elements.js";
import { globalLikesCounters } from "./likes_counter.js";
import { selectFilter } from "./filters_medias.js";

const filterPicturesByTag = (filter, photographers, photographerID) => {
  let tagsArrayOfEachPhotographer = [...document.querySelectorAll(".tags")];
  let mediasArray = filter;
  selectFilter(filter, photographers, photographerID);

  /**
   * AJOUTE CLASSE "ACTIVE" AU TAG #ALL DES QUE LA PAGE S'OUVRE
   */
  const addActiveOnOnload = () => {
    tagsArrayOfEachPhotographer.forEach((button) => {
      if (button.innerHTML === "#all") {
        button.classList.add("active");
      }
    });
  };

  addActiveOnOnload();

  let mediaArrayfilterByTag = [];
  mediaArrayfilterByTag.splice(0, mediaArrayfilterByTag.length); // vide le tableau à chaque clic

  tagsArrayOfEachPhotographer.forEach((button) => {
    button.addEventListener("click", (e) => {
      filterMediaByTagName(e, button);
    });
    button.addEventListener("keyup", (e) => {
      if (e.key === "Enter") filterMediaByTagName(e, button);
    });
  });

  // FONCTION PRINCIPALE QUI FILTRE LES MEDIAS PAR TAG NAME

  const filterMediaByTagName = (e, button) => {
    tagButtonBehavior(e);
    mediaArrayfilterByTag.splice(0, mediaArrayfilterByTag.length); // vide le tableau à chaque clic
    let tagName = e.target.innerHTML.replace("#", "");
    pushMediaByTag(tagName, button);
    // new globalLikesCounters(filter, photographers, photographerID);
  };

  /**
   * INCREMENTE TABLEAUX DE MEDIAS EN FONCTION DU TAG SELECTIONNE
   *
   * @param {string} tagName / NOM DU TAG SELECTIONNE
   * @param {object} button / BOUTON SELECTIONNE
   */

  const pushMediaByTag = (tagName, button) => {
    mediasArray.forEach((media) => {
      if (media.photographerId == photographerID) {
        if (media.tags == tagName) {
          mediaArrayfilterByTag.push(media);
        } else if (button.innerHTML == "#all") {
          mediaArrayfilterByTag.push(media);
        }
        filter = mediaArrayfilterByTag;
        document.querySelector("#portfolio").innerHTML = "";
        addMedias(filter, photographers, photographerID);
        // new globalLikesCounters(filter, photographers, photographerID);
      }
    });
  };

  const tagButtonBehavior = (e) => {
    tagsArrayOfEachPhotographer.forEach((tagButton) => {
      tagButton.classList.remove("active");
    });
    e.target.classList.add("active");
  };
};
export { filterPicturesByTag };
