const addAsFavorite = () => {
  let heartArray = document.getElementsByClassName("hearts");
  let arrayOfHearts = [...heartArray];
  arrayOfHearts.forEach((heart) => {
    let addedToFavorite = false;
    heart.addEventListener("click", function fillHeart(event) {
      let selectedHeart = event.target;
      let selectedFooterLike = selectedHeart.parentNode;
      let selectedHeartCount = selectedFooterLike.querySelector(".heart-txt");
      if (!addedToFavorite) {
        addedToFavorite = true;
        selectedHeartCount.innerHTML =
          parseInt(selectedHeartCount.innerHTML, 10) + 1;
        heart.style.fontWeight = "bold";
        let likesPerPage = 0;
      } else {
        addedToFavorite = false;
        selectedHeartCount.innerHTML =
          parseInt(selectedHeartCount.innerHTML, 10) - 1;
        heart.style.fontWeight = "400";
      }
    });
  });
};

export { addAsFavorite };
