let buttonDate = document.querySelector("#date-button");
let buttonTitle = document.querySelector("#title-button");
let buttonPopularity = document.querySelector("#popularity-button");

//Evenement au clic : Filtre Date
buttonDate.addEventListener("click", (e) => {
  console.log("date");
  document.querySelector("#portfolio").innerHTML = "";
  addMedias(mediaArrayFilteredByDates);
});
//Evenement au clic : Filtre Titre
buttonTitle.addEventListener("click", (e) => {
  console.log("titre");
  document.querySelector("#portfolio").innerHTML = "";
  addMedias(mediaArrayFilteredByTitle);
});

//Evenement au clic : Filtre Popularité
buttonPopularity.addEventListener("click", (e) => {
  console.log("popularité");
  document.querySelector("#portfolio").innerHTML = "";
  addMedias(mediaArrayFilteredByPopularity);
});

// méthode qui permet de trier mes dates de la plus ancienne à la plus récente directement dans le tableau mediaArray
let mediaArrayFilteredByDates = [...mediaArray].sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

// méthode qui permet de trier mes medias par Titre
let mediaArrayFilteredByTitle = [...mediaArray].sort((a, b) => {
  return a.title > b.title ? 1 : -1;
});

// méthode qui permet de trier les médias du plus au moins Populaires directement dans le tableau mediaArray
let mediaArrayFilteredByPopularity = mediaArray.sort((a, b) => {
  return a.likes - b.likes;
});

const changeFilter = (target, filter) => {
  target.addEventListener("click", (e) => {
    document.querySelector("#portfolio").innerHTML = "";
    addMedias(filter);
  });
};

export { buttonPopularity, buttonTitle, buttonDate };
