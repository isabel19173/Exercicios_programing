// Lista das perguntas
let perguntas = [
    "1. Trocou mensagens com a vítima?",
    "2. Esteve no local do crime?",
    "3. Mora perto da vítima?",
    "4. Devia dinheiro para a vítima?",
    "5. Trabalha ou já trabalhou com a vítima?",
    "6. Tinha relacionamento amoroso com a vítima?",
    "7. Ficou feliz com o que aconteceu?",
    "8. Possui arma de fogo?"
];

let respostasSim = 0;

// Loop para fazer as 8 perguntas
for (let i = 0; i < perguntas.length; i++) {
    let resp = prompt(perguntas[i] + " (sim/não)").toLowerCase();

    if (resp === "sim" || resp === "s") {
        respostasSim++;
    }
}

// Classificação final
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
