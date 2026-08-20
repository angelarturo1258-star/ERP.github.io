/* =========================================
   ELEMENTOS
========================================= */

const contenedorDestellos =
    document.getElementById(
        "contenedorDestellos"
    );


const botonImagen =
    document.getElementById(
        "botonImagen"
    );


const pantallaInicio =
    document.querySelector(
        ".pantalla-inicio"
    );


/* =========================================
   DESTELLOS
========================================= */

const cantidadDestellos = 45;


/* =========================================
   CREAR DESTELLOS
========================================= */

for (
    let indiceDestello = 0;
    indiceDestello < cantidadDestellos;
    indiceDestello++
) {

    const nuevoDestello =
        document.createElement(
            "span"
        );


    nuevoDestello.classList.add(
        "destello"
    );


    /* POSICIÓN X */

    const posicionX =
        Math.random() * 100;


    nuevoDestello.style.setProperty(
        "--destello-x",
        posicionX + "%"
    );


    /* POSICIÓN Y */

    const posicionY =
        Math.random() * 100;


    nuevoDestello.style.setProperty(
        "--destello-y",
        posicionY + "%"
    );


    /* TAMAÑO */

    const tamanoDestello =
        1 + Math.random() * 2.5;


    nuevoDestello.style.setProperty(
        "--destello-tamano",
        tamanoDestello + "px"
    );


    /* OPACIDAD */

    const opacidadDestello =
        0.25 + Math.random() * 0.55;


    nuevoDestello.style.setProperty(
        "--destello-opacidad",
        opacidadDestello
    );


    /* DURACIÓN */

    const duracionDestello =
        2.5 + Math.random() * 5;


    nuevoDestello.style.setProperty(
        "--destello-duracion",
        duracionDestello + "s"
    );


    /* RETRASO */

    const retrasoDestello =
        Math.random() * 6;


    nuevoDestello.style.setProperty(
        "--destello-retraso",
        "-" + retrasoDestello + "s"
    );


    /* AGREGAR AL FONDO */

    contenedorDestellos.appendChild(
        nuevoDestello
    );

}


/* =========================================
   CLIC EN LA IMAGEN
========================================= */

botonImagen.addEventListener(
    "click",
    function () {

        /*
           Evitamos clics repetidos.
        */

        botonImagen.disabled = true;


        /*
           Ocultamos el texto.
        */

        pantallaInicio.classList.add(
            "saliendo"
        );


        /*
           Comenzamos la expansión.
        */

        botonImagen.classList.add(
            "expandiendo"
        );


        /*
           Esperamos a que termine
           la animación.
        */

        setTimeout(
            function () {

                window.location.href =
                    "/Escrito/carta.html";

            },
            900
        );

    }
);