// Nav do carrossel - Peterson

const navCarrossel = document.querySelectorAll(".nav-carrossel")

navCarrossel.forEach(nav => {
    nav.addEventListener("click", () => {
        if (nav.id === "nav-slide1") {
            document.getElementById("slide-1").scrollIntoView({behavior: 'smooth'})
        } else if (nav.id === "nav-slide2") {
            document.getElementById("slide-2").scrollIntoView({behavior: 'smooth'})
        }
    })
});

// Botão do footer
const buttonFooter = document.querySelector(".footer-button")
const home = document.querySelector("#home")

buttonFooter.addEventListener("click", () => {
    home.scrollIntoView({behavior: 'smooth'})
})
