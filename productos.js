const api = "https://fakestoreapi.com/products";


let informacion = [];
let productos = "";

function generarTarjetas(productos) {
  document.querySelector("#productos-container").innerHTML = "";
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

async function obtenerProductos() {
  const response = await fetch(api);
  const data = await response.json();
  informacion = data;
  productos = generarTarjetas(informacion);
  eventoClick();
}

function eventoClick() {
  let nodos = document.querySelectorAll(".botones"); //nodos = los botones carrito
  console.log(nodos);
  for (let i = 0; i < nodos.length; i++) { //recorrer los botones carrito
    nodos[i].onclick = (e) => { //evento ONCLICK es el que escucha cuando el usuario hace click
      console.log(e.currentTarget.id);
      console.log(informacion);
      const buscarProducto = informacion.find( 
        (element) => element.id === Number(e.currentTarget.id)
      );
      console.log(buscarProducto);
      carrito.push(buscarProducto);
      console.log(carrito);
      if (localStorage.getItem("productos") === null) {
        localStorage.setItem("productos", JSON.stringify(carrito));
      } else if (localStorage.getItem("productos").length > 0) {
        let productosTemp = JSON.parse(localStorage.getItem("productos"));
        productosTemp.push(buscarProducto);
        localStorage.setItem("productos", JSON.stringify(productosTemp));
      }
    };
  }
}



function ordenar(orden) {
  if (orden == "AZ") {
    informacion.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  } else if (orden == "ZA") {
    informacion.sort(function (a, b) {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    }); 
  } else if (orden == "precioAS"){
    informacion.sort(function (a, b) {
      if (a.price > b.price){
        return 1;
      }
      if (a.price < b.price){
        return -1;
      } 
      return 0;
    })
  } else if (orden == "precioDES") {
    informacion.sort(function(a, b){
      if (a.price < b.price){
        return 1;
      }
      if ( a.price > b.price){
        return -1;
      }
      return 0;
    })
  }

  generarTarjetas(informacion);
  eventoClick();
}

let carrito = []; //array donde van a ir los productos selecionados

let botonesCarrito = document.querySelectorAll(".botones");

obtenerProductos();

const ordenarAZ = document.querySelector("#ordenarAZ");
const ordenarZA = document.querySelector("#ordenarZA");
const ordenarPrecioAS = document.querySelector("#ordenarPrecioAS");
const ordenarPrecioDES = document.querySelector("#ordenarPrecioDES")


ordenarAZ.addEventListener("click", () => {
  ordenar("AZ");
});

ordenarZA.addEventListener("click", () => {
  ordenar("ZA");
});

ordenarPrecioAS.addEventListener("click", () => {
  ordenar("precioAS");
});

ordenarPrecioDES.addEventListener("click", () => {
  ordenar("precioDES")
})

//MODO OSCURO/

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
