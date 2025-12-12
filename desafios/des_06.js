// Peça a quantidade de termos da sequência de Fibonacci e imprima até esse termo.
let n = Number(prompt("Digite qual termo da sequência você quer:"));
let a = 0
let b = 1
let soma
let resultado = "0, 1"

if (n === 0) {
  alert("O termo 0 é: 0")
  alert("A sequência completa:\n0")
} else if (n === 1) {
  alert("O termo 1 é: 1")
  alert("A sequência completa:\n0, 1")
} else {
  for (let i = 2; i <= n; i++) {
    soma = a + b
    resultado += ", " + soma
    a = b
    b = soma
  }
  alert("A sequência completa:\n" + resultado)
  alert("O termo " + n + " é: " + b)
}


