// DESAFIO 04
// Peça um ano e diga se ele é um ano bissexto.

const ano =Number(prompt("Informa se ano escolhido será ano bissexto: \n Digite um ano:"))

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert("O ano " + ano + " é BISSEXTO!");
} else {
    alert("O ano " + ano + " NÃO é bissexto.");
}