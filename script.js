const envelope = document.getElementById("envelope");
const carta = document.getElementById("carta");
const fechar = document.getElementById("fechar");
const musica = document.getElementById("musica");

envelope.addEventListener("click", () => {
    envelope.classList.add("sumir");

    musica.play().catch(() => {});

    setTimeout(() => {
        carta.style.display = "flex";
    }, 500);
});

fechar.addEventListener("click", () => {
    carta.style.display = "none";
    envelope.classList.remove("sumir");
});
