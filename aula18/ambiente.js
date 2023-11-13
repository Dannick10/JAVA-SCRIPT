let num = [1,2,5,3,4]

num.push(6)
num.sort()
console.log(num)

console.log(`o vetor tem ${num.length} posições`)

console.log(`o primeiro valor do vetor é ${num[0]}`)

for(let i=0; i < num.length; i++){
    console.log(`o vetor sequencial é ${num[i]}`)
}