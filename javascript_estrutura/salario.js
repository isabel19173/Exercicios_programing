// FUB o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.

const re = Number(prompt("Digite o valor da hora trabalhada: R$"))
const re2 = Number(prompt("Digite a quantidade de horas trabalhadas: "))

const salario = re * re2;

alert(`O valor da hora trabalhada é R$ ${re} e a quantidade de horas é ${re2}. O salário total é  de R$ ${salario}.`)