const r = require("readline-sync")
let ns = ["matheus", "fiama", "atila", "faabri", "luiz"]


console.log("")
console.log("_________________________________________________________")
console.log("")
let q = r.question("  BUSQUE UM NOME: ")
console.log("_________")
console.log("")

let encontrado = false

for (let i = 0; i < ns.length; i++) {
    if (q === ns[i]) {
        encontrado = true
        break  
    }
}


if (encontrado) {
    console.log("    NOME ENCONTRADO!")
} else {
    console.log("    NOME NÃO ENCONTRADO!")
}
console.log("")
console.log("__________________________________________________________")
console.log("")