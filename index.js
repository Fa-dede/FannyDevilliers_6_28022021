fetch("./datas.json")
  .then((resp) => resp.json())
  .then((datas) => {
    const img = document.createElement("img");
    img.src = datas["photographers"][0]["portrait"];
    // img.width = "200";
    output.appendChild(img);
  });
