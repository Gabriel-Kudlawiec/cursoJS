var hora_atual = new Date()
var horas = hora_atual.getHours()
console.log(`Agora são ${horas} horas.`)  
if (horas <= 5) {
console.log(`Boa madrugada!`)
} else if (horas <= 12) {
    console.log(`Bom dia!`)
} else if (horas <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}

