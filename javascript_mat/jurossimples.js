//

let capital = Number(prompt("Digite o capital inicial:"));
let taxa = Number(prompt("Digite a taxa de juros (em decimal, ex: 0.05):"));
let dias = Number(prompt("Digite o tempo em dias:"));


let juros = capital * taxa * dias;
let montante = capital + juros;

alert(
    "Capital inicial: R$ " + capital.toFixed(2) +
    "\nJuros: R$ " + juros.toFixed(2) +
    "\nMontante final: R$ " + montante.toFixed(2)
)
