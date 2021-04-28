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
  buttonFilterClosed.addEventListener("click", () => {
    // buttonFilterClosed.style.display = "none";
    buttonFilterOpened.style.display = "inline-block";
  });
};

const hideOpenedMenu = (buttonFilterClosed, buttonFilterOpened) => {
  //   buttonFilterOpened.style.display = "none";
  buttonFilterClosed.style.display = "inline-block";
};

const changeTextOfFilterButton = (e, textOfTargetedLi) => {
  document.querySelector("#text-filter").innerHTML = textOfTargetedLi;
};

const changeOrderTextInOpenedButtonFilter = (e) => {
  let arrayOfLi = [...document.querySelectorAll("#ul-filters-list li")];
  let ulFilterList = [document.querySelector("#ul-filters-list")];
  console.log(ulFilterList);
  for (let i = 0; i < arrayOfLi.length; i++) {
    if (arrayOfLi[i] === e.target) {
      //Change texte dans le bouton fermé
      let textOfTargetedLi = arrayOfLi[i].innerHTML;
      changeTextOfFilterButton(e, textOfTargetedLi);
      //Change ordre des boutons dans bouton ouvert
      if (i === 1) {
        console.log("2nd place");
        arrayOfLi[i] = arrayOfLi[i - 1];
        console.log(arrayOfLi[i]);
      }
    }
  }
};

export {
  displayOpenedMenu,
  hideOpenedMenu,
  changeOrderTextInOpenedButtonFilter,
};
