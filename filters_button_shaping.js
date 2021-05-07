// const changeTextOfFilterButton = (e) => {
//   if (e.target === document.querySelector("#title-button")) {
//     document.querySelector("#text-filter").innerHTML = "Titre";
//   } else if (e.target === document.querySelector("#date-button")) {
//     document.querySelector("#text-filter").innerHTML = "Date";
//   } else if (e.target === document.querySelector("#popularity-button")) {
//     document.querySelector("#text-filter").innerHTML = "Popularité";
//   }
// };

const displayOpenedMenu = (buttonFilterClosed, buttonFilterOpened) => {
  buttonFilterClosed.addEventListener("click", (e) => {
    buttonFilterClosed.style.display = "none";
    buttonFilterOpened.style.display = "inline-block";
  });
  buttonFilterClosed.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      buttonFilterClosed.style.display = "none";
      buttonFilterOpened.style.display = "inline-block";
    }
  });
};

const hideOpenedMenu = (buttonFilterClosed, buttonFilterOpened) => {
  buttonFilterOpened.style.display = "none";
  buttonFilterClosed.style.display = "inline-block";
};

const changeTextOfFilterButton = (e, textOfTargetedLi) => {
  document.querySelector("#text-filter").innerHTML = textOfTargetedLi;
};

const changeOrderTextInOpenedButtonFilter = (e) => {
  let arrayOfLi = [...document.querySelectorAll("#ul-filters-list li")];
  for (let i = 0; i < arrayOfLi.length; i++) {
    if (arrayOfLi[i] === e.target) {
      //Change texte dans le bouton fermé
      let textOfTargetedLi = arrayOfLi[i].innerHTML;
      changeTextOfFilterButton(e, textOfTargetedLi);
      //Change l'ordre des bouton dans le menu deroulant
      // let indexOfFilterClicked = arrayOfLi.indexOf(arrayOfLi[i]);
      // arrayOfLi.splice(indexOfFilterClicked, 1);
      // arrayOfLi.unshift(e.target);
      // let containerOfLiFilters = document.querySelector("#ul-filters-list");

      // containerOfLiFilters.innerHTML = "";
      // containerOfLiFilters.innerHTML = `
      //   <li tabindex="0" id = "${arrayOfLi[0].id}" class = "category category-1st">${arrayOfLi[0].innerHTML}</li>
      //   <li tabindex="0" id = "${arrayOfLi[1].id}" class = "category category-2nd">${arrayOfLi[1].innerHTML}</li>
      //   <li tabindex="0" id = "${arrayOfLi[2].id}" class = "category category-3rd">${arrayOfLi[2].innerHTML}</li>
      // `;
    }
  }
};

export {
  displayOpenedMenu,
  hideOpenedMenu,
  changeOrderTextInOpenedButtonFilter,
};
