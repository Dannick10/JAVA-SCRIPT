function calcular(){
    let num = document.getElementById('txn')
    let tab = document.getElementById('res')

    if(num.value.length == 0){
        window.alert('digite um numero')
    }else {  
        tab.innerHTML =''
        let n = Number(num.value)
        let c = 1 
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
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
