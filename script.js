const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".middle h1");
const eye = document.querySelector(".top img");
const cta = document.querySelector(".cta");
const text = document.querySelector(".middle p");
const options = document.querySelector(".middle ul");

card.addEventListener("mousemove", (e) => {
    let xAxis = (Window.innerHeight / 2 - e.pageY) / -15;
    let yAxis = (Window.innerWidth / 2 - e.pageX) / -15;
    card.style.transform = 'rotateY('+yAxis+'deg) rotateX('+xAxis+'deg)';
});


card.addEventListener("mouseenter", (e) =>{
    card.style.transition="none";

    title.style.transform="translateZ(60px)";
    text.style.transform="translateZ(60px)";
    options.style.transfrom="translateZ(50px)";
    cta.style.transform="translateZ(70px)";
    eye.style.transform="translateZ(60px)";
});
card.addEventListener("mouseleave",(e)=>{
    card.style.transition="transform 500ms";
   card.style.transform="rotateY(0) rotateX(0)";

    title.style.transform="translateZ(0px)";
    text.style.transform="translateZ(0px)";
    options.style.transfrom="translateZ(0px)";
    cta.style.transform="translateZ(0px)";
    eye.style.transform="translateZ(0px)";
});