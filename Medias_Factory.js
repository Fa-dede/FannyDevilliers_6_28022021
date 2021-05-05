import { addMedias } from "./medias_elements.js";
import { selectFilter } from "./filters_medias.js";

class MediasFactory {
  constructor(
    medias,
    photographerID,
    photographers,
    type,
    tagsArrayOfPhotographer
  ) {
    this.photographers = photographers;
    this.type = type;
    this.medias = medias;
    this.filter = medias;
    let filter = this.filter;
    this.photographerID = photographerID;

    //AJOUTE LES MEDIAS
    addMedias(filter, photographers, photographerID, medias); // appel de la lightbox à l'intérieur

    //AJOUTE LES FILTRES BUTTON
    selectFilter(medias, filter, photographers, photographerID);
  }
}

export { MediasFactory };
