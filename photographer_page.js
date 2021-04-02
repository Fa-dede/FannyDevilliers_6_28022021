export async function init(idPhotographer) {
  const photographer = await fetch("./datas.json")
    .then((response) => response.json())
    .then((datas) => {
      datas.photographers.forEach((photographer) => {
        // Début de l'encart fixe de bas de page (dans la boucle photographer = boucle 1)

        document.querySelector(".static-insert").innerHTML = `
        <span class="total-likes"></span>
        <span class ='price-per-day'>${photographer.price}€ / jour</span>
        `;

        // Condition1 : si l'id du photographe est le même que l'id passé en paramètre de la function init()

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

          //Boucle 1.2 qui incrémente une <li> en HTML à chaque tag de bouclé
          photographer.tags.forEach((tag) => {
            document.getElementById(
              "tag-list"
            ).innerHTML += `<li class="tags">${tag}</li> `;
          });
        } //Fin de ma Condition1 : if (photographer.id === idPhotographer)
      }); //Fin de la Boucle1 : datas.photographers.forEach((photographer) =>

      let totalNumberOfLikesArray = [];
      let heartArray = document.getElementsByClassName("hearts");

      //Boucle2 : boucle les médias
      datas.media.forEach((media) => {
        // condition 2.1 qui filtre les médias si la valeur PhotographerId = à mon paramètre idPhotographer
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
          totalNumberOfLikesArray.push(media.likes);
        } //Fin de ma condition 2.1 : if (media.photographerId == idPhotographer)
      }); //Fin de Boucle 2 : datas.media.forEach()

      //Ajouter en favoris
      let addedToFavorite = false;
      for (let h = 0; h < heartArray.length; h++) {
        const fillHeart = (event) => {
          let selectedHeart = event.target;
          let selectedFooterLike = selectedHeart.parentNode;
          let selectedHeartCount = selectedFooterLike.querySelector(
            ".heart-txt"
          );
          if (!addedToFavorite) {
            addedToFavorite = true;
            console.log(addedToFavorite);
            selectedHeartCount.innerHTML =
              parseInt(selectedHeartCount.innerHTML, 10) + 1;
            heartArray[h].style.fontWeight = "bold";
          } else {
            addedToFavorite = false;
            console.log(addedToFavorite);
            selectedHeartCount.innerHTML =
              parseInt(selectedHeartCount.innerHTML, 10) - 1;
            heartArray[h].style.fontWeight = "400";
          }
        };

        heartArray[h].addEventListener("click", fillHeart);
      }

      const reducer = (acc, currentVal) => acc + currentVal;
      let likesPerPage = totalNumberOfLikesArray.reduce(reducer);
      document.querySelector(
        ".total-likes"
      ).innerHTML = `${likesPerPage} <i class="fas fa-heart"></i>`;
    }); //Fin du 2eme .then()
} //Fin de la function asynchrone init()

init(82);
