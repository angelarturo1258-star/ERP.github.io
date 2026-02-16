document.addEventListener("DOMContentLoaded", () => {
  const frases = document.querySelectorAll(".frase-globo");

  frases.forEach((frase) => {
    // Posición inicial aleatoria
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 80);

    // Velocidad suave
    let dx = (Math.random() - 0.5) * 0.3;
    let dy = (Math.random() - 0.5) * 0.3;

    frase.style.left = x + "px";
    frase.style.top = y + "px";

    setInterval(() => {
      x += dx;
      y += dy;

      // Rebotar en los bordes
      if (x <= 0 || x >= window.innerWidth - frase.offsetWidth) {
        dx *= -1;
      }

      if (y <= 0 || y >= window.innerHeight - frase.offsetHeight) {
        dy *= -1;
      }

      frase.style.left = x + "px";
      frase.style.top = y + "px";
    }, 30);
  });
});