//==================================================
// Lo principal
//==================================================

const stars = document.getElementById("stars");
const sparkles = document.getElementById("sparkles");
const shootingStars = document.getElementById("shootingStars");
const particles = document.getElementById("particles");

const background = document.querySelector(".background");

const btnConstellation = document.getElementById("btnConstellation");
const btnFavoritas = document.getElementById("btnFavoritas");


//==================================================
// CREAR ESTRELLAS
//==================================================

function createStars(){

    const amount = 220;


    for(let i = 0; i < amount; i++){


        const star = document.createElement("div");


        star.classList.add("star");


        const size = Math.random() * 3 + 1;


        star.style.width = `${size}px`;

        star.style.height = `${size}px`;


        star.style.left =
        `${Math.random()*100}%`;


        star.style.top =
        `${Math.random()*100}%`;



        star.style.animationDuration =
        `${Math.random()*4 + 2}s`;



        star.style.animationDelay =
        `${Math.random()*5}s`;



        stars.appendChild(star);

    }

}


createStars();



//==================================================
// Destellos tipo linterna "lantern"
//==================================================


function createSparkles(){


    const amount = 35;



    for(let i=0; i<amount; i++){


        const sparkle =
        document.createElement("div");



        sparkle.classList.add("sparkle");



        sparkle.style.left =
        `${Math.random()*100}%`;



        sparkle.style.top =
        `${Math.random()*100}%`;



        sparkle.style.animationDuration =
        `${Math.random()*3+2}s`;



        sparkle.style.animationDelay =
        `${Math.random()*5}s`;



        sparkles.appendChild(sparkle);


    }


}



createSparkles();




//==================================================
// Es el mismo método de las linternas en la página de rapunzel xD
//==================================================


function createParticles(){


    const amount = 45;



    for(let i=0; i<amount; i++){


        const particle =
        document.createElement("div");



        particle.classList.add("particle");



        particle.style.left =
        `${Math.random()*100}%`;



        particle.style.top =
        `${Math.random()*100}%`;



        particle.style.animationDuration =
        `${Math.random()*8+5}s`;



        particle.style.animationDelay =
        `${Math.random()*8}s`;



        particles.appendChild(particle);


    }


}



createParticles();





//==================================================
// ESTRELLAS FUGACES
//==================================================


function createShootingStar(){


    const shootingStar =
    document.createElement("div");


    shootingStar.classList.add("shooting-star");



    // posición aleatoria


    shootingStar.style.left =
    `${Math.random()*120 + 20}%`;



    shootingStar.style.top =
    `${Math.random()*50}%`;



    // velocidad aleatoria


    shootingStar.style.animationDuration =
    `${Math.random()*0.8 + 1}s`;



    shootingStars.appendChild(shootingStar);



    // activar animación


    setTimeout(()=>{


        shootingStar.classList.add("active");


    },100);



    // eliminar después


    setTimeout(()=>{


        shootingStar.remove();


    },2500);


}




// aparece una estrella fugaz cada cierto tiempo

setInterval(()=>{


    createShootingStar();


},3500);




//==================================================
// MOSTRAR CONSTELACIÓN
//==================================================


let constellationVisible = false;



btnConstellation.addEventListener("click",()=>{


    constellationVisible =
    !constellationVisible;



    if(constellationVisible){



        background.classList.add("show");

        document.body.classList.add(
        "constellation-mode"
        );


        btnConstellation.innerHTML =
        "✨ Ocultar Constelación";



    }else{


        background.classList.remove("show");

        document.body.classList.remove(
        "constellation-mode"
        );



        btnConstellation.innerHTML =
        "🌌 Mostrar Constelación";


    }



});




//==================================================
// EFECTO BOTÓN AL PRESIONAR
//==================================================


function buttonClickEffect(button){



    button.addEventListener("click",(e)=>{



        const ripple =
        document.createElement("span");



        ripple.classList.add("ripple");



        const rect =
        button.getBoundingClientRect();



        ripple.style.left =
        `${e.clientX - rect.left}px`;



        ripple.style.top =
        `${e.clientY - rect.top}px`;



        button.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();



        },700);



    });


}



buttonClickEffect(btnConstellation);

buttonClickEffect(btnFavoritas);



//==================================================
// BOTÓN FAVORITAS (TEMPORAL)
//==================================================


btnFavoritas.addEventListener(
"click",
()=>{


btnFavoritas.addEventListener(
    "click",
    ()=>{
        window.location.href = "Gerberas/Favoritas.html"
    }
)



});



//==================================================
// EFECTO PARALLAX SUAVE
//==================================================


let mouseX = 0;
let mouseY = 0;


document.addEventListener(
"mousemove",
(e)=>{


    mouseX =
    (e.clientX / window.innerWidth - 0.5);



    mouseY =
    (e.clientY / window.innerHeight - 0.5);



    background.style.transform =
    `
    scale(1.08)
    translate(
    ${mouseX * 12}px,
    ${mouseY * 12}px
    )
    `;



});




//==================================================
// PARALLAX PARA MÓVILES
//==================================================


window.addEventListener(
"deviceorientation",
(e)=>{


    if(e.gamma && e.beta){


        const x =
        e.gamma / 20;


        const y =
        e.beta / 20;



        background.style.transform =
        `
        scale(1.08)
        translate(
        ${x}px,
        ${y}px
        )
        `;


    }


});





//==================================================
// CREAR RIPPLE DESDE JS
//==================================================


const style =
document.createElement("style");


style.innerHTML = `


.ripple{

position:absolute;

width:10px;

height:10px;

border-radius:50%;

background:rgba(255,255,255,.7);

transform:scale(0);

animation:rippleEffect .7s ease-out;

pointer-events:none;

}


@keyframes rippleEffect{


from{

transform:scale(0);

opacity:1;

}


to{

transform:scale(18);

opacity:0;

}


}


`;


document.head.appendChild(style);





//==================================================
// REDUCIR EFECTOS SI EL DISPOSITIVO LO PIDE
//==================================================


const reduceMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
);



if(reduceMotion.matches){


    document.body.classList.add(
    "reduced-motion"
    );


}






//==================================================
// MENSAJE FINAL EN CONSOLA
//==================================================


console.log(
"🌌 Constelación cargada correctamente"
);
