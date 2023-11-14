function fat(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c 
      
    }
    return fat 
}

function soma(n1,n2){
   return n1 + n2 + fat(5)

}

console.log(soma(20,0))

console.log(fat(5))

