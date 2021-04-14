export class FactoryTypeOfMedia {
  constructor(type) {
    if ("photo" == type) return new Photo();
    else if ("video" == type) return new Video();

    return null;
  }
}

class Photo {
  constructor() {
    this.display = function (photographer) {
      let arrayTags = photographer.tags; // tableaux des tags des photographes
      let tag = arrayTags.map((tag) => `<li class ='tags'> ${tag} </li>`); // méthode qui permet d'isoler les éléments du tableau + de les incrémenter entre deux balises <li>
      let tags = `<ul class='tag-list'> ${tag.join("")} </ul>`;
      // méthode.join('') qui incrémente mes <li> dans une <ul>

      let container = document.querySelector("#portfolio");
      container.innerHTML += `
        <figure class="photo">
        <img
            class="photo-picture"
            src="./img/${media.photographerId}/${media.image}"
            alt=""
            />

        <footer class="photo-footer">
        <span class="photo-footer__title">${media.title}</span>
        <span class="photo-footer__likes"
            ><span class="heart-txt">${media.likes}</span> <i class="hearts far fa-heart"></i
        ></span>
        <span class="photo-footer__price">${media.price} €</span>
        </footer>
    </figure>`;
    };
  }
}
