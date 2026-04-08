 // DARK MODE
const btnDark = document.getElementById("toggle-dark");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// PROJETOS 
let projetos = [
    {
        nomeProjeto : "Meu Portfólio",
        imgProjeto : "https://www.pngarts.com/files/3/Computer-Technology-PNG-Image-with-Transparent-Background.png",
        link: "https://github.com/ElizabethTeixeira/https-github.com-ElizabethTeixeira-Meu-Portf-lio/"
    },
    {
        nomeProjeto : "Meu Portfólio - REACT",
        imgProjeto : "https://freepngimg.com/thumb/software/27297-3-software-transparent-image.png"
    }
];

let container = document.getElementById("grid-projetos");

projetos.forEach((e) => {

    let card = document.createElement("div");
    card.classList.add("card");

    let titulo = document.createElement("h3");
    titulo.textContent = e.nomeProjeto;
    let btn = document.createElement("a");
    btn.textContent = "Ver GitHub";
    btn.href = e.link;

    let img = document.createElement("img");
    img.src = e.imgProjeto;

    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(btn);

    container.appendChild(card);

});

// FORMULÁRIO
const form = document.getElementById("form-contato");
const msg = document.getElementById("msg-sucesso");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.textContent = "Mensagem enviada com sucesso! ✔️";
    form.reset(); 
});
