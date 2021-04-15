import { PagesFactory } from "./_pages_Factory.js";

const path = window.location.pathname;

const queryString = window.location.search; //récupère infos de l'url
const urlParams = new URLSearchParams(queryString); //objet qui represente paramètre url
const photographerID = urlParams.get("id"); //récupère la valeur d'un paramètre

new PagesFactory(photographerID, path); // Crée une page en fonction du chemin de l'URL via la Factory
