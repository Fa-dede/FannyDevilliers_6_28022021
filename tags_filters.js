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
  if (tagButton.innerHTML.includes(tagName)) {
    tagName = tagName.toLowerCase();

    tagButton.addEventListener("click", (e) => {
      // e.target.classList.add("active");

      photographerProfile.forEach((profile) => {
        profile.style.display = "none";

        if (profile.innerHTML.includes(tagName)) {
          profile.style.display = "block";
        }
      });
    });

    tagButton.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        photographerProfile.forEach((profile) => {
          profile.style.display = "none";

          if (profile.innerHTML.includes(tagName)) {
            profile.style.display = "block";
          }
        });
      }
    });
  }
};

export { sortByTags };
