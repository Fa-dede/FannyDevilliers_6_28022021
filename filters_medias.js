import { globalLikesCounters } from "./likes_counter.js";
import { addMedias } from "./medias_elements.js";
import {
  displayOpenedMenu,
  hideOpenedMenu,
  changeOrderTextInOpenedButtonFilter,
} from "./filters_button_shaping.js";

/**
 *
 * @param {array} medias
 * @param {array} filter
 * @param {array} photographers
 * @param {number} photographerID
 * @param {array} picturesArray
 */

const selectFilter = (
  medias,
  filter,
  photographers,
  photographerID,
  picturesArray
) => {
  medias = medias;
  let dateButtonSelected = true;
  let popularityButtonSelected = false;
  let titleButtonSelected = false;
  let mediasArrayFilteredByDates = [];
  let mediasArrayFilteredByPopularity = [];
  let mediasArrayFilteredByTitle = [];
  let buttonFilterClosed = document.querySelector("#button-filter");
  let buttonFilterOpened = document.querySelector("#button-filter-opened");

  displayOpenedMenu(buttonFilterClosed, buttonFilterOpened);

  let buttonDate = document.querySelector("#date-button");
  let buttonPopularity = document.querySelector("#popularity-button");
  let buttonTitle = document.querySelector("#title-button");

  /**FILTRER PAR DATE SOURIS / CLAVIER
   *
   * @param {e} e = button de la date
   */
  const filterByDate = (e) => {
    hideOpenedMenu(buttonFilterClosed, buttonFilterOpened);
    changeOrderTextInOpenedButtonFilter(e);

    if (!dateButtonSelected) {
      mediasArrayFilteredByDates = medias.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      filter = mediasArrayFilteredByDates;
      document.querySelector("#portfolio").innerHTML = "";
      addMedias(filter, photographers, photographerID);
    }
    dateButtonSelected = true;
    titleButtonSelected = false;
    popularityButtonSelected = false;
    new globalLikesCounters(filter, photographers, photographerID);
  };

  // EVENEMENT SOURIS
  buttonDate.addEventListener("click", (e) => {
    filterByDate(e);
  });

  //EVENEMENT CLAVIER
  buttonDate.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterByDate(e);
  });

  /** FILTRE PAR POPULARITE SOURIS / CLAVIER
   *
   * @param {e} e = button Popularité
   */
  const filterByPopularity = (e) => {
    hideOpenedMenu(buttonFilterClosed, buttonFilterOpened);
    changeOrderTextInOpenedButtonFilter(e);

    if (!popularityButtonSelected) {
      mediasArrayFilteredByPopularity = medias.sort((a, b) => {
        return a.likes - b.likes;
      });
      filter = mediasArrayFilteredByPopularity;
      if (filter === mediasArrayFilteredByPopularity) {
        filter = filter.reverse();
        document.querySelector("#portfolio").innerHTML = "";
        addMedias(filter, photographers, photographerID);
      }
      popularityButtonSelected = true;
      titleButtonSelected = false;
      dateButtonSelected = false;
      new globalLikesCounters(filter, photographers, photographerID);
    }
  };

  // EVENEMENT SOURIS
  buttonPopularity.addEventListener("click", (e) => {
    filterByPopularity(e);
  });

  // EVENEMENT CLAVIER
  buttonPopularity.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterByPopularity(e);
  });

  /** FILTRE PAR TITRE SOURIS / CLAVIER
   *
   * @param {e} e = button Titre
   */

  const filterByTitle = (e) => {
    hideOpenedMenu(buttonFilterClosed, buttonFilterOpened);
    changeOrderTextInOpenedButtonFilter(e);
    if (!titleButtonSelected) {
      mediasArrayFilteredByTitle = medias.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      filter = mediasArrayFilteredByTitle;
      if (filter === mediasArrayFilteredByTitle) {
        document.querySelector("#portfolio").innerHTML = "";
        addMedias(filter, photographers, photographerID);
      }
      titleButtonSelected = true;
      dateButtonSelected = false;
      popularityButtonSelected = false;
      new globalLikesCounters(filter, photographers, photographerID);
    }
  };

  buttonTitle.addEventListener("click", (e) => {
    filterByTitle(e);
  });

  buttonTitle.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterByTitle(e);
  });
};

export { selectFilter };
