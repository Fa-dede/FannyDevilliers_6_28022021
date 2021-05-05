import { MediasFactory } from "./Medias_Factory.js";
import {
  addPhotographerCard,
  addPhotographerLabel,
} from "./photographer_elements.js";
import { modaleBehaviour } from "./modale_contact.js";
import { globalLikesCounters } from "./likes_counter.js";
import { sortByTags } from "./tags_filters.js";
import { scrollButtonBehavior } from "./scroll-to-main-content.js";
import { filterPicturesByTag } from "./filter-tags-for-photographer-page.js";

class PagesFactory {
  constructor(photographerID, path) {
    this.photographerID = photographerID;
    this.path = path;
    this.createPage();
  }

  createHomePage() {
    fetch("datas.json")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        this.photographers = datas.photographers;
        addPhotographerCard(this.photographers);
        sortByTags();
        scrollButtonBehavior();
      });
  }

  createPhotographerPage() {
    fetch("./datas.json")
      .then((response) => response.json())
      .then((datas) => {
        this.photographers = datas.photographers;
        let photographers = this.photographers;
        this.photographerID = this.photographerID;
        this.medias = datas.media;

        //ETIQUETTE DU PHOTOGRAPHE
        addPhotographerLabel(photographers, this.photographerID);

        //FILTRAGE DES MEDIAS PAR LES TAGS
        filterPicturesByTag(
          this.medias,
          this.photographers,
          this.photographerID
        );

        //FACTORY DE PAGE AVEC MEDIAS
        new MediasFactory(this.medias, this.photographerID, this.photographers);

        //MODALE
        modaleBehaviour(this.photographers, this.photographerID);
      });
  }

  createPage() {
    if (this.path.includes("index.html")) {
      this.createHomePage();
    } else if (this.path.includes("photographer-page.html")) {
      this.createPhotographerPage();
    }
  }
}

export { PagesFactory };
