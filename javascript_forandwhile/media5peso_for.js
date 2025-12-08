alert("A média de 5 pesos:")
let soma = 0
for (let i = 1; i <= 5; i++) {
    let peso = Number(prompt("Digite o peso " + i + ":" ))
    soma += peso
}
let media = soma / 5;
alert("A média dos 5 pesos é: " + media.toFixed(2))

