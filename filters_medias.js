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

const selectFilter = (medias, filter, photographers, photographerID) => {
  medias = medias;
  let dateButtonSelected = true;
  let popularityButtonSelected = false;
  let titleButtonSelected = false;
  let mediasArrayFilteredByDates = [];
  let mediasArrayFilteredByPopularity = [];
  let mediasArrayFilteredByTitle = [];
  let buttonFilterClosed = document.querySelector("#button-filter");
  let buttonFilterOpened = document.querySelector("#button-filter-opened");
  let tagsArrayOfEachPhotographer = [...document.querySelectorAll(".tags")];
  let buttonFilterIsOpened = false;
  let filterList = document.querySelector("#ul-filters-list");

  displayOpenedMenu(
    buttonFilterClosed,
    buttonFilterOpened,
    buttonFilterIsOpened
  );

  let buttonDate = document.querySelector("#date-button");
  let buttonPopularity = document.querySelector("#popularity-button");
  let buttonTitle = document.querySelector("#title-button");

  const getActiveClassToTagAll = () => {
    tagsArrayOfEachPhotographer.forEach((button) => {
      button.classList.remove("active");
      if (button.innerHTML === "#all") {
        button.classList.add("active");
      }
    });
  };

  //FILTRER PAR DATE SOURIS / CLAVIER

  const filterByDate = (e) => {
    getActiveClassToTagAll();
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
  };

  // EVENEMENT SOURIS
  buttonDate.addEventListener("click", (e) => {
    filterByDate(e, buttonDate, buttonTitle, buttonPopularity);
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
    getActiveClassToTagAll();
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
    }
  };

  // EVENEMENT SOURIS
  buttonPopularity.addEventListener("click", (e, buttonPopularity) => {
    filterByPopularity(e, buttonDate, buttonTitle, buttonPopularity);
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
    getActiveClassToTagAll();
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
    }
  };

  buttonTitle.addEventListener("click", (e) => {
    filterByTitle(e, buttonDate, buttonTitle, buttonPopularity);
  });

  buttonTitle.addEventListener("keyup", (e) => {
    if (e.key === "Enter") filterByTitle(e);
  });
};

export { selectFilter };
