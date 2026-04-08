 // DARK MODE
const btnDark = document.getElementById("toggle-dark");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// PROJETOS 
let projetos = [
    {
        nomeProjeto : "Meu Portifólio",
        imgProjeto : "https://www.pngarts.com/files/3/Computer-Technology-PNG-Image-with-Transparent-Background.png"
    },
    {
        nomeProjeto : "Projeto E-commerce",
        imgProjeto : "https://freepngimg.com/thumb/software/27297-3-software-transparent-image.png"
    }
];

let container = document.getElementById("grid-projetos");

projetos.forEach((e) => {

    let card = document.createElement("div");
    card.classList.add("card");

    let titulo = document.createElement("h3");
    titulo.textContent = e.nomeProjeto;

    let img = document.createElement("img");
    img.src = e.imgProjeto;

    card.appendChild(img);
    card.appendChild(titulo);

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
