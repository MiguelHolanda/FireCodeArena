const r = require("readline-sync")
let p = []
let n = []

console.log("")
console.log("___________________________________")
console.log("")
console.log("     POSITIVOS E NEGATIVOS")
console.log("_________________________________")
console.log("")
let nun = r.questionInt("   QUANTOS NUMEROS DESEJA DIGITAR:  ")
console.log("_________________________________")
console.log("")

if(nun<=0){
    console.log("    ERRO, OS VALORES PRECISAM SER MAIORESES DO QUE 0!!!")
}else{

    for(let i = 1; i<=nun; i++){
let analise = r.questionInt(`   ${i}º NUMERO; `)
console.log("~~~~~")

if(analise<0){
    n.push(analise)
}else{
    p.push(analise)
}

}
p.sort( (a, b) => a-b)
n.sort( (a, b) => a-b)


console.log("")
console.log("_______________________________")
console.log("")
console.log(`    ~NUMEROS POSITIVOS: ${p.length}`)
console.log("____________")
console.log("")

for(let i = 0; i<p.length; i++){
console.log(`   ${i+1}º NUMERO POSITIVO; ${p[i]} `)
console.log("~~~~~~~~~")
}

console.log("")
console.log("_______________________________")
console.log("")
console.log(`    ~NUMEROS NEGATIVOS; ${n.length}`)
console.log("____________")
console.log("")

for(let i = 0; i<n.length; i++){
console.log(`   ${i+1}º NUMERO NEGATIVO; ${n[i]}`)
console.log("~~~~~~~~~~~")

}


}
console.log("")
console.log("___________________________________")
console.log("")