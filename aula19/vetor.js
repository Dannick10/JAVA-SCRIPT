let valores = [8,1,2,6,4,5]

for(let i = 0; i < valores.length; i++){
    console.log(`Mostrando elemento da variavel composta ${valores[i]}`)
   
}


let valor = valores.indexOf(5)
console.log(`o valor 8 está na posição ${valor}`)

valores.sort()
valores.push(9)
 valor = valores.indexOf(5)
console.log(valores.length + ' elementos')

for(let pos in valores){

    console.log(`os elementos com for in ${valores[pos]}`)
}


console.log(`o valor 8 está na posição ${valor}`)