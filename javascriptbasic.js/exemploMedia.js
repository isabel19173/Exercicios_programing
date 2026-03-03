// Entrada -Varíavés

const nota1=  Number(prompt("Digite 1ª nota:"))
const nota2= Number(prompt("Digite 2ª nota:"))
const nota3= Number(prompt("Digite 3ª nota:"))
const soma= (nota1 + nota2 + nota3)
let media = (soma /3)

alert (media)

// menor que 3
if (media < 3) {
    alert("Média está abaixo de 6 , sua média "+ media +" ,Horrível");
// menor que 7
} else if (media < 7) {
    alert("Média está abaixo de 6 , sua média "+ media + ", Melhora ");
 // maior que 7
} else if (media >= 7) {
    alert("Média está acima de 6 , sua média "+ media +", Gênio");
}