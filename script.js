const envelope = document.getElementById("envelope");
const carta = document.getElementById("carta");
const fechar = document.getElementById("fechar");
const musica = document.getElementById("musica");
const coracoes = document.getElementById("coracoes");

musica.volume = 0.3;

envelope.addEventListener("click", () => {

    envelope.classList.add("abrir");

    musica.play().catch(()=>{});

    setTimeout(() => {
        carta.style.display = "flex";
        criarCoracoes();
    }, 600);
});

fechar.addEventListener("click", () => {
    carta.style.display = "none";
    envelope.classList.remove("abrir");
    coracoes.innerHTML = "";
});

function criarCoracoes() {
    setInterval(() => {
        const coracao = document.createElement("span");
        coracao.innerHTML = "❤";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";
        coracoes.appendChild(coracao);

        setTimeout(() => coracao.remove(), 5000);
    }, 300);
}