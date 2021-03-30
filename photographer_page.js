export async function init(idPhotographer) {
  const photographer = await fetch("./datas.json")
    .then((response) => response.json())
    .then((datas) => {
      datas.photographers.forEach((photographer) => {
        // condition : si l'id du photographe est le même que l'id passé en paramètre de la function init()

        if (photographer.id === idPhotographer) {
          //Incrémente les infos selon la condition précédente

          document.querySelector("#photographer-name").innerHTML =
            photographer.name;
          document.querySelector(
            ".location"
          ).innerHTML = `${photographer.city}, ${photographer.country}`;
          document.querySelector(".tagline").innerHTML = photographer.tagline;
          document.querySelector(
            "#container-portrait"
          ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Portraits/${photographer.portrait}" /> `;

          //Boucle qui incrémente une <li> en HTML à chaque tag de bouclé
          photographer.tags.forEach((tag) => {
            document.getElementById(
              "tag-list"
            ).innerHTML += `<li class="tags">${tag}</li> `;
          });
        } //Fin de ma condition : if (photographer.id === idPhotographer)
      }); //Fin de la boucle : datas.photographers.forEach((photographer) =>

      //Boucle + condition qui filtre les médias si la valeur PhotographerId = à mon paramètre idPhotographer
      datas.media.forEach((media) => {
        if (media.photographerId == idPhotographer) {
          document.querySelector("#portfolio").innerHTML += `
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
        } //Fin de ma condition : if (media.photographerId == idPhotographer)
      });
    }); //Fin du 2eme .then()
} //Fin de la function asynchrone init()

init(930);
