const links = document.querySelectorAll(".link-profissoes")

links.forEach(link => {
    link.addEventListener("click", () => {
        if (link.id === "link-design") {
            document.getElementById("area-design").scrollIntoView({behavior: 'smooth'})
        } else if (link.id === "link-eng") {
            document.getElementById("area-eng").scrollIntoView({behavior: 'smooth'})
        } else if (link.id === "link-cyber") {
            document.getElementById("area-cyber").scrollIntoView({behavior: 'smooth'})
        }else if(link.id === "link-sup"){
            document.getElementById("area-suporte").scrollIntoView({behavior: 'smooth'})
        }else if(link.id === "link-dev"){
            document.getElementById("area-dev").scrollIntoView({behavior: 'smooth'})
        }
    })
});

// Botão do footer
const buttonFooter = document.querySelector(".footer-button")
const home = document.querySelector("#intro")

buttonFooter.addEventListener("click", () => {
    intro.scrollIntoView({behavior: 'smooth'})
})
