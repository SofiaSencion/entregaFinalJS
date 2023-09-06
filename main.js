//copiar js boton modo oscuro cuando este terminado//

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

var swiper = new Swiper(".mySwiper", { //iniciar swiper
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

