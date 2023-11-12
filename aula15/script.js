function calcular(){
let n = document.getElementById('txnumber')
let res = document.getElementById('res')
n = Number.parseInt(n.value) 

    if(n <= 0 || n > 10){
        window.alert('não é possivel fazer essa soma')
    } else {
        res.innerHTML = `tabuada de ${n} <br>`
        
       for(let i = 1; i <= 10; i++){
        res.innerHTML += `<br> <hr>${n} * ${i} = ${n*i} `
        
        if( i < 2){
            res.innerHTML += '🔜'
        } else if (i < 10){
            res.innerHTML += '⏺'
        } else {
            res.innerHTML += '🔚'
        }

       }
    }

}