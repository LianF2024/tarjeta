document.getElementById("abrirBtn").addEventListener("click", function() {
  // Ocultar botón
  this.style.display = "none";

  // Activar música de fondo
  const musica = document.getElementById("musica");
  musica.play();

  // Abrir sobre con animación
  document.querySelector(".sobre").classList.add("abierto");
});

