let nts = [8, 4, 4, 5 , 6, 8, 9, 7]
let a =[]
let r =[]

for(let i =0; i<nts.length; i++){
    if(nts[i]>=7){
        a.push(nts[i])
    }else{
        r.push(nts[i])
    }
}

console.log("")
console.log("________________________________________")
console.log("")
console.log("     ~APROVADOS E REPROVADOS")
console.log("________________")
console.log("")
console.log("    ~~NOTAS TOTAIS")
console.log("________________")
console.log("")

for(let i =0; i<nts.length; i++){
    console.log(`   ~~~${nts[i]}`)
    console.log("~~~~~~")
}

console.log("")
console.log("______________________")
console.log("")
console.log(`   ~~~APROVADOS; ${a.length}`)
console.log("__________")
console.log("")

for(let i =0; i<a.length; i++){
    console.log(`  ~~~${a[i]}`)
    console.log("~~~~~")
}

console.log("")
console.log("______________________")
console.log("")
console.log(`   ~~~REPROVADOS; ${r.length}`)
console.log("____________")
console.log("")

for(let i = 0 ; i<r.length; i++){
console.log(`   ~~~${r[i]}`)
console.log("~~~~~~")
}
console.log("")
console.log("_________________________________________")
console.log("")