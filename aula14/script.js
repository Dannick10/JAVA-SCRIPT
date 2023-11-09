function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('verifica os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''

       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        document.body.style.transition = '2s'
        
        if (idade >=0 && idade < 18){
            genero = 'menino'
            img.setAttribute('src','imagens/m1.jpg')
            
        } else if (idade  < 60){
            genero = 'homem'
            img.setAttribute('src','imagens/m2.jpg')
            document.body.style.background = 'rgb(20,20,30)'

        }  else {
            genero = 'idoso'
            img.setAttribute('src','imagens/m3.jpg')
            document.body.style.background = 'rgb(20,20,20)'
        }

       } else if (fsex[1].checked){
        document.body.style.transition = '2s'
        
        if (idade >=0 && idade < 18){
            genero = 'menina'
            img.setAttribute('src','imagens/w1.jpg')
            document.body.style.background = 'rgb(100,50,100)'
        } else if (idade  < 60){
            genero = 'mulher'
             img.setAttribute('src','imagens/w2.jpg')
             document.body.style.background = 'rgb(100,60,100)'

        }  else {
            genero = 'idosa'
            img.setAttribute('src','imagens/w3.jpg')
            document.body.style.background = 'rgb(100,80,100)'
        }
       }
    }
    img.style.textAlign= 'center'

    res.innerHTML = `$Detectamos ${genero} com ${idade} anos <br>`
    res.appendChild(img)

}


