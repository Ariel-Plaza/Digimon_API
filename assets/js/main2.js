$("document").ready(function () {
  let tarjetasdigimon = $(".cards");
  capturdataDigimon();

  function capturdataDigimon() {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((digimones) => captura(digimones));
  }

  function buscarDescripcion(name) {
    console.log(name);
    let descripcion;
    fetch("https://digi-api.com/api/v1/digimon/" + {name}, { mode: "no-cors" })
      // https://www.digi-api.com/api/v1/
      .then((response) => response.json())

      .then((digimones) => (descripcion = digimones.description));
    // console.log(digimones))

    // return descripcion;
  }

  function captura(digimones) {
    let html = "";

    for (let digimon of digimones) {
      //fecth tomo el nombre
      let descripcion = buscarDescripcion(digimon.name);

      html += `
          
     <div class="card col-6 d-flex flex-column  align-items-center p-2" style="width: 20rem;">
          <div class="card__title">
            <span class="left"></span>
            <p class="">DIGIMON</p>
            <span class="right"></span>

          </div>

          <div class="card-img mb-2 ">
            <div class="img__container d-flex flex-column justify-content-center align-items-center">
              <img src="${digimon.img}" class="card-img-top  " alt="...">
            </div>
          </div>
          <div
            class="card-body w-100 d-flex p-0 flex-row justify-content-between align-items-center bg-danger rounded-3">

            <p class="card-level  align-self-end bg-dark text-light col-4   text-center fs-6">${digimon.level}</p>

            <span class="diagonal align-self-end bg-dark border-dark col-1  "></span>

            <div class="name d-flex flex-column  col-7">
              <h2 class="card-name  text-bg-danger text-center col-0 fs-6 m-0">${digimon.name}</h2>

              <span class="name__bottom bg-dark "></span>
            </div>

          </div>
          <div class="card__description  w-100 bg-danger mt-2">
            <p>${descripcion}</p>
          </div>
        </div>
      `;
      /*
     ${digimon.img}
      ${ digimon.level }
      ${digimon.name} */
    }
    tarjetasdigimon.html(html);
  }
});
