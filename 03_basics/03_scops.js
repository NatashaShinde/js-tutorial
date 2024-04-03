var num3 = 300
if (true) {
	let num1 = 10
	const num2 = 20
	var num3 = 30
}

// console.log(num1)
// console.log(num2)
// console.log(num3) //30

//====================================

let a = 23

function printA() {
	let a = 34

	if (4 > 3) {
		let a = 45
		// console.log(a) //45
	}

	// console.log(a) //34
}

printA()

// console.log(a) //23

//=======================================

const one = () => {
	const username = 'Samco'

	const two = () => {
		const website = 'kyatrade'
		// console.log(username) //Samco
	}
	// console.log(website) //error

	two()
}
one()

//========================================

if (true) {
	const username = 'Securites'
	if (username === 'Securites') {
		const website = 'youtube'
		console.log(username + website) //Securitesyoutube
	}
	// console.log(website)
}
// console.log(username)

//=========================================

// hoisting
console.log(addOne(5))
const addOne = num => {
	return num + 1
}

console.log(addTwo(5))
addTwo = num => {
	return num + 2
}
