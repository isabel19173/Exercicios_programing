alert("Média de altura:")
const quant = Number(prompt("Digite quantas pessoas serão cadastradas:"))
let soma = 0
for (let i = 1; i <= quant; i++) {
    let peso = Number(prompt("Digite sua altura " + i + ":" ))
    soma = soma + peso
}
let media = soma / quant
alert("A média de alturas das "+quant+" pessoas cadastradas é: " + media.toFixed(2))