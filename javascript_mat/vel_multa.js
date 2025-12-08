/*Peça a velocidade permitida na via e a velocidade que o motorista estava. Calcule a multa:
Até 20% acima → R$ 102,00
Mais de 20% acima → R$ 500,00*/

const velp= Number(prompt("Verificação da valor de infação de trânsito: \n Digite a velocidade permitida na via:"))
const velm= Number(prompt('Digite velocidade que situava:'))

const limite20 = velp * 1.20
if (velm <= velp) {
    alert("Sem multa. Dentro do limite.")
} else if (velm <= limite20) {
    alert("Multa de R$ 102,00 (até 20% acima do limite).")
} else {
    alert("Multa de R$ 500,00 (mais de 20% acima do limite).")
}