// Saludo al cargar la página
window.addEventListener('load', function () {
  alert("¡Bienvenida a mi página personal! 🌸");
});

// Cambiar color de fondo
function cambiarColor() {
  const colores = ["#fef6fa", "#fff0f5", "#f9d5ec", "#fde2ff", "#fcd8e0"];
  document.body.style.backgroundColor =
    colores[Math.floor(Math.random() * colores.length)];
}

// Capturar evento del formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que se recargue la página
      alert("¡Gracias por tu mensaje! 💌");
      form.reset(); // Limpia los campos
    });
  }
});


