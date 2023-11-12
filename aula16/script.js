function enviar(){

    let inicio = document.getElementById('txinicio')
    let fim = document.getElementById('txfim')
    let count = document.getElementById('txcount')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || count.value.length == 0){
        window.alert('erro')
    } else {
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(count.value)
        if ( p <= 0){
            window.alert('passo invalido')
            p = 1
        }
        if (i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} 👉`
        }
      
    }   else {
        for(let c = i; c >= f; c-= f){
            res.innerHTML += ` ${c} 👉`
        }
        res.innerHTML += '🏁'
     } 

    }
}


    /*
  
       if(count > fim){
        window.alert('teste novamente ')
       }else {
    for(inicio; inicio <= fim; inicio++){
        inicio = inicio + count 
        
        res.innerHTML += `${inicio} 👉`

        }

        res.innerHTML += '🏁'
    }
 */   
