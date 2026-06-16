let idades = [12, 43, 45, 19, 18]
let ma = []
let me = []
for(let i = 0; i<idades.length; i++){

    if(idades[i]<18){
        me.push(idades[i])
    }else{
        ma.push(idades[i])
    }
}
ma.sort( (a, b) => a-b)
me.sort( (a, b) => a-b)

console.log("")
console.log("____________________________________")
console.log("")
console.log(`  MAIORES E MENORES DE IDADE ENTRE; ${idades} `)
console.log("___________")
console.log("")
console.log(`   MAIORES DE IDADE; ${ma.length}`)
console.log("")
for(let i = 0; i<ma.length; i++){
    console.log(` ~~${ma[i]}`)
    console.log("~~~~~")
}
console.log("")
console.log("____________")
console.log("")
console.log(`  MENORES DE IDADE; ${me.length}`)
console.log("")
for(let i = 0; i<me.length; i++){
    console.log(` ~~${me[i]}`)
    console.log("~~~~~~")


}
console.log("")
console.log("___________________________________")
console.log("")