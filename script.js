toggleMenu = () => {
    const menuLinks = document.querySelector(".menu-links")
    const icons = document.querySelector(".hamburger-icons")
    menuLinks.classList.toggle("open")
    icons.classList.toggle("open")


}
const heroPara = document.createElement("p")
const hero = document.querySelector(".hero")
heroPara.innerHTML = `<p>Hello! I'm<br>Arpit Parmar</p>`
hero.appendChild(heroPara)
let textContents = [
    `<p>I'M a<br>Web Developer</p>`,
    `<p>Hello! I'M<br>Arpit Parmar</p>`
]

let count = 0;
setInterval(() => {
    heroPara.style.opacity = 0;
    setTimeout(() => {
        heroPara.innerHTML = textContents[count]
        heroPara.style.opacity = 1;
        count = (count + 1) % textContents.length;

    }, 600);
}, 2500);
const hireimg = document.querySelector(".hire img")
const hire = document.querySelector(".hire a")
hire.addEventListener("mouseover",()=>{
    hireimg.style.opacity = 1;
})