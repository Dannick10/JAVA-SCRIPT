
function conferir(){
    var data = new Date()
    var fano =  data.getFullYear()
    var digano = document.getElementById('txano')
    var res = document.getElementById('res')
    var perfil = document.createElement('img')
   
  

    if(digano.value == 0 || digano.value > fano ){
        
        window.alert('[erro] valor invalido')
     
    } else{
        idade = fano - digano.value 
        var fsex = document.getElementsByName('radsex')
        var genero = ''

        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        

        if(fsex[0].checked){

            if(idade < 18){
                genero = 'menino'
                img.setAttribute('src','imagens/m1.jpg')
            } else if(idade < 60){
                genero = 'homem'
                img.setAttribute('src','imagens/m2.jpg')
            } else {
                genero = 'idoso'
                img.setAttribute('src','imagens/m3.jpg')
            } 

            } else if(fsex[1].checked){

                if(idade < 18){
                    genero = 'menina'
                    img.setAttribute('src','imagens/w1.jpg')
                } else if(idade < 60){
                    genero = 'Mulher'
                img.setAttribute('src','imagens/w2.jpg')
                } else {
                    genero = 'Idosa'
                img.setAttribute('src','imagens/w3.jpg')
                } 

            }

            res.innerHTML = `${genero} de ${idade} <br>`
            res.appendChild(img)
          
        }
          

          
      
    }


