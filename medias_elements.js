import { lightbox } from "./lightbox.js";
/**
 *
 * @param {array} medias
 * @param {number} photographerID
 */

const addMedias = (filter, photographers, photographerID) => {
  filter.forEach((media) => {
    if (media.photographerId == photographerID) {
      if (media.image) {
        document.querySelector("#portfolio").innerHTML += `
                <figure class="photo">
                    <img
                        tabIndex='0'
                        class="photo-picture"
                        src="./img/${media.photographerId}/${media.image}"
                        alt=""
                        />
    
                    <footer class="photo-footer">
                    <span class="photo-footer__title">${media.title}</span>
                    <span class="photo-footer__likes"
                        ><span class="heart-txt">${media.likes}</span> <i tabIndex='0' class="hearts far fa-heart"></i
                    ></span>
                    </footer>
                </figure>`;
      }
      if (media.video) {
        document.querySelector("#portfolio").innerHTML += `
        <figure class="photo">
        <video tabIndex='0'         alt preload loop class = 'photo-picture' src="./img/${media.photographerId}/${media.video}">${media.description}</video>
        <footer class="photo-footer">
                      <span class="photo-footer__title">${media.title}</span>
                      <span  class="photo-footer__likes"
                          ><span class="heart-txt">${media.likes}</span> <i tabIndex='0'class="hearts far fa-heart"></i
                      ></span>
                      </footer>
                      </figure>`;
      }
    }
  });

  //AJOUTE LA LIGHTBOX

  let picArray = document.querySelectorAll(".photo-picture");
  new lightbox(picArray, filter, photographerID);
};

export { addMedias };
