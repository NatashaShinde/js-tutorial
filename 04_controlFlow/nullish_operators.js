// Nullish coalescing operator (??): null undefined
let val1
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10

console.log(val1) //5

// Ternairy operator
// condition ? true : false
const iceTeaValue = 100
iceTeaValue <= 80 ? console.log(`less than 80`) : console.log(`greater than 80`)
