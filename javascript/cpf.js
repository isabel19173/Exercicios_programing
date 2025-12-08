/* Peça o CPF (como número), o número de dependentes e a renda mensal da pessoa. 
Calcule o valor do imposto de renda com base:
Desconto de 5% do salário mínimo por dependente
Alíquotas:
Até 2 SM → isento
Até 3 SM → 5%
Até 5 SM → 10%
Até 7 SM → 15%
Acima de 7 SM → 20% */

var cpf= Number(prompt("Digite seu CPF"))
var dep= Number(prompt("Digite n°e d dependetes:"))
var rm= Number (prompt("Sua renda mensal:"))
