const api = 'https://fakestoreapi.com/products' //llamar api

//crear tarjetas con productos
const productos = fetch(api)
                    .then(res=>res.json())
                    .then( (informacion) => {
                        console.log(informacion)
                        generarTarjetas(informacion)

                    })
                    //.then(json=>console.log(json))

function generarTarjetas (productos) {
    const tarjetitas = productos.reduce((acumuladora, elemento) => {
        return acumuladora + `
        <div class="tarjetas" id="${elemento.id}">
            <h3> ${elemento.title}</h3>
            <img src="${elemento.image}" alt="${elemento.title}" class='tarjetasImg'>
            <b> $${elemento.price}</b>
            <button class="botones" id="${elemento.id}"> Agregar al carrito</button>
        </div>
        `}, "")

    document.querySelector("#productos-container").innerHTML = tarjetitas
    //tal vez agregar descripcion a los productos, pero quedan desproporcionados los distintos tamanios de descripcion 
}

// event listener botones agregar al carrito => guardar en el local storage

let carrito = [] //array donde van a ir los productos selecionados

const botonesCarrito = document.querySelectorAll(".botones")

const eventoClick = (nodos, array) => {

  for (let i = 0; i < nodos.length; i++){

    nodos[i].onclick = (e) => {

      const id = e.currentTarget.id
      const buscarProducto = array.find(element => element.id === Number(id))
      carrito.push(buscarProducto)
      console.log (carrito)
      localStorage.setItem("productos", JSON.stringify(carrito))
    }

  }

}

eventoClick(botonesCarrito, productos)











// // let carrito = [] ///array donde van a ir los productos seleccionados

//  let botonesCarrito = document.querySelectorAll(".botones")

// // const eventoClick = (nodos, array) => {

// //     for (let i = 0; i < nodos.length; i++){

// //         nodos [i].onclick = (e) => {

// //             const id = e.currentTarget.id
// //             const buscarProducto = array.find(element => element.id === Number(id))
// //             carrito.push(buscarProducto)
// //             console.log (carrito)
// //             localStorage.setItem("productos", JSON.stringify(carrito))
// //         }
// //     }
// // }

// // eventoClick(botonesCarrito, productos)

// // let carrito = [] ///array donde van a ir los productos seleccionados


// // const botonesCarrito = document.querySelectorAll(".botones")

// // const eventoClick = (nodos, array ) => {

// //     for (let i = 0; i < nodos.length; i++){
       
// //         nodos[i].onclick = (e) => {

// //             const id = e.currentTarget.id
// //             const buscarProducto = array.find(element => element.id === Number(id))
// //             carrito.push(buscarProducto)
// //             console.log (carrito)
// //             localStorage.setItem("productos", JSON.stringify(carrito))
// //         }
// //     }
// // }

// // eventoClick(botonesCarrito, productos)


// // botonesCarrito.addEventListener("click", () => {
// //     console.log("me hacen click")
// // }
// // )
    

// botonesCarrito.forEach((boton) => {
//     boton.addEventListener("click", (e) => {
//       const id = e.currentTarget.id;
//       const buscarProducto = productos.find((element) => element.id === Number(id));
  
//       if (buscarProducto) {
//         carrito.push(buscarProducto);
//         console.log(carrito);
//         localStorage.setItem("productos", JSON.stringify(carrito));
//       }
//     });
//   });


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

