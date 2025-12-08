// EXERCÍCIO 18

let custo = Number(prompt("Digite o custo de fábrica do carro:"))


let lucro = custo * 0.28
let impostos = custo * 0.45

let valorFinal = custo + lucro + impostos

alert(
    "Custo de fábrica: R$ " + custo.toFixed(2) +
    "\nLucro do distribuidor (28%): R$ " + lucro.toFixed(2) +
    "\nImpostos (45%): R$ " + impostos.toFixed(2) +
    "\nValor final ao consumidor: R$ " + valorFinal.toFixed(2)
)
