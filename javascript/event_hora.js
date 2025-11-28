// Peça a duração de um evento em segundos.
// Mostre o tempo em horas, minutos e segundos.

const evento = Number(prompt("Digite quanto tempo seu evento vai durar (em segundos):"))
const horas = (evento / 3600).toFixed(2)
const minutos = (evento / 60).toFixed(2)
const segundos = evento.toFixed(2)
alert(  "O evento dura:\n" +  horas + " horas\n" +  minutos + " minutos\n" +  segundos + " segundos")
