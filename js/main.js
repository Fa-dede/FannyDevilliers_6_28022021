import { PagesFactory } from "./_Pages_Factory.js";

const path = window.location.pathname;

const queryString = window.location.search; //récupère infos de l'url
const urlParams = new URLSearchParams(queryString); //objet qui represente paramètre url
const photographerID = urlParams.get("id"); //récupère la valeur d'un paramètre

new PagesFactory(photographerID, path); // Crée une page en fonction du chemin de l'URL via la Factory

// if(document.pathname.location === 'https://fa-dede.github.io/FannyDevilliers_6_28022021/'){
//     this.reachIndex();
//           console.log(document.location.pathname )
//     }
// }
