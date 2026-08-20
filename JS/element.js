

const contenedorLluvia =
    document.getElementById(
        "contenedor-lluvia"
    );


/* =========================================
  LLuvia
========================================= */

function crearLluvia() {

    const cantidadGotas = 90;


    for (
        let indiceGota = 0;
        indiceGota < cantidadGotas;
        indiceGota++
    ) {

        const gota =
            document.createElement(
                "div"
            );


        gota.classList.add(
            "gota-lluvia"
        );


        const posicionHorizontal =
            Math.random() * 100;


        const alturaGota =
            12 +
            Math.random() * 35;


        const duracionGota =
            4 +
            Math.random() * 5;


        const retrasoGota =
            Math.random() * 6;


        const opacidadGota =
            0.08 +
            Math.random() * 0.22;


        const desenfoqueGota =
            Math.random() * 1.2;


        const inclinacionGota =
            -10 +
            Math.random() * 8;


        const desplazamientoGota =
            -60 +
            Math.random() * 40;


        gota.style.setProperty(
            "--lluvia-x",
            `${posicionHorizontal}%`
        );


        gota.style.setProperty(
            "--lluvia-altura",
            `${alturaGota}px`
        );


        gota.style.setProperty(
            "--lluvia-duracion",
            `${duracionGota}s`
        );


        gota.style.setProperty(
            "--lluvia-retraso",
            `${retrasoGota}s`
        );


        gota.style.setProperty(
            "--lluvia-opacidad",
            opacidadGota
        );


        gota.style.setProperty(
            "--lluvia-desenfoque",
            `${desenfoqueGota}px`
        );


        gota.style.setProperty(
            "--lluvia-inclinacion",
            `${inclinacionGota}deg`
        );


        gota.style.setProperty(
            "--lluvia-desplazamiento",
            `${desplazamientoGota}px`
        );


        contenedorLluvia.appendChild(
            gota
        );

    }

}


/* =========================================
   BOTÓN REGRESAR
========================================= */

const botonRegresar =
    document.getElementById(
        "boton-regresar"
    );


botonRegresar.addEventListener(
    "click",
    function () {

        window.location.href =
            "/home.html";

    }
);


/* =========================================
   INICIAR
========================================= */

crearLluvia();