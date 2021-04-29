import { MediasFactory } from "./Medias_Factory.js";
import {
  addPhotographerCard,
  addPhotographerLabel,
} from "./photographer_elements.js";
import { modaleBehaviour } from "./modale_contact.js";
import { globalLikesCounters } from "./likes_counter.js";
import { sortByTags } from "./tags_filters.js";

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

        //FACTORY DE PAGE AVEC MEDIAS
        new MediasFactory(this.medias, this.photographerID, this.photographers);

        //ETIQUETTE DU PHOTOGRAPHE
        addPhotographerLabel(photographers, this.photographerID);

        //MODALE
        modaleBehaviour(this.photographers, this.photographerID);
        new globalLikesCounters(
          this.medias,
          this.photographers,
          this.photographerID
        );
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
