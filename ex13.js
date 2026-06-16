const r = require("readline-sync")


let d3 =[]
let on =[]

console.log("")
console.log("_________________________________________________")
console.log("")
console.log("            ~~~MULTIPLOS DE 3")
console.log("_________________________________________________")
console.log("")

let qt = r.questionInt("     QUANTOS NUMEROS DESEJA DIGITAR;  ")
console.log("________________")

if(qt<=0){
    console.log("    ERRO, O VALOR PRECISA SER MAIOR QUE 0!!!")
}
else{



console.log("")
console.log("    ~~DIGITE OS NUMEROS")
console.log("_____________")
console.log("")

for(let i= 0; i<qt; i++){

    let analise = r.questionInt(`    ${i+1}º NUMERO;  `)
    console.log("~~~~")


    if(analise%3!=0){
        on.push(analise)
    }else{
        d3.push(analise)
    }
}

d3.sort( (a, b) => a-b)
on.sort( (a, b) => a-b)

console.log("")
console.log("_________________________________________")
console.log("")
console.log(`   ~DIVISIVEIS POR 3 ; ${d3.length}`)
console.log("_______________")
console.log("")

for(let i = 0; i<d3.length; i++){
console.log(`  ${i+1}ºNUMERO; ${d3[i]}  ____   3 x ${d3[i]/3} = ${d3[i]}`)
console.log("~~~~~~~")
}
console.log("")
console.log("________________________________________")
console.log("")
console.log(`   ~NÃO DIVISIVEIS POR 3; ${on.length}`)
console.log("______________")
console.log("");

for(let i = 0; i<on.length; i++){
    console.log(`  ${i+1}ºNUMERO; ${on[i]}`)
    console.log("~~~~~~~~")
}}


console.log("")
console.log("_________________________________________")
console.log("")
