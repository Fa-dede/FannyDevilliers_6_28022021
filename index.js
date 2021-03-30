fetch("datas.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.photographers.forEach((photographer) => {
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

      <ul class='tag-list'>
      <li class="tags">${photographer.tags.join(",")}</li>
      </ul>
    </article>`;

      console.log(photographer.tags.join(","));
    });
  });
