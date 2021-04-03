fetch("datas.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.photographers.forEach((photographer) => {
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
      const article = FactoryDom("article", html);
      console.log(article);
    });
  });

// let tags = arrayTags.map((tag) => "<li>" + tag + "</li>");

// let html = `<ul> ${tags.join("")}</ul>`;
// console.log(html);

function FactoryDom(balise, enfant) {
  var elementHTML;

  if (balise === "article") {
    elementHTML = document.createElement("article");
  } else if (balise === "figure") {
    elementHTML = document.createElement("figure");
  } else if (balise === "figure") {
    elementHTML = document.createElement("figure");
  } else if (balise === "img") {
    elementHTML = document.createElement("img");
  }

  // Si pas d'enfant je ne fais pas la ligne ci-dessous
  elementHTML.innerHTML = enfant;

  return elementHTML;
}

function FactoryDomTitre(niveau, enfant) {
  var elementHTML;
  elementHTML = document.createElement("h" + niveau);
  elementHTML.innerHTML = enfant;

  return elementHTML;
}

console.log(FactoryDomTitre(1, "Hello tout le monde"));

const properties = { src: "blabla", alt: "toto" };

function FactoryImg(balise, properties) {
  var elementHTML;

  if (balise === "img") {
    elementHTML = document.createElement("img");
    console.log(properties.src);
    console.log(properties.alt);
  } else if (balise === "a") {
    elementHTML = document.createElement("a");
    elementHTML.console.log(properties.href);
  }

  return elementHTML;
}

FactoryImg("img", { src: "blabla", alt: "toto" });
FactoryImg("a", { href: "coucou", enfant: "kdfjlksdjflksjdfkj" });
