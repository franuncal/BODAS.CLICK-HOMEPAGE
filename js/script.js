const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function () {
  modal.style.display = "block";
  document.querySelector(".modal-content").classList.add("show");
};

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".modal-content").classList.remove("show");
};

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector(".modal-content").classList.remove("show");
  }
};

document
  .getElementById("ver-plantillas")
  .addEventListener("click", function () {
    window.location.href = "plantilla/indexB.html"; // Redirige al archivo de la plantilla
  });
