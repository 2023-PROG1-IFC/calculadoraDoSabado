let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSomar");
let btSubtrair = document.getElementById("btSubtrair");
let btMultiplicar = document.getElementById("btMultiplicar");
let btDividir = document.getElementById("btDividir");

btSoma.addEventListener("click", function () {
  soma(Number(valor1.value), Number(valor2.value));
});

function soma(a, b) {
  resultado.textContent = a + b;
}

let idioma = document.getElementById("idioma");
idioma.addEventListener("change", function () {
  if (this.value == "br") {
    btSoma.value = "Somar";
    btSubtrair.value = "Subtrair";
    btMultiplicar.value = "Multiplicar";
    btDividir.value = "Dividir";
  }
  else if (this.value == "es") {
    btSoma.value = "Sumar";
    btSubtrair.value = "Restar";
    btMultiplicar.value = "Multiplicar";
    btDividir.value = "Dividir";
  }
  else if (this.value == "en") {
    btSoma.value = "Add";
    btSubtrair.value = "Subtract";
    btMultiplicar.value = "Multiply";
    btDividir.value = "Divide";
  }
  else if (this.value == "fr") {
    btSoma.value = "Ajouter";
    btSubtrair.value = "Soustraire";
    btMultiplicar.value = "Multiplier";
    btDividir.value = "Diviser";
  }
});