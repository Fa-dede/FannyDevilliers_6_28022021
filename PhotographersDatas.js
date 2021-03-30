fetch("datas.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.photographers.forEach((photographer) => {
      let mainDiv = document.getElementById("allPhotographers");
      mainDiv.innerHTML += `
      <div class='photographer-id'> ${photographer.portrait}
      <h1>${photographer.name}</h1>
      <h2>${photographer.city}, ${photographer.country}</h2>
      <span>${photographer.tags}
      </div>
      <br>`;
    });
  });
