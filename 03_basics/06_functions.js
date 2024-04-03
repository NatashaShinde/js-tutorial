// function printHello() {
// 	console.log('Hello Hi A')
// 	console.log('Hello Hi B')
// 	console.log('Hello Hi C')
// 	console.log('Hello Hi D')
// 	console.log('Hello Hi E')
// }

// // no return, no argument
// // return but no argument
// // no return but argument
// // returns and arguments

// printHello()

// // did soem work

// printHello()

// // did some work

// printHello()

// // ===========================================

// function sayHello(name) {
// 	console.log('Hello ' + name)
// }

// let d = sayHello('Samco') // Hello undefined
// sayHello(3) // Hello undefined
// sayHello(23, 34) // Hello undefined
// sayHello() // Hello undefined

// // =========================================

// let a = 5
// let b = 34

// // interpreter add return statement at the end of every function
// // Return: 1. Return value:
// // 2. Return control : it returns undefined

// function calculateValue() {
// 	if (a == 0 || b == 0) return

// 	let myValue = ((a * b * (a - b)) / b) * a * (a + b)
// 	return myValue
// }

// let c = calculateValue()
// console.log(c)

function sayHello(name) {
	if (name) {
		console.log('Hello ' + name)
	} else {
		return
	}
}

const greeting = sayHello()
console.log(greeting)
