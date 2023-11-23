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

btSubtrair.addEventListener("click", function () {
  subtrai(Number(valor1.value), Number(valor2.value));
});

btMultiplicar.addEventListener("click", function () {
  multiplica(Number(valor1.value), Number(valor2.value));
});

btDividir.addEventListener("click", function () {
  divide(Number(valor1.value), Number(valor2.value));
});

function soma(a, b) {
  resultado.textContent = a + b;
}

function subtrai(a, b) {
  resultado.textContent = a - b;
}

function multiplica(a, b) {
  resultado.textContent = a * b;
}

function divide(a, b) {
  resultado.textContent = a / b;
}