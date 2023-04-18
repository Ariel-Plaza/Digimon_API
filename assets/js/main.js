$("document").ready(function () {

  let tarjetasdigimon = $(".cards");
  capturdataDigimon();


  function capturdataDigimon() {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((digimones) => captura(digimones))  
      }

  function captura(digimones) {
    
    let html = "";
    
    for (let digimon of digimones) {
          html += `
          <div class="card col-6 d-flex flex-column justify-content-center align-items-center m-2" style="width: 15rem;">
            <img src="${digimon.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${digimon.level}
              </p>
              <h5 class="card-title">${digimon.name}</h5>
            </div>
          </div>      
      `;
    }
    tarjetasdigimon.html(html)
  }
  
});