const r = require("readline-sync")
let par = []
let impar = []

console.log("")
console.log("________________________________________________________")
console.log("")
console.log("            ~~~~~~PARES E IMPARES")
console.log("_________________________")
console.log("")
let n = r.questionInt("   DIGITE QUANTOS NUMEROS DESEJA LISTAR:  ")
console.log("_________________________")
console.log("")

if(n<=0){
    console.log("   ERRO, O VALOR PRECISA SER MAIOR QUE 0!!!")
}else{

for(let i = 1; i<=n; i++){
let  analise = r.questionInt(` ${i}º numero;  `)
console.log("~~~~~~")


if(  analise%2 !=0 ){
    impar.push(analise)
}else{
    par.push(analise)
}
}
par.sort( (a, b) => a-b)
impar.sort( (a, b) => a-b)


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
console.log(`  QUANTIDADE DE NUMEROS IMPARES; ${impar.length}`)
console.log("____________")
console.log("")

for(let i = 0; i<impar.length; i++){
console.log(` ${i+1}º NUMERO IMPAR; ${impar[i]}`)
console.log("~~~~~~~~")
}}

console.log("")
console.log("_______________________________________________________")
console.log("")

