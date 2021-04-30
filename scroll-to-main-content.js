//Affiche le bouton de retour au Contenu au Scroll

const scrollButtonBehavior = () => {
  let scrollToMainContentButton = document.querySelector(
    "#scroll-to-main-button"
  );
  let mainAnchor = document.querySelector("#main");

  window.addEventListener("scroll", () => {
    scrollToMainContentButton.style.display = "block";
    if (window.scrollY === 0) {
      scrollToMainContentButton.style.display = "none";
    }
  });

  const scrollToMainContent = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scrollToMainContentButton.addEventListener("click", scrollToMainContent);
};

export { scrollButtonBehavior };
