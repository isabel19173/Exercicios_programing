let respostasSim = 0;
let resposta;

// repete 8 vezes
for (let i = 1; i <= 8; i++) {

    if (i === 1) {
        resposta = prompt("1. Trocou mensagens com a vítima? (sim/não)");
    }
    else if (i === 2) {
        resposta = prompt("2. Esteve no local do crime? (sim/não)");
    }
    else if (i === 3) {
        resposta = prompt("3. Mora perto da vítima? (sim/não)");
    }
    else if (i === 4) {
        resposta = prompt("4. Devia dinheiro para a vítima? (sim/não)");
    }
    else if (i === 5) {
        resposta = prompt("5. Trabalha ou já trabalhou com a vítima? (sim/não)");
    }
    else if (i === 6) {
        resposta = prompt("6. Tinha relacionamento amoroso com a vítima? (sim/não)");
    }
    else if (i === 7) {
        resposta = prompt("7. Ficou feliz com o que aconteceu? (sim/não)");
    }
    else if (i === 8) {
        resposta = prompt("8. Possui arma de fogo? (sim/não)");
    }

    // conta se respondeu "sim"
    if (resposta.toLowerCase() === "sim") {
        respostasSim++;
    }
}

// classificação final
let classificacao = "";

if (respostasSim === 8) {
    classificacao = "Assassino";
}
else if (respostasSim >= 5 && respostasSim <= 7) {
    classificacao = "Possível criminoso";
}
else if (respostasSim === 4) {
    classificacao = "Suspeito";
}
else {
    classificacao = "Inocente";
}

alert(
    "Respostas positivas: " + respostasSim +
    "\nClassificação: " + classificacao
);
