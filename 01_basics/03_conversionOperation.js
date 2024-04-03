let score = '33'
// console.log(typeof(score)); //string

// =========================================================

let valueNumber = Number(score) //33
// console.log(valueNumber)

// =========================================================

let contract = 'NSE_3344'
let valNumber = Number(contract)

// console.log(typeof (valNumber)) //number
// console.log(valNumber) //NaN

// =========================================================

let value = null
// console.log(typeof null) //object
// console.log(null) //null

let scoreValue = Number(value)
// console.log(typeof scoreValue) //number
// console.log(scoreValue) //0

// =========================================================

let num = undefined
newNum = Number(num)

// console.log(newNum) //NaN
// console.log(typeof newNum) //number

// ==========================================================

let details = true
newDetail = Number(details)

// console.log(newDetail) //1
// console.log(typeof (newDetail)) // number

// ==========================================================

/* Number conversion output's

"33" => 33
"NSE_3344" => NaN
true => 1, false => 0
*/

// ==========================================================

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

/* Boolean conversion 
1 => true
"" => flase
"Samco" => true
*/

// ==========================================================
// String conversion
let someNumber = 33
let convertSomeNumber = String(someNumber)

console.log(convertSomeNumber) // 33
console.log(typeof convertSomeNumber) //string

// We can convert in obhject and array also
