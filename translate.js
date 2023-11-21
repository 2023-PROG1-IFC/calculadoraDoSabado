let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function() {
    translate(this.value);
});

function translate(idioma) {
    let traducao = 
    (idioma == "br") ? portugues()
    : (idioma == "es") ? espanol()
    : (idioma == "en") ? english()
    : (idioma == "fr") ? francais()
    : null;
    setLanguage(traducao);
}

function setLanguage(novoIdioma) {
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = novoIdioma.soma;
    let btSubtracao = document.querySelector("#btSubtracao");
    btSubtracao.value = novoIdioma.subtracao;
    let titulo = document.querySelector("#titulo");
    titulo.innerHTML = novoIdioma.titulo;
}