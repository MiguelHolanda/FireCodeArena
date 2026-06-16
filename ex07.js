let ns = [34, 325, 64, 55, 23, 65,754,36,  35, 743]
let par = []
let imp = []

for(let i = 0; i<ns.length; i++){
if(ns[i]%2 !=0){
imp.push(ns[i])
}else{
    par.push(ns[i])
}
}

par.sort( (a, b) => a-b)
imp.sort( (a, b) => a-b)


console.log("")
console.log("______________________________________________________")
console.log("")
console.log(`  QUANTIDADE DE NUMEROS PARES; ${par.length}`)
console.log("___________")
console.log("")


for(let i = 0; i<par.length; i++){
console.log(` ${i+1}º NUMERO PAR; ${par[i]}`)
console.log("~~~~~~~~")
}

console.log("")
console.log("_______________________")
console.log("")
console.log(`  QUANTIDADE DE NUMEROS IMPARES; ${imp.length}`)
console.log("____________")
console.log("")

for(let i = 0; i<imp.length; i++){
console.log(` ${i+1}º NUMERO IMPAR; ${imp[i]}`)
console.log("~~~~~~~~")
}

console.log("")
console.log("_______________________________________________________")
console.log("")
