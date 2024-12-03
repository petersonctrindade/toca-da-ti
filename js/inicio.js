// Nav do carrossel - Peterson

const navCarrossel = document.querySelectorAll(".nav-carrossel")

navCarrossel.forEach(nav => {
    nav.addEventListener("click", () => {
        if (nav.id === "nav-slide1") {
            document.getElementById("slide-1").scrollIntoView({behavior: 'smooth'})
        } else if (nav.id === "nav-slide2") {
            document.getElementById("slide-2").scrollIntoView({behavior: 'smooth'})
        } else if (nav.id === "nav-slide3") {
            document.getElementById("slide-3").scrollIntoView({behavior: 'smooth'})
        }
    })
});
