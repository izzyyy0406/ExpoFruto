// Inicializar WOW.js para animaciones
new WOW().init();

// Manejar el modal de imágenes
document.addEventListener("DOMContentLoaded", function () {
  var imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var imageSrc = button.getAttribute("data-img");
      var modalImage = imageModal.querySelector(".modal-img");
      modalImage.src = imageSrc;
      modalImage.alt = button.getAttribute("alt");
    });
  }
});
