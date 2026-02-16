document.addEventListener("DOMContentLoaded", function () {

    const galeria = document.querySelector(".galeria");

    function crearDestello() {
        const destello = document.createElement("div");
        destello.classList.add("destello");

        const size = Math.random() * 6 + 4;

        destello.style.width = size + "px";
        destello.style.height = size + "px";
        destello.style.left = Math.random() * 100 + "%";
        destello.style.animationDuration = (Math.random() * 3 + 4) + "s";

        galeria.appendChild(destello);

        setTimeout(() => {
            destello.remove();
        }, 7000);
    }

    setInterval(crearDestello, 400);
});
