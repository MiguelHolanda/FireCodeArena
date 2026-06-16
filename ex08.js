let ns = [-23, 23, 232, 323, -1, 231, -3444, -24, -23, 10]
let p = []

for(let i = 0; i<ns.length; i++){
if(ns[i]>=0){
    p.push(ns[i])
}else{}
}
p.sort( (a, b) => a-b)

console.log("")
console.log("_______________________________________________")
console.log("")
console.log(`   ~NUMEROS POSITIVOS ENTRE; ${ns}`)
console.log("_____________________")
console.log("")
console.log(`   ~NUMEROS POSITIVOS; ${p.length}`)
console.log("~~~~~~~~~~~")

for(let i = 0; i<p.length; i++){
    console.log(`    1º NUMERO; ${p[i]}`)
console.log("~~~~")
}

console.log("")

console.log("________________________________________________")

console.log("")