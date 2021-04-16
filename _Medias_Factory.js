import { addPhotos, addVideos } from "./_medias_elements.js";

class MediasFactory {
  constructor(medias, photographerID, type) {
    this.type = type;
    this.medias = medias;
    this.photographerID = photographerID;
    this.displayMedias(this.type);
  }

  displayMedias(type) {
    if (type == "photo") {
      addPhotos(this.medias, this.photographerID);
    }
    if (type == "video") {
      addVideos(this.medias, this.photographerID);
    }
  }
}

export { MediasFactory };
