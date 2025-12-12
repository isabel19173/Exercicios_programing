// Imprima a sequência de Fibonacci até o 10º termo.
let a = 0
let b = 1
let c
alert(a)
alert(b)

for (let i = 3; i <= 10; i++) {
  c = a + b
  alert(c)
  a = b
  b = c
}
