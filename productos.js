const api = "https://fakestoreapi.com/products"; //llamar api

///////POROTO VER///////////

var informacion = [];

async function obtenerProductos() {
    try {
      const response = await fetch(api);
      informacion = await response.json();
      console.log(informacion);
      let productos = generarTarjetas(informacion);
      eventoClick(productos);
    } catch (error) {
      console.error('Error:', error);
    }
  }

function generarTarjetas(productos) {
  const tarjetitas = productos.reduce((acumuladora, elemento) => {
    return (
      acumuladora +
      `
        <div class="tarjetas" id="${elemento.id}">
            <h3> ${elemento.title}</h3>
            <img src="${elemento.image}" alt="${elemento.title}" class='tarjetasImg'>
            <b> $${elemento.price}</b>
            <button class="botones" id="${elemento.id}"> Agregar al carrito</button>
        </div>
        `
    );
  }, "");

  document.querySelector("#productos-container").innerHTML = tarjetitas;
  //tal vez agregar descripcion a los productos, pero quedan desproporcionados los distintos tamanios de descripcion
}

////////////////////// event listener botones agregar al carrito => guardar en el local storage

let carrito = []; //array donde van a ir los productos selecionados

var botonesCarrito = document.querySelectorAll(".botones");

const eventoClick = (array) => {
  let nodos = document.querySelectorAll(".botones");
  console.log(nodos);
  for (let i = 0; i < nodos.length; i++) {
    nodos[i].onclick = (e) => {
      console.log(e.currentTarget.id);
      console.log(informacion)
      const buscarProducto = informacion.find((element) => element.id === Number(e.currentTarget.id));
      console.log(buscarProducto);
      carrito.push(buscarProducto);
      console.log(carrito);
      localStorage.setItem("productos", JSON.stringify(carrito));
    };
  }
};

obtenerProductos();



/////////MODO OSCURO//////////////////////

//chequear si "modoOscuro" esta guardado en el local Storage
let darkMode = localStorage.getItem("modoOscuro"); // crea la var darkMode dentro de local storage // no se que hace getItem modOscuro

const darkModeToggle = document.querySelector("#dark-mode-toggle"); //crea la var darkModeToggle y guarda lo que este en el ID "#dark-mode-toggle"

//chequear si el modo oscuro esta activado
//si esta activado, desactivarlo
//si esta desactivado, activarlo

const activarModoOscuro = () => {
  //agregar clase modoOscuro al body
  document.body.classList.add("modoOscuro");

  //actualizar darkMode en el local storage
  localStorage.setItem("modoOscuro", "activado");
};

const desactivarModoOscuro = () => {
  //borrar clase modoOscuro del body
  document.body.classList.remove("modoOscuro");

  //actualizar darkMode en el local storage
  localStorage.setItem("modoOscuro", null);
};

//si el usuario ya visito el sitio y activo el modo oscuro, empezar con el modo oscuro activado
if (darkMode === "activado") {
  activarModoOscuro();
}

//event listener del boton
darkModeToggle.addEventListener("click", () => {
  console.log("clickOscuro"); //chequear que funcione el eventlistener

  //get preferencia modo oscuro
  darkMode = localStorage.getItem("modoOscuro");

  //si no esta activado, activarlo
  if (darkMode !== "activado") {
    activarModoOscuro();
    console.log("activado");
    //si esta activado, desactivarlo
  } else {
    desactivarModoOscuro();
    console.log("desactivado");
  }
});


//////////////////ordenar productos alfabeticamente//////////////


// llamar todo esto de nuevo, ordenarlo, y despues volver a generar tarjetas
// envolver todo eso en un evento click de los botones

//hacer eventlistener click de los botones

const ordenarAZ = document.querySelector("#ordenarAZ")
const ordenarZA = document.querySelector("#ordenarZA")


///ordenar de A a Z
ordenarAZ.addEventListener("click", () => {
  console.log("click AZ")
  var informacion = [];

 async function obtenerProductos() {
     try {
       const response = await fetch(api);
       informacion = await response.json();

//ordenar productos con sort
          informacion.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
       console.log(informacion);
       let productos = generarTarjetas(informacion);
       eventoClick(productos);
     } catch (error) {
       console.error('Error:', error);
     }
   }

 function generarTarjetas(productos) {
   const tarjetitas = productos.reduce((acumuladora, elemento) => {
     return (
       acumuladora +
       `
         <div class="tarjetas" id="${elemento.id}">
             <h3> ${elemento.title}</h3>
             <img src="${elemento.image}" alt="${elemento.title}" class='tarjetasImg'>
             <b> $${elemento.price}</b>
             <button class="botones" id="${elemento.id}"> Agregar al carrito</button>
         </div>
         `
     );
   }, "");

   document.querySelector("#productos-container").innerHTML = tarjetitas;
 }
}

)

obtenerProductos();

///ordenar de Z a A
ordenarZA.addEventListener("click", () => {
  console.log("click ZA")
}

)

 