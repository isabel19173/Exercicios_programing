let respostasSim = 0
let resposta
let pergunta = ""
for (let i = 1; i <= 8; i++) {
  if (i === 1) pergunta = "1. Trocou mensagens com a vítima? (sim/não)"
  else if (i === 2) pergunta = "2. Esteve no local do crime? (sim/não)"
  else if (i === 3) pergunta = "3. Mora perto da vítima? (sim/não)"
  else if (i === 4) pergunta = "4. Devia dinheiro para a vítima? (sim/não)"
  else if (i === 5) pergunta = "5. Trabalha ou já trabalhou com a vítima? (sim/não)"
  else if (i === 6) pergunta = "6. Tinha relacionamento amoroso com a vítima? (sim/não)"
  else if (i === 7) pergunta = "7. Ficou feliz com o que aconteceu? (sim/não)"
  else if (i === 8) pergunta = "8. Possui arma de fogo? (sim/não)"

  resposta = prompt(pergunta)
  if (resposta === "sim") {
    respostasSim++
  }
}
let classificacao = ""

if (respostasSim === 8) {
  classificacao = "Assassino"
} else if (respostasSim >= 5) {
  classificacao = "Possível criminoso"
} else if (respostasSim === 4) {
  classificacao = "Suspeito"
} else {
  classificacao = "Inocente"
}
alert("Respostas positivas: " + respostasSim + "\nClassificação: " + classificacao)

