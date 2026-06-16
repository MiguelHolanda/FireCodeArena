let n = [53, 64, 68, 66, 76]
let total = 0 
for(let i = 0; i<n.length; i++){
    total = total + n[i]
}
 let media = total/n.length
let a =[]


for(let i = 0; i<n.length; i++){
    if(n[i] >= media){
        a.push(n[i])
    }else{ }
}



console.log("")
console.log("______________________________")
console.log("")
console.log("   ~VALORES")
console.log("_______")
console.log("")

for(let i = 0; i<n.length; i++){
console.log(`      ${n[i]}`)
console.log("~~~~~")
}

console.log("")
console.log("______________________________")
console.log("")

console.log(`         MEDIA ${media}`)

console.log("______________________________")
console.log("")
console.log(`   ~APROVADOS; ${a.length}`)
console.log("_______")
console.log("")

for(let i = 0; i<a.length; i++){
console.log(`      ${a[i]}`)
console.log("~~~~~")
}

console.log("")
console.log("_______________________________")
console.log("")


