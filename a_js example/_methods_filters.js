// méthode qui permet de trier mes dates de la plus ancienne à la plus récente directement dans le tableau mediaArray
let mediaArrayFilteredByDates = mediaArray.sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

// méthode qui permet de trier les médias du plus au moins Populaires directement dans le tableau mediaArray
export let mediaArrayFilteredByPopularity = mediaArray.sort((a, b) => {
  return a.likes - b.likes;
});

// méthode qui permet de trier les médias par ordre Alphabétique
let mediaArrayFilteredByTitle = mediaArray.sort((a, b) => {
  return a.title > b.title ? 1 : -1;
});
