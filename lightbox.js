class lightbox {
  constructor(pictures, media, photographerID) {
    this.lightbox = document.querySelector("#lightbox");
    this.pictures = pictures;
    this.media = media;
    this.photographerID = photographerID;
    this.gallery = media;
    this.arrayOfPictures = [];
    this.containerForPictureSelected = "";
    this.mediaContainer;
    this.i = 0;
    this.createCarousel(
      this.i,
      pictures,
      this.lightbox,
      photographerID,
      media,
      this.arrayOfPictures,
      this.containerForPictureSelected,
      this.mediaContainer
    );
  }

  createCarousel(
    i,
    pictures,
    lightbox,
    photographerID,
    medias,
    arrayOfPictures,
    containerForPictureSelected,
    mediaContainer
  ) {
    this.closeLightboxContainer(lightbox, containerForPictureSelected);

    medias.forEach((media) => {
      if (media.photographerId == photographerID) {
        arrayOfPictures.push(media);
      }
    });
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener("click", () => {
        containerForPictureSelected = document.createElement("div");
        containerForPictureSelected.id = "container-for-picture-selected";
        lightbox.appendChild(containerForPictureSelected);
        lightbox.style.display = "flex";

        let videoMarkup = `
        <video controls alt preload loop autoplay  id="video-clicked" class = 'selected-image' src = "./img/${photographerID}/${arrayOfPictures[i].video}">vidéo non prise en charge par votre navigateur</video>
        `;
        let photoMarkup = `
        <img id="image-clicked" class = 'selected-image' src = "./img/${photographerID}/${arrayOfPictures[i].image}">
        `;
        let domCarousel = `
        <button class="lightbox__prev">Précédent</button>
        <div id = 'photo-video-container'>
        </div>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__close">Fermer</button>
        <h4 id="title-of-picture-selected">${arrayOfPictures[i].title}</h4>
        `;

        containerForPictureSelected.innerHTML = domCarousel;

        mediaContainer = document.querySelector("#photo-video-container");
        if (pictures[i].src.includes(".jpg")) {
          mediaContainer.innerHTML = photoMarkup;
        }
        if (pictures[i].src.includes(".mp4")) {
          mediaContainer.innerHTML = videoMarkup;
        }

        this.nextAndPreviousAction(pictures, i, mediaContainer);
        this.closeCarousel();
      });
    }
  }

  closeLightboxContainer = (lightbox, containerForPictureSelected) => {
    lightbox.addEventListener("click", (e) => {
      let container = document.querySelector("#container-for-picture-selected");
      if (e.target === e.currentTarget || e.target === container) {
        lightbox.innerHTML = "";
        lightbox.style.display = "none";
        return containerForPictureSelected;
      }
    });
  };

  addContentAfterAction(i, pictures, mediaContainer) {
    if (pictures[i].src.includes(".jpg")) {
      mediaContainer.innerHTML = `
        <img id="image-clicked" class = 'selected-image' src = "./img/${this.photographerID}/${this.arrayOfPictures[i].image}">
        `;
    }
    if (pictures[i].src.includes(".mp4")) {
      mediaContainer.innerHTML = `
        <video controls alt preload loop autoplay  id="video-clicked" class = 'selected-image' src = "./img/${this.photographerID}/${this.arrayOfPictures[i].video}">vidéo non prise en charge par votre navigateur</video>
        `;
    }

    document.querySelector(
      "#title-of-picture-selected"
    ).innerHTML = this.arrayOfPictures[i].title;
  }

  nextAndPreviousAction(pictures, i, mediaContainer) {
    let buttonNext = document.querySelector(".lightbox__next");
    buttonNext.addEventListener("click", () => {
      i++;
      if (i == this.arrayOfPictures.length) i = 0;
      this.addContentAfterAction(i, pictures, mediaContainer);
    });

    let buttonPrevious = document.querySelector(".lightbox__prev");
    buttonPrevious.addEventListener("click", () => {
      i--;
      if (i == -1) i = this.arrayOfPictures.length - 1;
      this.addContentAfterAction(i, pictures, mediaContainer);
    });
  }

  closeCarousel() {
    let buttonClose = document.querySelector(".lightbox__close");
    buttonClose.addEventListener("click", () => {
      this.lightbox.innerHTML = "";
      this.lightbox.style.display = "none";
    });
  }
}

export { lightbox };
