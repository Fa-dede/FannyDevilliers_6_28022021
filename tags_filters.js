const sortByTags = () => {
  let tagsArray = [...document.querySelectorAll(".navigation-bar__tags")];
  let photographerProfile = [
    ...document.querySelectorAll(".container-profile"),
  ];

  for (let i = 0; i < tagsArray.length; i++) {
    let tagButton = tagsArray[i];
    let tagName = tagButton.innerHTML;
    sortByTagName(tagName, tagButton, photographerProfile, tagsArray);
  }
};

const sortByTagName = (tagName, tagButton, photographerProfile, tagsArray) => {
  let tagForEachPhotographer = document.querySelectorAll(
    ".container-profile .tags"
  );
  if (tagButton.innerHTML.includes(tagName)) {
    tagName = tagName.toLowerCase();

    /**
     *
     * @param {target} e =  button targeted
     */

    const filterTagsAbleAndDisable = (e) => {
      // Pour tous les tags : si le tag a la classe Active alors supprime sa classe active
      tagsArray.forEach((tag) => {
        if (tag.classList[2] == "active") {
          tag.classList.remove("active");
        }
      });

      // Si le tag cible est INACTIF alors rend le ACTIF
      if (!e.target.classList[2]) {
        e.target.classList.add("active");
        photographerProfile.forEach((profile) => {
          profile.style.display = "none";

          if (profile.innerHTML.includes(tagName)) {
            profile.style.display = "block";
          }
        });
      }

      //Stylise le bouton de tag associé au profil du photographe
      tagForEachPhotographer.forEach((tag) => {
        if (tag.innerHTML.includes(tagName)) {
          tag.classList.add("active");
        }
      });
    };

    /**
     * Supprime la Mise En Forme du bouton tag associé au photographe
     */
    const removeTagSelectedForEachPhotographer = () => {
      tagForEachPhotographer.forEach((tag) => {
        tag.classList.remove("active");
      });
    };

    /**
     * Evenement au clic sur le bouton TAG de la NAV BAR
     */

    tagButton.addEventListener("click", (e) => {
      removeTagSelectedForEachPhotographer();
      filterTagsAbleAndDisable(e);
    });

    /**
     * Evenement au clavier sur le bouton TAG de la NAV BAR
     */

    tagButton.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        removeTagSelectedForEachPhotographer();
        filterTagsAbleAndDisable(e);
      }
    });
  }
};

export { sortByTags };
