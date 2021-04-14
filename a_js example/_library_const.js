let totalNumberOfLikesArray = [];
let heartArray = document.getElementsByClassName("hearts");
let mediaArray = [];

let ligthbox = document.createElement("div");
ligthbox.id = "ligthbox";
document.body.appendChild(ligthbox);
// ligthbox.innerHTML = "";
ligthbox.addEventListener("click", (e) => {
  let container = document.getElementById("ligthbox--container-elements");
  if (e.target === e.currentTarget || e.target === container) {
    return (ligthbox.style.display = "none");
  }
});

let buttonDate = document.querySelector("#date-button");
let buttonTitle = document.querySelector("#title-button");
let buttonPopularity = document.querySelector("#popularity-button");

export {
  totalNumberOfLikesArray,
  heartArray,
  mediaArray,
  ligthbox,
  buttonDate,
  buttonTitle,
  buttonPopularity,
};
