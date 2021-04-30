import { globalLikesCounters } from "./likes_counter.js";
import { addMedias } from "./medias_elements.js";
import {
  displayOpenedMenu,
  hideOpenedMenu,
  changeOrderTextInOpenedButtonFilter,
} from "./filters_button_shaping.js";

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

  document.querySelector("#date-button").addEventListener("click", (e) => {
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
  });

  document
    .querySelector("#popularity-button")
    .addEventListener("click", (e) => {
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
    });

  document.querySelector("#title-button").addEventListener("click", (e) => {
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
  });
};

export { selectFilter };