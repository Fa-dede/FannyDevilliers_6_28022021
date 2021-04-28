import { MediasFactory } from "./_Medias_Factory.js";
import {
  addPhotographerCard,
  addPhotographerLabel,
  addFooterInsert,
} from "./_photographer_elements.js";
import { modaleBehaviour } from "./_modale_contact.js";
import { addAsFavorite } from "./_add_to_favorite.js";

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
      });
  }

  createPhotographerPage() {
    fetch("./datas.json")
      .then((response) => response.json())
      .then((datas) => {
        this.photographers = datas.photographers;
        this.photographerID = this.photographerID;
        this.medias = datas.media;
        addPhotographerLabel(this.photographers, this.photographerID);
        new MediasFactory(this.medias, this.photographerID, "photo");
        new MediasFactory(this.medias, this.photographerID, "video");
        modaleBehaviour();
        addFooterInsert(this.medias, this.photographers, this.photographerID);
        addAsFavorite();
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
