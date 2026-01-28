// Al presionar el botón, abrir el sobre y reproducir música
document.getElementById('abrirBtn').addEventListener('click', function() {
  document.getElementById('sobre').classList.add('open');
  this.style.display = 'none'; // ocultar botón
  document.getElementById('musica').play();
});

