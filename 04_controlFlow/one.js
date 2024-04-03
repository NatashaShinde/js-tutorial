if (true) {
	//code will execute here
}

if (false) {
	//code won't execute
}

const isUserLoggedIn = true
if (isUserLoggedIn) {
}

if (3 != 2) {
	// console.log('executed')
}

// operators
/*
<= : greater than or is equal to (2<=2),
>= : less than or is equal to,
== : is equal to
!= : is not equal to (3 != 2) //result: true
=== : strict equal (check type also) (2 === '2') //false
*/
//==============================================

const temp = 50
if (temp === 45) {
	// console.log('temp is less than 50')
} else {
	// console.log('temp is greater than 50')
}
// console.log('executed')

//==============================================

const score = 200
if (score > 100) {
	const power = 'fly'
	// console.log(`User power : ${power}`)
}
// console.log(`User power : ${power}`) //error should display here
//but if we use var then it will execute, which is not good environment
//so we can use let or const, for better practice

//==============================================

// const balance = 1000

// if (balance < 500) {
//   console.log(`less than 500`)
// } else if (balance < 750) {
//   console.log(`less than 750`)
// } else if (balance < 900) {
//   console.log(`less than 750`)
// } else {
//   console.log(`less than 1200`)
// }
//output: less than 1200

//==============================================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 3 <= 2) {
	// console.log('Allow to buy course')
}

if (loggedInFromGoogle || loggedInFromEmail) {
	console.log('User logged in') //any 1 condition is true
}
