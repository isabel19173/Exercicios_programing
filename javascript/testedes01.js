
let A = Number(prompt("Digite o valor de A:"))
let B = Number(prompt("Digite o valor de B:"))

alert("Valores originais:\n A = " + A + "\n B = " + B)
[A, B] = [B, A]
alert("Valores após a troca:\n A =" + A + "\n B =" + B)
