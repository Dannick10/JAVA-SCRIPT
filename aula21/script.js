let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return false 
    } else {
        return true 
    }
}

function add(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =  `Valor ${num.value} adicionado`
        console.log(` ${valores}`)
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        let soma = 0
        let media = 0
       
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor){
            menor = valores[pos]
        }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma da lista é ${soma}</p>`
        res.innerHTML += `<p>A media da lista é ${media}</p>`

        

    }
}