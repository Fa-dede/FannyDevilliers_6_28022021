import {
  addPhotographerCard,
  addPhotographerLabel,
} from "./_photographer_elements.js";

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
        addPhotographerLabel(this.photographers, this.photographerID);
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
