$("document").ready(function () {
  let tarjetasdigimon = $(".cards");
  let listadodigimon = $(".list");
  capturardataDigimon();

  function capturardataDigimon() {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((digimones) => captura(digimones));
  }

  function captura(digimones) {

    // Tarjetas
    let html = "";
    for (let digimon of digimones) {
      html += `         
        <div class="card card-resize col-6 d-flex flex-column  align-items-center p-2" style="width: 20rem;" id="cardsize">

          <div class="card-img mb-2 ">
            <div class="img__container d-flex flex-column justify-content-center align-items-center">
              <img src="${digimon.img}" class="card-img-top  " alt="...">
            </div>
          </div>

          <div class="card-body w-100 d-flex p-0 flex-row justify-content-between align-items-center bg-danger rounded-3">
            <p class="card-level  align-self-end bg-dark text-light col-4   text-center fs-6">${digimon.level}</p>
            <span class="diagonal align-self-end bg-dark border-dark col-1  "></span>
            <div class="name d-flex flex-column  col-7">
              <h2 class="card-name  text-bg-danger text-center col-0 fs-6 m-0">${digimon.name}</h2>
              <span class="name__bottom bg-dark "></span>
            </div>
          </div>
        </div>
      `;
    }
    tarjetasdigimon.html(html);

    // Listado
    let htmllist = "";
    for (let digimon of digimones) {
      htmllist += `         
        <tr class="text-align-center list">
            <td id="nombre">${digimon.name}</td>
            <td>${digimon.level}</td>
            <td><img src="${digimon.img}" alt="" class="listImg"  ></td>
          </tr>
      `;
    }
    listadodigimon.html(htmllist);

    $("tr").click(function () {
      let nombremodal = $(this)[0].children[0].textContent;
      let nivel = $(this)[0].children[1].textContent;
      let imagen = $(this)[0].children[2].children[0].currentSrc;
     
      $(".modal-title").text(nombremodal);
      $(".nivel").text(nivel);
      $(".imagen").attr("src", $(this)[0].children[2].children[0].currentSrc);
      $("#myModal").modal("show");
    });

    // $("tr").click(function () {
      // let nombremodal = $(this)[0].children[0].textContent;
      // $("#mimodal").removeClass("d-none");
      // $("#tittleModal").text(nombremodal);

      //obtencion de datos de la fila
      /* console.log($(this)[0].children);
      console.log("nombre" + $(this)[0].children[0].textContent);
      console.log("nivel" + $(this)[0].children[1].textContent);
      console.log("img" + $(this)[0].children[2].children[0].currentSrc);
      */
    // });

    // $(".btn-close").click(function () {
    //   $("#mimodal").addClass("d-none");
    // });
  }
});
