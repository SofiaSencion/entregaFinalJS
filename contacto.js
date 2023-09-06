//copiar js boton modo oscuro cuando este terminado//

// formulario que permita contactarse con la empresa

//agregar preventdefault clase 11

// el formulario tiene que validar los datos que se ingresen

// el campo que reciba el mail tiene que validar que el string ingresado contenga un @ 

// el campo de nombre debe tener mas de 2 caracteres

// el campo de mensaje debe tener mas de 2 caracteres

//crear array vacio para guardar los mensajes
let mensajes = []


//crear vars que capturen cada input
const inputNombre = document.querySelector("#inputNombre")
const inputCorreo = document.querySelector("#correo")
const inputMensaje = document.querySelector("#mensaje")

//chequear que funcione(no funciona)
console.log(inputNombre, inputCorreo, inputMensaje)


//event listener del submit (enviar)
document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault() //prevenimos la actualizacion del sitio

    //validar datos
    const nombre = inputNombre.value;
    console.log(nombre)
    if (nombre.length <= 2){
        alert("Por favor ingrese un nombre mas largo");
       
        return; //detiene el proceso si no es valido
    }
    
    const correo = inputCorreo.value;
    if (!correo.includes('@')) {
        alert("Por favor ingrese un mail valido")
        return; //detiene el proceso si no es valido
    }

    const mensaje = inputMensaje.value;
    if (mensaje.length < 5){
        alert("Por favor ingrese un mensaje mas largo");
        return; //detiene el proceso si no es valido
    }

    //pusheamos los datos capturados al array vacio
    mensajes.push({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
    })


//limpiamos el formulario

document.querySelector("form").reset()

//subir al local storage para guardar el mansaje

localStorage.setItem("mensajes", JSON.stringify(mensajes))

})


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