var agora = new Date()
var hora = agora.getHours()
var minutes = agora.getMinutes()
console.log(`Agora são exatamentes ${hora}:${minutes}.`)

if(hora < 12){
    console.log('bom dia')
} else if(hora <= 18){
    console.log('boa tarde')
} else {
    console.log('boa noite')
}