export class MediaTypeFactory {
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

      let mainContainer = document.querySelector(".main-container");
      mainContainer.innerHTML += `
        <article id="first-profile" class="container-profile">
          <a href="./photographer-page.html?id=${photographer.id}">
            <figure>
              <img
                class="container-profile__picture"
                src="./img/Portraits/${photographer.portrait}"
               alt="${photographer.name}'s profile"
              />
            </figure>
  
            <h2 class="container-profile__name">${photographer.name}</h2>
          </a>
  
          <div class="container-profile__information">
            <h3 class="location">${photographer.city}, ${photographer.country}</h3>
            <h4 class="quote">${photographer.tagline}</h4>
            <h5 class="prices">${photographer.price} € / jour</h5>
          </div>
          ${tags}
        </article>`;

      const html = `
          <a href="./photographer-page.html?id=${photographer.id}">
            <figure>
              <img
                class="container-profile__picture"
                src="./img/Portraits/${photographer.portrait}"
               alt="${photographer.name}'s profile"
              />
            </figure>
  
            <h2 class="container-profile__name">${photographer.name}</h2>
          </a>
  
          <div class="container-profile__information">
            <h3 class="location">${photographer.city}, ${photographer.country}</h3>
            <h4 class="quote">${photographer.tagline}</h4>
            <h5 class="prices">${photographer.price} € / jour</h5>
          </div>
          ${tags}
        `;
    };
  }
}

class Video {
  constructor() {
    this.display = function () {
      return "<article><h1>Ceci est une video</h1></article>";
    };
  }
}
