
let ipi = Number(prompt("Digite o percentual do IPI:"))
let cod1 = prompt("Código da primeira peça:")
let valor1 = Number(prompt("Valor da primeira peça:"))
let quant1 = Number(prompt("Quantidade da primeira peça:"))
let cod2 = prompt("Código da segunda peça:")
let valor2 = Number(prompt("Valor da segunda peça:"))
let quant2 = Number(prompt("Quantidade da segunda peça:"))

let total = (valor1 * quant1 + valor2 * quant2) * (1 + ipi / 100)


alert(
    "Código peça 1: " + cod1 +
    "\nCódigo peça 2: " + cod2 +
    "\nValor total com IPI: R$ " + total.toFixed(2)
)
