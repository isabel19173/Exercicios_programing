let qtd = Number(prompt("Quantos números deseja digitar?"));

let positivos = 0;
let pares = 0;
let mult7 = 0;

for (let i = 1; i <= qtd; i++) {
    let num = Number(prompt(`Digite o ${i}º número:`));

    if (num > 0) {
        positivos++;
    }

    if (num % 2 === 0) {
        pares++;
    }

    if (num % 7 === 0) {
        mult7++;
    }
}

alert(
    "Resultados:\n" +
    "Positivos: " + positivos + "\n" +
    "Pares: " + pares + "\n" +
    "Múltiplos de 7: " + mult7
);
