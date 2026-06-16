let n = [42, 54, 24, 234, 245]
let d = []

for(let i = 0; i<n.length; i++){
    let conta =n[i]*2
        d.push(conta)
}

console.log("")
console.log("__________________________________")
console.log("")
console.log("      ~~~DOBRO") 
console.log("________________")  
console.log("")

for(let i = 0; i<n.length; i++){
    console.log(`  ~~NUMERO; ${n[i]} __ ~~DOBRO; ${d[i]}`)
    console.log("           ~~~~~~~~~~~~")
    console.log("")
}
console.log("")
console.log("___________________________________")
console.log("")