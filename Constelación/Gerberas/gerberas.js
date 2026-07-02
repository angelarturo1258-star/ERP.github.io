//==================================================
// ELEMENTOS
//==================================================

console.log("Cargado");

const field = document.getElementById("field");

const stars = document.getElementById("stars");

const shootingStars =
document.getElementById("shootingStars");

const floatingPetals =
document.getElementById("floatingPetals");


const loveButton =
document.getElementById("loveButton");


const backButton =
document.getElementById("backButton");


const neonLove =
document.getElementById("neonLove");



//==================================================
// CREAR ESTRELLAS
//==================================================


function createStars(){


    for(let i = 0; i < 180; i++){


        const star =
        document.createElement("div");


        star.className = "star";



        const size =
        Math.random() * 3 + 1;



        star.style.width =
        size + "px";


        star.style.height =
        size + "px";



        star.style.left =
        Math.random()*100 + "%";


        star.style.top =
        Math.random()*100 + "%";



        star.style.animationDelay =
        Math.random()*5 + "s";



        stars.appendChild(star);


    }


}


createStars();




//==================================================
// DATOS DE GERBERAS
//==================================================


const flowerColors = [

    {
        color:"#c94f8a",
        light:"#ff9bc5"
    },

    {
        color:"#8b5fbf",
        light:"#c9a4ff"
    },

    {
        color:"#4f8fb8",
        light:"#8fd8ff"
    },

    {
        color:"#5a327d",
        light:"#9b6bd8"
    }

];



//==================================================
// CREAR UNA GERBERA
//==================================================


function createFlower(){


    const flower =
    document.createElement("div");


    flower.className="flower";



    const size =
    Math.random()*0.8+0.6;



    flower.style.setProperty(
        "--size",
        size
    );



    flower.style.left =
    Math.random()*100 + "%";



    flower.style.bottom =
    Math.random()*35+ "px";



    const color =
    flowerColors[
        Math.floor(
        Math.random()*flowerColors.length
        )
    ];



    flower.style.setProperty(
        "--petal-color",
        color.color
    );
        flower.style.setProperty(
        "--depth",
        Math.random()
    );


    flower.style.setProperty(
        "--petal-light",
        color.light
    );



    // tallo


    const stem =
    document.createElement("div");


    stem.className="stem";


    flower.appendChild(stem);




    // pétalos


    for(let i=0;i<16;i++){


        const petal =
        document.createElement("div");


        petal.className="petal";


        petal.style.transform =
        `
        rotate(${i*22.5}deg)
        translateY(-45px)
        `;


        flower.appendChild(petal);


    }




    // centro


    const center =
    document.createElement("div");


    center.className="center";


    flower.appendChild(center);



    // algunas flores crecen


    if(Math.random() > .65){


        flower.classList.add("grow");
        flower.style.animationDelay = Math.random()*4+"s";


    }



    // brillo al tocar


    flower.addEventListener(
    "click",
    ()=>{


        flower.classList.add("glow");


        setTimeout(()=>{

            flower.classList.remove("glow");


        },800);


    });



    field.appendChild(flower);


}



// Crear campo


for(let i=0;i<120;i++){


    createFlower();


}



console.log(
"Campo de gerberas creado"
);




//==================================================
// ESTRELLAS FUGACES
//==================================================


function createShootingStar(){


    const shootingStar =
    document.createElement("div");


    shootingStar.className =
    "shooting-star";



    shootingStar.style.left =
    Math.random()*100 + "%";



    shootingStar.style.top =
    Math.random()*45 + "%";



    shootingStar.style.animationDuration =
    (Math.random()*0.8+1)+"s";



    shootingStars.appendChild(shootingStar);



    setTimeout(()=>{


        shootingStar.classList.add(
            "active"
        );


    },50);




    setTimeout(()=>{


        shootingStar.remove();


    },2000);


}



// Crear fugaces cada cierto tiempo


setInterval(

    createShootingStar,

    2800

);





//==================================================
// PÉTALOS FLOTANTES
//==================================================


function createFloatingPetal(){


    const petal =
    document.createElement("div");



    petal.className =
    "floating-petal";



    petal.style.left =
    Math.random()*100+"%";



    petal.style.animationDuration =
    (Math.random()*5+5)+"s";



    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;



    floatingPetals.appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },10000);


}




setInterval(

    createFloatingPetal,

    600

);






//==================================================
// BOTÓN TE AMO
//==================================================


loveButton.addEventListener(
"click",
()=>{


    neonLove.classList.toggle(
        "show"
    );


});







//==================================================
// BOTÓN REGRESAR
//==================================================


backButton.addEventListener(
"click",
()=>{


    window.location.href =
    "../index.html";


});




//==================================================
// DESTELLOS ALEATORIOS EN FLORES
//==================================================


function randomFlowerGlow(){


const flowers =
document.querySelectorAll(".flower");


if(!flowers.length) return;



const flower =
flowers[
Math.floor(
Math.random()*flowers.length
)
];



flower.classList.add("glow");



setTimeout(()=>{


flower.classList.remove("glow");


},1000);


}



setInterval(
randomFlowerGlow,
1200
);


// un brillo cada cierto tiempo

setInterval(

    randomFlowerGlow,

    900

);





//==================================================
// MOVIMIENTO SUAVE DE FLORES
//==================================================


document
.querySelectorAll(".flower")
.forEach((flower)=>{


    flower.style.animationDelay =

    Math.random()*5+"s";



});






//==================================================
// ENTRADA SUAVE DEL CAMPO
//==================================================


window.addEventListener(
"load",
()=>{


    field.classList.add(
        "loaded"
    );


});





//==================================================
// EVITAR DEMASIADAS FLORES EN MÓVIL
//==================================================


if(window.innerWidth < 600){



    const flowers =
    document.querySelectorAll(".flower");



    flowers.forEach(
    (flower,index)=>{


        if(index > 60){

            flower.remove();

        }


    });



}





console.log(
"🌌 Jardín de gerberas listo"
);
















