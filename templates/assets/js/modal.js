let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrir-modal")[0];
let modal = document.querySelectorAll(".modal-fijo")[0];
// let modalContainer = document.querySelectorAll(".modal-container")[0];
let formulario = document.querySelectorAll(".formulario")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  formulario.style.opacity = "1";
  formulario.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function (e) {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    formulario.style.opacity = "0";
    formulario.style.visibility = "hidden";
  }, 1000);
});

// funcion para que cuando de click afuera del modal se cierre tambien el mismo

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == formulario) {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
      formulario.style.opacity = "0";
      formulario.style.visibility = "hidden";
    }, 1000);
  }
});
