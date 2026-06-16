const r = require("readline-sync")
let notas = []
let total = 0
let aprovados = []
let reprovados = []
let maior = 0
let menor = Infinity

console.log("")
console.log("_________________________________________________")
console.log("")
console.log("              ~~SEDUC DEST 1")
console.log("_________________________________________________")
console.log("")
let qtd = r.questionInt("   ~QUANTIDADE DE ALUNOS NA SALA; ")
console.log("_______________________")
console.log("")
if(qtd<=0){
    console.log("  ERRO, OS VALORES PRECISAM SER MAIORES DO QEU 0!!!")
}else{



for(let i = 1; i<=qtd; i++){
    let analise = r.questionInt(`  ${i}ºNOTA; `)
    console.log("~~~~~~~")
    console.log("")

    notas.push(analise)
    total = total + analise

    if(analise>=7){
        aprovados.push(analise)
    }else{
        reprovados.push(analise)
    }

    if(analise>maior){
        maior = analise
    }else{}

    if(analise<menor){
        menor = analise
    }else{}
}
let media = total/qtd

console.log("")
console.log("__________________________________________________")
console.log("")
console.log("     ~RELATORIO DE CLASSE")
console.log("__________________________")
console.log("")
console.log(`     ALUNOS NA CLASSE; ${qtd}`)
console.log("~~~~~~")
console.log("")
console.log(`     NOTA MEDIA DA TURMA; ${media.toFixed(2)}`)
console.log("~~~~~~")
console.log("")
console.log(`     MAIOR NOTA DA SALA; ${maior}`)
console.log("~~~~~~")
console.log("")
console.log(`     MENOR MEDIA DA CLASSE; ${menor}`)
console.log("~~~~~~")
console.log("")
console.log(`     ALUNOS APROVADOS; ${aprovados.length}`)
console.log("~~~~~~")
console.log("")
console.log(`     ALUNOS REPROVADOS; ${reprovados.length}`)
console.log("~~~~~~")
}
console.log("")
console.log("__________________________________________________")
console.log("")












