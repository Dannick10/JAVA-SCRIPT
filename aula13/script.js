function carregar(){
var msg = window.document.getElementById('msg')
var photo = window.document.getElementById('imagem')
var data = new Date()
    var horad = data.toLocaleString('pt-br', {hour: '2-digit', hour12: false, minute: '2-digit'})
    var dete = data.toLocaleDateString('pt-br', {dateStyle: 'full'}) 
    hora = data.getHours()
    
    msg.innerHTML =  `${horad}`
    msg.innerHTML += `<br> ${dete}`
    

  
    if( hora >= 0 && hora < 12){
        //manha
        photo.src = 'imagem/manha.jpg'
        msg.innerHTML += ' da manha'
        window.document.body.style.background = 'rgb(158,163,85)'
    } else if ( hora >= 12 && hora < 18){
//tarde 
        photo.src = 'imagem/tarde.jpg'
        msg.innerHTML += ' da tarde'
        window.document.body.style.background = 'rgb(250,120,80)'
    } else {
//noite
            photo.src = 'imagem/noite.jpg'
            msg.innerHTML += ' da noite'
            window.document.body.style.background = 'rgb(60,60,120)'
    }

   
}


