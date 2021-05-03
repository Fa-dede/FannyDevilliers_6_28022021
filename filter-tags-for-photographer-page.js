const filterPicturesByTag = (filter) => {
  let artWorkArray = [...document.querySelectorAll(".photo")];
  let tagsArrayOfEachPhotographer = [...document.querySelectorAll(".tags")];

  tagsArrayOfEachPhotographer.forEach((button) => {
    let tagName = button.innerHTML;

    const tagButtonBehavior = (e) => {
      tagsArrayOfEachPhotographer.forEach((tagButton) => {
        tagButton.classList.remove("active");
      });

      artWorkArray.forEach((picture) => {
        picture.style.display = "block";
        if (!picture.innerHTML.includes(tagName)) {
          e.target.classList.add("active");
          picture.style.display = "none";
        }
        if (e.target.innerHTML === "#all") {
          artWorkArray.forEach((picture) => {
            picture.style.display = "block";
          });
        }
      });
    };

    button.addEventListener("click", (e) => {
      tagButtonBehavior(e);
    });

    button.addEventListener("keyup", (e) => {
      if (e.key === "Enter") tagButtonBehavior(e);
    });
  });
};
export { filterPicturesByTag };
