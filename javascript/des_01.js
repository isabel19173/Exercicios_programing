// Peça dois valores (A e B), mostre os valores originais, troque os conteúdos das variáveis e mostre os valores após a troca.
const A = Number(prompt("Digite o valor de A:"))
const B = Number(prompt("Digite o valor de B:"))
alert("Valores originais:\n A ="+ A +"\n B="+ B)
//*const temp = A \n A = B \n B = temp*//
[A, B] = [B, A]
alert("Valores após a troca:\n A =" + A + "\n B =" + B)
