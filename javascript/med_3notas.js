//Peça três notas de um aluno, calcule a média e informe:
//"Aprovado" se a média for maior ou igual a 7
//"Recuperação" se for maior ou igual a 5 e menor que 7
//"Reprovado" se for menor que 5//

const nota1=  Number(prompt("Digite 1ª nota:"))
const nota2= Number(prompt("Digite 2ª nota:"))
const nota3= Number(prompt("Digite 3ª nota:"))
const soma= (nota1 + nota2 + nota3)
let media = (soma /3).toFixed(1)

alert (media)

// menor que 5
if (media < 5 ) {
    alert("Média está abaixo de 7 , sua média "+ media +" ,Reprovado")
// menor que 7
} else if (media  < 7 ) {
    alert("Média está abaixo de 7 , sua média "+ media + ", Recuperação")
 // maior que 7
} else if (media >= 7) {
    alert("Média está acima de 7 , sua média "+ media +", Aprovado")
    }