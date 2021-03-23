//Movement
const card = document.querySelector("div.card")
const container = document.querySelector("div.container")
//Itens
const title = document.querySelector("div.name")
const profile = document.querySelector(".people img")
const contato = document.querySelector("div.button")
const desc = document.querySelector("div.desc")
const redes = document.querySelector("div.sm")

//Movimentos de animação
container.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animando Itens In
container.addEventListener("mouseenter", (e) => {
    title.style.transform = "translateZ(150px)"
    profile.style.transform = "translateZ(90px)"
    desc.style.transform = "translateZ(120px)"
    redes.style.transform = "translateZ(100px)"
    contato.style.transform = "translateZ(75px)"
})

//Animando Itens Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = "translateZ(0px)"
    profile.style.transform = "translateZ(0px)"
    desc.style.transform = "translateZ(0px)"
    redes.style.transform = "translateZ(0px)"
    contato.style.transform = "translateZ(0px)"
})