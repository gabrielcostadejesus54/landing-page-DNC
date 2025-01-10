let leonardo = document.getElementById("leonardo");
let bruna = document.getElementById("bruna");
let samantha = document.getElementById("samantha");
let setaDireita = document.getElementById("setaDireita");
let setaEsquerda = document.getElementById("setaEsquerda");

function rolarParaDireita() {
    setaEsquerda.style.display = "flex";
    bruna.style.display = "none";
    samantha.style.display = "flex";
    setaDireita.style.display = "none";
}

function rolarParaEsquerda() {
    setaEsquerda.style.display = "none";
    setaDireita.style.display = "flex";
    samantha.style.display = "none";
    bruna.style.display = "flex";
}
