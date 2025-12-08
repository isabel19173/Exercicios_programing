/* Peça o CPF (como número), o número de dependentes e a renda mensal da pessoa. 
Calcule o valor do imposto de renda com base:
Desconto de 5% do salário mínimo por dependente
Alíquotas:
Até 2 SM → isento
Até 3 SM → 5%
Até 5 SM → 10%
Até 7 SM → 15%
Acima de 7 SM → 20% */

let cpf= (prompt("Digite seu CPF \n Ex:89702345877"))
let dep= Number(prompt("Digite n°e de dependetes:"))
let rm= Number (prompt("Sua renda mensal:"))

const sm= 1518
let des= 0.05*dep*sm
let rendaFinal = rm - des
let imposto = 0

if (rendaFinal <= 2 * sm) {
    imposto = 0
}
else if (rendaFinal <= 3 * sm) {
    imposto = rendaFinal * 0.05
}
else if (rendaFinal <= 5 * sm) {
    imposto = rendaFinal * 0.10
}
else if (rendaFinal <= 7 * sm) {
    imposto = rendaFinal * 0.15
}
else {
    imposto = rendaFinal * 0.20
}

alert("CPF: " + cpf +
      "\nRenda mensal: R$ " + rm.toFixed(2) +
      "\nDesconto por dependentes: R$ " + des.toFixed(2) +
      "\nRenda após desconto: R$ " + rendaFinal.toFixed(2) +
      "\nImposto devido: R$ " + imposto.toFixed(2))