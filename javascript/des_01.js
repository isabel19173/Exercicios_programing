// Peça dois valores (A e B), mostre os valores originais, troque os conteúdos das variáveis e mostre os valores após a troca.
let A = Number(prompt("Digite o valor de A:"))
let B = Number(prompt("Digite o valor de B:"))
alert("Valores originais:\n A = " + A + "\n B = " + B)
let temp = A
A = B      
B = temp    
alert("Valores após a troca:\n A = " + A + "\n B = " + B)
