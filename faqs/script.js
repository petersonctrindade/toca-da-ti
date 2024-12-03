document.addEventListener("DOMContentLoaded", () => {
    const acordeaoButton = document.querySelectorAll(".acordeao-btn");

    acordeaoButton.forEach(button => {
        button.addEventListener("click", () => {
       const conteudo = button.nextElementSibling;
       button.classList.toggle("active");
       if (conteudo.style.maxHeight) {
           conteudo.style.maxHeight = null;
       } else {
           conteudo.style.maxHeight = conteudo.scrollHeight + "px";
       }
        });
    });
});