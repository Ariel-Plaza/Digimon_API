var tarjetasdigimon = document.querySelector("#tarjeta");
//conexion y solicituda a api
fetch("https://digimon-api.vercel.app/api/digimon")
  //respuesta y transformacion a json
  .then((response) => response.json())
  //guarda los datos en variable y realiza una accion
  .then((digimones) => {
    // llamada al metodo tabla que recibira los datos obtenido de la api
    captura(digimones);
  });

//creacion de funcion tabla

function captura(digimones) {
  // limpia la informacion que tenga contenido
  tarjetasdigimon.innerHTML = "";
  //se recorre los datos recibidos de la api
  for (let digimon of digimones) {
    // ingresaremos lo datos que necesitamos en cada iteracion
    // agregamos los datos que necesitamos en la table
    tarjetasdigimon.innerHTML += `


    <h1 id="nombreDigimon">${digimon.name}</h1>
<p id="nivelDigimon"></p>
<img id="imagenDigimon" src="${digimon.img}" alt="">
   <p class="card-text">${digimon.level}</p>         
       



              
      `;
    // ponemos un contador que solo mostrara 10 registros
    //  if (digimon.id == 5) {
    //   break;
  }
}

//  <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
//   <h5 class="card-title">${digimon.name}</h5>
//   <div class="card-body">
