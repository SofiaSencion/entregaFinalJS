//MODO OSCURO

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

  }

  const desactivarModoOscuro = () => {
    //borrar clase modoOscuro del body
      document.body.classList.remove("modoOscuro");

    //actualizar darkMode en el local storage
      localStorage.setItem("modoOscuro", null);

  }

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

  }) 

//llamar al carrito en el local storage y mostrarlo en la pagina

let productosCarrito = localStorage.getItem("productos")

let carritoParseado = JSON.parse(productosCarrito)

console.log (carritoParseado)


function generarCarrito (carritoParseado){
  document.querySelector("#carritoContainer").innerHTML = "";
  const tarjetitas = carritoParseado.reduce((acumuladora, elemento) => {
        return (
          acumuladora +
          `
            <div class="tarjetas" id="${elemento.id}">
                <h3> ${elemento.title}</h3>
                <img src="${elemento.image}" alt="${elemento.title}" class='tarjetasImg'>
                <b> $${elemento.price}</b>
                <button class="botones" id="${elemento.id}"> Remover del carrito</button>
            </div>
            `
        );
      }, "");
      document.querySelector("#carritoContainer").innerHTML = tarjetitas; 
      clickBorrar();
    }

generarCarrito(carritoParseado);



function clickBorrar() {
  let nodos = document.querySelectorAll(".botones"); //nodos = los botones carrito
  console.log(nodos);
  for (let i = 0; i < nodos.length; i++) { //recorrer los botones carrito
    nodos[i].onclick = (e) => { //evento ONCLICK es el que escucha cuando el usuario hace click
      console.log(e.currentTarget.id);
      const idProducto = Number(e.currentTarget.id);

      //traer los productos en el local
      const productosLocal = JSON.parse(localStorage.getItem("productos"))

      //encontrar el indice del producto a borrar de la lista
      const productoIndex = productosLocal.findIndex((producto) => producto.id === idProducto);

      if (productoIndex !== -1){
        productosLocal.splice(productoIndex, 1);
        localStorage.setItem("productos", JSON.stringify(productosLocal));

        generarCarrito(productosLocal);
      
      }
    }
  }
}

clickBorrar();
