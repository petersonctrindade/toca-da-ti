const links = document.querySelectorAll(".link-profissoes")

links.forEach(link => {
    link.addEventListener("click", () => {
        if (link.id === "link-dev") {
            document.getElementById("area-dev").scrollIntoView({behavior: 'smooth'})
        } else if (link.id === "link-dados") {
            document.getElementById("area-dados").scrollIntoView({behavior: 'smooth'})
        } else if (link.id === "link-redes") {
            document.getElementById("area-redes").scrollIntoView({behavior: 'smooth'})
        }
    })
});

// Botão do footer
const buttonFooter = document.querySelector(".footer-button")
const home = document.querySelector("#intro")

buttonFooter.addEventListener("click", () => {
    intro.scrollIntoView({behavior: 'smooth'})
})
