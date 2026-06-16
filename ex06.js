let nt = [3, 5, 7, 9]
let total = 0

for(let i = 0; i<nt.length; i++){
    total = total + nt[i]
}
let m = total/nt.length

console.log("")
console.log("______________________________")
console.log("")
console.log(`  ~NOTAS DO ALUNO `)
console.log("__________________")
console.log("")


for(let i = 0; i<nt.length; i++){
    console.log(`     ~~${nt[i]}`)
    console.log("~~~~")
}


console.log("")
console.log("_________________")
console.log("")
console.log(`   ~MEDIA DO ALUNO; ${m}`)
console.log("")
if(m<7){
    console.log("    ALUNO REPROVADO!!!")
}else{
    console.log("    PARABENS, ALUNO APROVADO!!!")
}
console.log("")
console.log("_______________________________")
console.log("")

