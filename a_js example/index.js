import { MediaTypeFactory } from "./_factoryArticle.js";

fetch("datas.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.photographers.forEach((photographer) => {
      const media = new MediaTypeFactory("photo");
      media.display(photographer);
    });
  });
