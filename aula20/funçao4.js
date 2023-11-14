function fat(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fat(5))


// 5 = 5 x4 x3 x2 x1 = 120