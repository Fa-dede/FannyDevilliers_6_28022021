fetch("./datas.json")
  .then((response) => response.json())
  .then((datas) => {
    // Name
    let photographer = datas.photographers[0];
    let name = photographer.name;
    document.querySelector("#photographer-name").innerHTML = name;
    //Location
    let city = photographer.city;
    let country = photographer.country;
    document.querySelector(".location").innerHTML = `${city}, ${country}`;
    let tagline = photographer.tagline;
    document.querySelector(".tagline").innerHTML = tagline;
    //Picture
    let picture = photographer.portrait;
    document.querySelector(
      "#container-portrait"
    ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Mimi/${picture}" /> `;
    //Tags
    photographer.tags.forEach((elt) => {
      document.getElementById(
        "tag-list"
      ).innerHTML += `<li class="tags">${elt}</li> `;
    });

    //isolate media with the photographerId

    const likesArray = [];

    const addALike = () => {
      totalNumOfLikes++;
    };

    for (let i = 0; i < datas.media.length; i++) {
      const photographerId = datas.media[i].photographerId;
      let numOfId = 243;
      if (photographerId == numOfId) {
        const indexMedia = datas.media[i];
        // console.log(indexMedia);

        //Nombre total de Likes
        const likes = indexMedia.likes;
        likesArray.push(likes); // ajoute les likes dans le tableau likesArray[]

        //Photographs
        document.querySelector("#portfolio").innerHTML += `
        <figure class="photo">
          <img
                class="photo-picture"
                src="./img/Mimi/${indexMedia.image}"
                alt=""
              />
          <footer class="photo-footer">
            <span class="photo-footer__title">${indexMedia.title}</span>
            <span class="photo-footer__likes"
              >${indexMedia.likes} <i class="heart far fa-heart"></i
            ></span>
            <span class="photo-footer__price">${indexMedia.price} €</span>
          </footer>
        </figure>`;

        // console.log(arrayLikes.reduce(reducer));
      }
    }

    // static insert
    const reducer = (acc, currentVal) => acc + currentVal;

    const totalNumOfLikes = likesArray.reduce(reducer);

    let pricePerDay = photographer.price;

    document.querySelector(".static-insert").innerHTML = `
      <span class="total-likes">${totalNumOfLikes} <i class="fas fa-heart"></i></span>
      <span>${pricePerDay}€ / jour</span>
    `;
  });

// Open Menu Filter

const filterButton = document.getElementById("button-filter");
const filterButtonOpened = document.getElementById("button-filter-opened");

// function openMenu() {
//   filterButton.style.display = "none";
//   filterButtonOpened.style.display = "unset";
//   event.preventDefault;
// }

const openMenu = () => {
  filterButton.style.display = "none";
  filterButtonOpened.style.display = "unset";
  event.addEventListener;
};

const closeMenu = () => {
  filterButtonOpened.style.display = "none";
  filterButton.style.display = "unset";
};

filterButton.addEventListener("mouseover", openMenu);
filterButtonOpened.addEventListener("mouseleave", closeMenu);

// Close Menu Filter
